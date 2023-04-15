import MainProducts from './Main/MainProducts'
import MainTitle from './Main/MainTitle'
import MainProduct from './Main/MainProduct'
import AddToCartPopup from './Main/AddToCartPopup'

function Main() {

    return (
        <div className="sm:mt-10 w-full h-full lg:pt-20 xl:pt-0 grid grid-cols-7 gap-y-2">

            <MainTitle />
            <MainProduct />
            <MainProducts />
            <AddToCartPopup />
        </div>
    );
}

export default Main;