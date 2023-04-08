import Address from '../../../database/Models/Address';
import useAuth from '../../../hooks/useAuth';
import { closeConnection, connectDatabase } from '../../../util/database-util';

async function handler(req, res) {

    if (req.method === "GET") {

        await connectDatabase(process.env.DB_NAME)
        console.log("we are here");

        let user = await useAuth(req)
        if (!user) {
            return res.status(403).json({ message: "not authorized!" })
        }

        let addresses = await Address.find({ user: user._id })

        console.log(addresses);
        // closeConnection()

        return res.status(200).json({ message: "user addresses loaded successfully", addresses })
    }

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let inputs = req.body;
        let user = await useAuth(req)

        inputs.user = user._id;
        let newAddress = await Address.create(inputs)

        // closeConnection()

        return res.status(201).json({ message: "new address created successfully", address: newAddress })
    }

}

export default handler;