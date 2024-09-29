import Header from "./Header/Header";
import Sidebar from './Sidebar';
import Drawer from './Drawer';
import BgBlur from '../Common/BgBlur';
import useAppStore from "../../stores/app-store";

import { AnimatePresence } from 'framer-motion';
import { useEffect } from "react";
import userStore from "../../stores/user-store";
import { setCartItems } from "../../helpers/cart-helpers";
import RequireLoginPopup from '../Common/RequireLoginPopup'

function AppLayout({ children, user, cartItems }) {

    const { setUser } = userStore()
    const { loading, setLoading, drawerVis, requireLogin } = useAppStore()

    useEffect(() => {
        setUser(user)

        if (user && cartItems && cartItems.length > 0) {
            setCartItems(cartItems)
        }

        setLoading(false)

    }, [])


    if (loading) return

    return (
        <div className="relative">

            <Sidebar />

            <section className="fixed overflow-y-scroll inset-0 xl:left-[8%] 2xl:left-[5%]">
                <Header />

                <main className='relative p-3 xl:p-5'>
                    {children}
                </main>
            </section>

            <BgBlur />

            <AnimatePresence>
                {requireLogin && (<RequireLoginPopup />)}
            </AnimatePresence>

            <AnimatePresence>
                {drawerVis && (<Drawer />)}
            </AnimatePresence>

        </div>
    );
}

export default AppLayout;