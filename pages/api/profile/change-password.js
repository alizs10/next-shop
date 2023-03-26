import { hashPassword, verifyPassword } from '../../../helpers/helpers';
import User from '../../../database/Models/User';
import { closeConnection, connectDatabase } from '../../../util/database-util';
import useAuth from '../../../hooks/useAuth';

async function handler(req, res) {

    if (req.method === 'PUT') {


        await connectDatabase(process.env.DB_NAME)

        let user = await useAuth(req)

        if (!user) {
            res.status(403).json({ message: "not authorized!" })
            return
        }

        let inputs = req.body;

        // validate here
        // let { errors, hasError } = zValidate(changePasswordSchema, inputs)

        // if (hasError) {
        //     res.status(422).json({ message: "invalid form!", errors })
        //     return
        // }

        console.log();
        let isPasswordValid = await verifyPassword(inputs.currentPassword, user.password)

        if (!isPasswordValid) {
            res.status(422).json({ message: "password is wrong", errors: { currentPassword: "password is wrong!" } })
            return
        }

        //change password
        let hashedPassword = await hashPassword(inputs.newPassword)
        await User.updateOne({ email: user.email }, { $set: { password: hashedPassword } })

        closeConnection()
        res.status(200).json({ message: "your password changed successfully" })
        return


    }


}

export default handler;