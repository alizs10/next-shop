import useAppStore from "../../../stores/app-store";
import BagIcon from "../../ui/icons/BagIcon";
import CartPopup from "./CartPopup";

function Cart() {

    const { toggleCartPopup } = useAppStore()

    return (
        <section className="relative">
            <div onClick={toggleCartPopup} className="cursor-pointer rounded-full text-white bg-red-600 p-1 lg:p-2">
                <div className="scale-75 lg:scale-[80%]">
                    <BagIcon />
                </div>
            </div>

            <CartPopup />
        </section>

    );
}

export default Cart;