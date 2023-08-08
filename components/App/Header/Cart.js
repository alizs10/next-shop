import useAppStore from "../../../stores/app-store";
import BagIcon from "../../ui/icons/BagIcon";
import CartPopup from "./CartPopup";
import { getCartItemsCount } from "../../../helpers/cart-helpers";

function Cart() {

    const { toggleCartPopup, cartPopupVis } = useAppStore()

    return (
        <section className="relative">
            <div onClick={toggleCartPopup} className="cursor-pointer rounded-full text-white bg-red-600 p-1 lg:p-2">
                <div className="scale-75 lg:scale-[80%]">
                    <BagIcon />
                </div>
                {!cartPopupVis && getCartItemsCount() > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 aspect-square bg-white flex justify-center items-center text-red-500 font-bold text-xs rounded-full">{getCartItemsCount()}</span>
                )}
            </div>

            <CartPopup />

        </section>

    );
}

export default Cart;