import ArrowRightIcon from '../../ui/icons/ArrowRightIcon'
import ArrowLeftIcon from '../../ui/icons/ArrowLeftIcon'
import Product from "./Product";
import { useRef } from 'react';
import useProductStore from '../../../stores/product-store';
import { CartContextProvider } from '../../../context/CartContext';


function MainProducts() {

    const { products } = useProductStore()

    const productsContainerRef = useRef()
    const productWidth = 400;

    function handleScrollRight() {
        let currentPos = productsContainerRef.current.scrollLeft;
        productsContainerRef.current.style.scrollBehavior = "smooth";
        productsContainerRef.current.scrollLeft = currentPos + productWidth;
    }

    function handleScrollLeft() {
        let currentPos = productsContainerRef.current.scrollLeft;
        productsContainerRef.current.style.scrollBehavior = "smooth";
        let goal = parseInt(currentPos - productWidth) < 0 ? 0 : currentPos - productWidth;
        productsContainerRef.current.scrollLeft = goal;
    }

    return (

        <div className="col-span-7 h-fit mt-auto flex flex-col justify-end lg:mt-20 pb-10 gap-y-6">

            <div className="mt-10 self-center lg:self-end lg:pr-20 flex gap-x-4 items-center">

                <span onClick={handleScrollLeft} className="text-red-500 p-1">
                    <ArrowLeftIcon />
                </span>
                <span onClick={handleScrollRight} className="text-white rounded-full p-1 bg-red-500">
                    <ArrowRightIcon />
                </span>

            </div>

            <CartContextProvider>
                <div ref={productsContainerRef} className="w-full py-2 pl-20 pr-10 lg:pr-2 overflow-x-scroll no-scrollbar overflow-y-hidden flex gap-x-12 items-center flex-nowrap">
                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </CartContextProvider>
        </div>
    );
}

export default MainProducts;