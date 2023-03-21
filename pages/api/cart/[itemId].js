import CartItem from "../../../database/Models/CartItem";
import { closeConnection, connectDatabase } from '../../../util/database-util';

async function handler(req, res) {

    if (req.method === "POST") {

        let { itemId } = req.query;
        let { mode: userMode } = req.body;
        var mode = userMode === 'increase' ? 'increase' : 'decrease';

        await connectDatabase(process.env.DB_NAME)

        let cartItem = await CartItem.findById(itemId)

        if (!cartItem) {
            closeConnection()
            res.status(404).json({ message: 'cart item not found!' })
            return
        }

        if (mode === 'increase') {
            cartItem.quantity++;
            await cartItem.save()
        }

        if (mode === 'decrease') {
            if (cartItem.quantity > 1) {
                cartItem.quantity--;
                await cartItem.save()
            } else {
                await CartItem.deleteOne({ _id: cartItem._id })
            }
        }

        closeConnection()
        res.status(200).json({ message: `cart item quantity ${mode}ed successfully!` })
    }

}

export default handler;