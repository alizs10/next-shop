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

        <div className="flex flex-col justify-end col-span-7 gap-y-6">

            <div className="flex items-center self-center md:mt-10 lg:self-end lg:pr-20 gap-x-4">

                <span onClick={handleScrollLeft} className="p-1 text-red-500">
                    <ArrowLeftIcon />
                </span>
                <span onClick={handleScrollRight} className="p-1 text-white bg-red-500 rounded-full">
                    <ArrowRightIcon />
                </span>

            </div>

            <CartContextProvider>
                <div ref={productsContainerRef} className="flex items-center w-full py-2 pb-10 pl-10 pr-10 overflow-x-scroll overflow-y-hidden lg:pl-20 lg:pr-2 no-scrollbar gap-x-12 flex-nowrap">
                    {products.map(product => <Product key={product._id} product={product} />)}
                </div>
            </CartContextProvider>
        </div>
    );
}

export default MainProducts;