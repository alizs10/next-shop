import Bars from './Bars'
import Menus from './Menus'
import Search from './Search'
import Cart from './Cart'
import Logo from './Logo'

function Header() {
    return (
        <header className="flex items-center px-3 lg:px-0 lg:grid grid-cols-10 h-16 lg:h-20 lg:items-end">
            <Bars />
            <Logo />
            <Menus />
            <div className='col-span-1 ml-auto flex justify-start items-center gap-x-1 lg:gap-x-2'>
                <Search />
                <Cart />
            </div>
        </header>
    );
}

export default Header;