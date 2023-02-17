import Size from "../../../database/Models/Size";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {
    await connectDatabase(process.env.DB_NAME)

    if (req.method === "GET") {
        const sizes = await Size.find()
        res.status(200).json({ message: "sizes loaded successfully", sizes })
    }

    closeConnection()
}

export default handler;