import Color from "../../../database/Models/Color";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    await connectDatabase(process.env.DB_NAME)

    if (req.method === "DELETE") {

        let { colorId } = req.query;
        await Color.findOne({ _id: colorId }).remove()

        res.status(200).json({ message: "color deleted successfully" })
    }

    closeConnection()
}

export default handler;