import useAppStore from "../../../stores/app-store";
import BagIcon from "../../ui/icons/BagIcon";
import CartPopup from "./CartPopup";
import { getCartItemsCount } from "../../../helpers/cart-helpers";

function Cart() {

    const { toggleCartPopup, cartPopupVis } = useAppStore()

    return (
        <section className="relative">
            <div onClick={toggleCartPopup} className="p-1 text-white bg-red-600 rounded-full cursor-pointer lg:p-2">
                <div className="scale-75 lg:scale-[80%]">
                    <BagIcon />
                </div>
                {!cartPopupVis && getCartItemsCount() > 0 && (
                    <span className="absolute flex items-center justify-center w-4 text-xs font-bold text-red-500 bg-white rounded-full -top-1 -right-1 aspect-square">{getCartItemsCount()}</span>
                )}
            </div>

            <CartPopup />

        </section>

    );
}

export default Cart;