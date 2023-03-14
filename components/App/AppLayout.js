import Header from "./Header/Header";
import Sidebar from './Sidebar';
import Main from './Main';
import Drawer from './Drawer';
import useAppStore from "../../stores/app-store";

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";

function AppLayout({ children }) {

    const [translateX, setTranslateX] = useState(0)
    const { drawerVis } = useAppStore()

    useEffect(() => {
        setTranslateX(drawerVis ? 50 : 0)
    }, [drawerVis])

    return (
        <div className={`${drawerVis && 'overflow-hidden'}`}>
            <motion.section
                initial={{ translateX: "0" }}
                animate={{ translateX: translateX + "px" }}
                transition={{ duration: ".3", bounce: "none" }}
                className={`h-fit bg-gray-800`}>
                <Header />

                <section className="grid grid-cols-10">

                    <Sidebar />

                    <main className='relative overflow-hidden col-span-10 xl:col-span-9'>
                        <Main />
                        {children}
                    </main>

                </section>
            </motion.section>

            <Drawer />
        </div>
    );
}

export default AppLayout;