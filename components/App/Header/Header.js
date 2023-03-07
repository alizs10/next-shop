import Bars from './Bars'
import Menus from './Menus'
import Search from './Search'
import Cart from './Cart'
import Logo from './Logo'

function Header() {
    return (
        <header className="grid grid-cols-10 h-20 items-end">
            <Bars />
            <Logo />
            <Menus />
            <div className='col-span-1 flex justify-start items-center gap-x-2'>
                <Search />
                <Cart />
            </div>
        </header>
    );
}

export default Header;