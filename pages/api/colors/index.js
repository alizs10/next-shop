import Color from "../../../database/Models/Color";
import { closeConnection, connectDatabase } from "../../../util/database-util";

async function handler(req, res) {

    await connectDatabase(process.env.DB_NAME)

    if (req.method === "GET") {
        const colors = await Color.find()
        res.status(200).json({ message: "colors loaded successfully", colors })
    }

    if (req.method === "POST") {

        let formData = req.body;

        console.log(formData);
        // insert new colors
        const newColor = await Color.create(formData)
        console.log(newColor);

        res.status(201).json({ message: "new color created successfully", color: newColor })
    }

    closeConnection()
}

export default handler;