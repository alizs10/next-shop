import User from "../../../database/Models/User";
import { hashPassword } from "../../../helpers/helpers";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    if (req.method === "POST") {

        let formData = req.body;

        let { fullName, email, password, passwordConfirmation } = formData;

        // validation


        try {

            // connect to database
            await connectDatabase(process.env.DB_NAME)

            // check if email in unique
            let isExists = await User.findOne({ email })

            if (isExists) {
                closeConnection()
                res.status(422).json({ message: "User Already Exists!" })
                return
            }

            let hashedPassword = await hashPassword(password);

            // insert user
            let newUser = await User.create({ fullName, email, password: hashedPassword })
            closeConnection()

            res.status(201).json({ message: "user created successfully", user: { fullName: newUser.fullName, email: newUser.email, createdAt: newUser.createdAt, updatedAt: newUser.updatedAt } })

        } catch (error) {

            closeConnection()
            res.status(500).json({ message: error.message })
        }

    }
}

export default handler;