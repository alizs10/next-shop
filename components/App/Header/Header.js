import Bars from './Bars'
import Menus from './Menus'
import Search from './Search'
import Cart from './Cart'
import Logo from '../../Common/Logo'
import { useRouter } from 'next/router'
import { CartContextProvider } from '../../../context/CartContext';
import Link from 'next/link'
import useAppStore from '../../../stores/app-store'

function Header() {

    const { pathname } = useRouter()

    const { drawerVis } = useAppStore()

    return (
        <header className={`sticky top-0 z-50 ${drawerVis ? '' : 'backdrop-blur-md'} pb-4 flex items-center px-3 xl:px-0 xl:grid grid-cols-10 h-16 xl:h-20 xl:items-end`}>
            <Bars />
            <div className="col-span-2 flex items-center">
                <Link className='ml-4 lg:ml-20' href="/">
                    <Logo />
                </Link>
            </div>
            <Menus />
            <div className='col-span-1 ml-auto flex justify-start xl:ml-0 items-center gap-x-0 xl:gap-x-2'>
                <Search />
                {pathname !== '/cart' && (
                    <CartContextProvider>
                        <Cart />
                    </CartContextProvider>
                )}
            </div>
        </header>
    );
}

export default Header;