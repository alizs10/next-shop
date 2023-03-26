import Address from '../../../database/Models/Address';
import useAuth from '../../../hooks/useAuth';
import { closeConnection, connectDatabase } from '../../../util/database-util';

async function handler(req, res) {

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)

        let inputs = req.body;
        let user = await useAuth(req)

        inputs.user = user._id;
        let newAddress = await Address.create(inputs)

        closeConnection()

        return res.status(200).json({ message: "new address created successfully", address: newAddress })
    }

}

export default handler;