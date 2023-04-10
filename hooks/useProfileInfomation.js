import Order from "../database/Models/Order";
import Payment from "../database/Models/Payment";
import Address from "../database/Models/Address";
import Favorite from "../database/Models/Favorite";

export default async function useProfileInformation(user) {

    let ordersCount = await Order.countDocuments({ user: user._id })
    let favoritesCount = await Favorite.countDocuments({ user: user._id })
    let paymentsCount = await Payment.countDocuments({ user: user._id })
    let addressesCount = await Address.countDocuments({ user: user._id })

    return {
        ordersCount,
        favoritesCount,
        paymentsCount,
        addressesCount
    }
}