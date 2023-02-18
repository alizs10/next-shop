import Size from "../../../database/Models/Size";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {
    await connectDatabase(process.env.DB_NAME)

    if (req.method === "GET") {
        const sizes = await Size.find()
        res.status(200).json({ message: "sizes loaded successfully", sizes })
    }

    if (req.method === "POST") {
        const formData = req.body;

        // create new size
        const newSize = await Size.create(formData)
        res.status(201).json({ message: "new size created successfully", size: newSize })
    }

    closeConnection()
}

export default handler;