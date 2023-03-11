import BagIcon from "../../ui/icons/BagIcon";
function Cart() {
    return (
        <div className="rounded-full text-white bg-red-600 p-1 lg:p-2">
            <div className="scale-75 lg:scale-[80%]">
                <BagIcon />
            </div>
        </div>
    );
}

export default Cart;