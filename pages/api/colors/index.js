import Color from "../../../database/Models/Color";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    await connectDatabase(process.env.DB_NAME)

    if (req.method === "GET") {
        const colors = await Color.find()
        res.status(200).json({ message: "colors loaded successfully", colors })
    }

    closeConnection()
}

export default handler;