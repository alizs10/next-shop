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
        <header className={`sticky top-0 z-50 ${drawerVis ? '' : 'backdrop-blur-md'} flex items-center xl:grid grid-cols-10 h-26 xl:items-end p-3 xl:p-5 w-full`}>


            <div className="flex items-center col-span-1 gap-x-2">
                <div className="xl:hidden">
                    <Bars />
                </div>
                <Link className='' href="/">
                    <Logo />
                </Link>
            </div>
            <Menus />

            <div className='relative flex items-center justify-end flex-1 col-span-2 xl:ml-0 gap-x-2'>
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