import Link from "next/link";
import BagIcon from "../../ui/icons/BagIcon";

function Cart() {
    return (
        <Link href="/cart">
            <div className="cursor-pointer rounded-full text-white bg-red-600 p-1 lg:p-2">
                <div className="scale-75 lg:scale-[80%]">
                    <BagIcon />
                </div>
            </div>
        </Link>
    );
}

export default Cart;