import Header from "./Header/Header";
import Sidebar from './Sidebar';
import Drawer from './Drawer';
import BgBlur from '../Common/BgBlur';
import useAppStore from "../../stores/app-store";

import { AnimatePresence } from 'framer-motion';
import { useEffect } from "react";
import userStore from "../../stores/user-store";

function AppLayout({ children, user }) {

    const { setUser } = userStore()
    const { loading, setLoading, drawerVis } = useAppStore()

    useEffect(() => {
        setUser(user)
        setLoading(false)
    }, [])


    if (loading) return

    return (
        <div className="relative">
            <section>
                <Header />

                <section className="grid grid-cols-10">
                    <Sidebar />
                    <main className='relative col-span-10 xl:col-span-9 overflow-hidden'>
                        {children}
                    </main>
                </section>
                <BgBlur />
            </section>


            <AnimatePresence>
                {drawerVis && (<Drawer />)}
            </AnimatePresence>

        </div>
    );
}

export default AppLayout;