import User from '../../../database/Models/User';
import { formatDate } from '../../../helpers/helpers';
import useAuth from '../../../hooks/useAuth';
import { closeConnection, connectDatabase } from '../../../util/database-util';
import { transporter } from '../../../util/nodemailer-util';

async function handler(req, res) {

    if (req.method === "POST") {
        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            res.status(403).json({ message: "not authorized!" })
            return
        }

        let inputs = req.body;

        if (user.verification_code !== inputs.vcode) {
            res.status(422).json({ message: "verification code in wrong!" })
            return
        }

        let activationDate = Date.now()
        await User.updateOne({ email: user.email }, { $set: { verification_code: null, activation: activationDate } })

        await transporter.sendMail({
            from: process.env.NODEMAILER_USER,
            to: user.email,
            subject: "Account Activation",
            text: "Your Account Activated",
            html: `<h1>Account Activated</h1><p>Your account activated at ${formatDate(new Date(activationDate))}</p>`
        })

        let updatedUser = await User.findOne({ email: user.email }).select(['-password', '-verification_code'])
        closeConnection()

        res.status(200).json({ message: "user account activated successfully", user: updatedUser })
        return
    }

}

export default handler;