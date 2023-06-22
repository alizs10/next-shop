import MainProducts from './Main/MainProducts'
import MainTitle from './Main/MainTitle'
import MainProduct from './Main/MainProduct'
import AddToCartPopup from './Main/AddToCartPopup'
import useAppStore from '../../stores/app-store'

function Main() {

    const { mainAddToCartPopupVis } = useAppStore()

    return (
        <div className="sm:mt-10 w-full h-full lg:pt-20 xl:pt-0 grid grid-cols-7 gap-y-2">

            <MainTitle />
            <MainProduct />
            <MainProducts />
            {mainAddToCartPopupVis && (<AddToCartPopup />)}

        </div>
    );
}

export default Main;