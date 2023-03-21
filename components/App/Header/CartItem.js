import Image from "next/image";
import TrashIcon from "../../ui/icons/TrashIcon";
import PlusIcon from "../../ui/icons/PlusIcon";
import MinusIcon from "../../ui/icons/MinusIcon";

function CartItem({ item, handleDecreaseQuantity, handleIncreaseQuantity }) {
console.log(item);
    return (
        <li className="relative flex items-center bg-white rounded-xl">

            <div className="absolute bottom-0 right-0 z-10 flex flex-col border-l-2 border-t-2 rounded-tl-xl rounded-br-xl border-gray-200">
                <span onClick={() => handleIncreaseQuantity(item)} className="p-2 cursor-pointer text-gray-600 hover:bg-emerald-100 hover:text-emerald-500 rounded-tl-xl hover:border-red-100 transition-all duration-300">
                    <PlusIcon />
                </span>
                <span onClick={() => handleDecreaseQuantity(item)} className="p-2 cursor-pointer text-gray-600 hover:bg-red-100 hover:text-red-500 rounded-br-xl hover:border-red-100 transition-all duration-300">
                    {item.quantity > 1 ? (
                        <MinusIcon />
                    ) : (
                        <TrashIcon />
                    )}
                </span>
            </div>

            <div className="relative w-[35%] flex items-center aspect-square">
                <Image className="w-full p-2" src={item.selectedAttributes.image} alt={item.product.name} width={200} height={200} />
            </div>

            <div className="relative w-[75%] p-1 flex flex-col gap-y-1">
                <span className="font-semibold font-sans text-gray-800 text-md">{item.product.name}</span>
                <span className="font-semibold font-sans text-gray-800 text-md">x{item.quantity}</span>
                <div className="w-6 h-6 rounded-full border-gray-500 shadow-md border-2 flex flex-nowrap overflow-hidden">
                    <div className="w-1/2 h-full border-r-2 border-white bg-white"></div>
                    <div className="w-1/2 h-full bg-green-800"></div>
                </div>
                <span className="font-sans text-gray-800 text-md">Size: {item.selectedAttributes.size.size.size}</span>
                <span className="font-sans text-gray-800 font-bold text-md">${item.payPrice * item.quantity}</span>

            </div>


        </li>
    );
}

export default CartItem;