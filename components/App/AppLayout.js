import Header from "./Header/Header";
import Sidebar from './Sidebar';
import Drawer from './Drawer';
import useAppStore from "../../stores/app-store";

import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import ClickOutside from "../Common/ClickOutside";
import userStore from "../../stores/user-store";

function AppLayout({ children, user }) {

    const setUser = userStore((state) => state.setUser)
    useEffect(() => {

        setUser(user)
    }, [])

    const [translateX, setTranslateX] = useState(0)
    const { drawerVis } = useAppStore()

    useEffect(() => {
        setTranslateX(drawerVis ? 50 : 0)
    }, [drawerVis])

    return (
        <div className={` ${drawerVis ? 'overflow-hidden' : ''}`}>
            <motion.section
                initial={{ translateX: "0" }}
                animate={{ translateX: translateX + "px" }}
                transition={{ duration: ".3", bounce: "none" }}
                className={`h-fit bg-gray-800`}>
                <Header />

                <section className="grid grid-cols-10">

                    <Sidebar />

                    <main className='relative overflow-hidden col-span-10 xl:col-span-9'>

                        {children}
                    </main>

                </section>
                <ClickOutside />
            </motion.section>

            <Drawer />
        </div>
    );
}

export default AppLayout;