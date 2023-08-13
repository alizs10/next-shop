import useAuth from "../../../hooks/useAuth";
import Favorite from '../../../database/Models/Favorite';
import { closeConnection, connectDatabase } from '../../../util/database-util';

async function handler(req, res) {

    if (req.method === "POST") {

        await connectDatabase(process.env.DB_NAME)
        let user = await useAuth(req)

        console.log(user);
        if (!user) {
            closeConnection()
            res.status(403).json({ message: "not authorized!" })
            return
        }

        let { productId } = req.body;

        let isExists = await Favorite.find({ user: user._id, product: productId })
        isExists = isExists.length > 0 ? true : false;

        if (isExists) {
            await Favorite.deleteOne({ user: user._id, product: productId })
        } else {
            await Favorite.create({ user: user._id, product: productId })
        }

        let favorites = await Favorite.find({ user: user._id }).populate('product')
        closeConnection()


        res.status(200).json({ message: `product successfully ${isExists ? "deleted from" : "added to"} favorites`, isFavorite: isExists ? false : true, favorites })
        return
    }


}

export default handler;