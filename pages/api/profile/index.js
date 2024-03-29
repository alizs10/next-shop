import User from "../../../database/Models/User";
import useAuth from "../../../hooks/useAuth";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    if (req.method === "PUT") {
        await connectDatabase(process.env.DB_NAME)

        let inputs = req.body;

        let user = await useAuth(req);
        if (!user) {
            closeConnection()
            res.status(403).json({ message: "not authorized!" })
            return
        }

        if (inputs.email !== user.email) {

            let isExists = await User.findOne({ email: inputs.email })
            if (isExists) {
                res.status(422).json({ email: "email is already exists!" })
                return
            }

            inputs.activation = null
        }

        await User.updateOne({ email: user.email }, { $set: inputs })

        let updatedUser = { ...user, ...inputs }

        closeConnection()
        res.status(200).json({ message: "user updated successfully!", user: updatedUser })
    }


}

export default handler;