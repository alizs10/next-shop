import Header from "./Header/Header";
import Sidebar from './Sidebar';
import Drawer from './Drawer';
import BgBlur from '../Common/BgBlur';
import useAppStore from "../../stores/app-store";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import userStore from "../../stores/user-store";

function AppLayout({ children, user }) {

    const { setUser } = userStore()
    const { loading, setLoading, drawerVis } = useAppStore()

    useEffect(() => {
        setUser(user)
        setLoading(false)
    }, [])


    const [translateX, setTranslateX] = useState(0)

    useEffect(() => {
        setTranslateX(drawerVis ? 50 : 0)
    }, [drawerVis])

    if (loading) return

    return (
        <div className="relative">
            <motion.section
                initial={{ x: 0 }}
                animate={{ x: translateX }}
                transition={{ duration: ".3", bounce: "none" }}
            >



                <Header />

                <section className="grid grid-cols-10">

                    <Sidebar />

                    <main className='relative col-span-10 xl:col-span-9 overflow-hidden'>
                        {children}
                    </main>

                </section>
                <BgBlur />

                {/* <ClickOutside /> */}
            </motion.section>


            <AnimatePresence>
                {drawerVis && (<Drawer />)}
            </AnimatePresence>

        </div>
    );
}

export default AppLayout;