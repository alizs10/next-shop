import User from '../../../database/Models/User';
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


        const randomCode = Math.floor(Math.random() * 1000000)

        try {
            await transporter.sendMail({
                from: process.env.NODEMAILER_USER,
                to: user.email,
                subject: "Active Nike Shoe Shop Account",
                text: "this is your verification code",
                html: `<h1>Verification Code</h1><p>${randomCode}</p>`
            })

        } catch (error) {
            res.status(500).json({ message: "couldn't send verification code", error: error.message })
            return
        }

        await User.updateOne({ email: user.email }, { $set: { verification_code: randomCode } })
        closeConnection()

        res.status(200).json({ message: "verification code send successfully!" })
        return
    }


}

export default handler;