import MainProducts from './Main/MainProducts'
import MainTitle from './Main/MainTitle'
import MainProduct from './Main/MainProduct'
import AddToCartPopup from './Main/AddToCartPopup'
import useAppStore from '../../stores/app-store'
import { CartContextProvider } from '../../context/CartContext'

function Main() {

    const { mainAddToCartPopupVis } = useAppStore()

    return (
        <div className="grid w-full h-full grid-cols-7 gap-8 px-5 pt-3 md:pt-10 md:gap-4 md:px-20">

            <MainTitle />
            <MainProduct />
            <MainProducts />
            {mainAddToCartPopupVis && (
                <CartContextProvider>
                    <AddToCartPopup />
                </CartContextProvider>
            )}

        </div>
    );
}

export default Main;