import Bars from './Bars'
import Menus from './Menus'
import Search from './Search'
import Cart from './Cart'
import Logo from '../../Common/Logo'
import { useRouter } from 'next/router'
import { CartContextProvider } from '../../../context/CartContext';
import Link from 'next/link'

function Header() {

    const { pathname } = useRouter()

    return (
        <header className="flex items-center px-3 xl:px-0 xl:grid grid-cols-10 h-16 xl:h-20 xl:items-end">
            <Bars />
            <div className="col-span-2 flex items-center">
                <Link href="/">
                    <span className='ml-4 lg:ml-20 '>
                        <Logo />
                    </span>
                </Link>
            </div>
            <Menus />
            <div className='col-span-1 ml-auto flex justify-start xl:ml-0 items-center gap-x-1 xl:gap-x-2'>
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