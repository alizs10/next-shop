import Size from "../../../database/Models/Size";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    await connectDatabase(process.env.DB_NAME)

    if (req.method === "DELETE") {

        let { sizeId } = req.query;
        await Size.findOne({ _id: sizeId }).remove()

        res.status(200).json({ message: "size deleted successfully" })

    }

    closeConnection()
}

export default handler;