import { AnimatePresence, motion } from "framer-motion";
import useAppStore from "../../stores/app-store";


function BgBlur() {


    const { drawerVis } = useAppStore()

    return (
        <AnimatePresence>
            {drawerVis && (

                <motion.div
                    initial={{ backdropFilter: 'blur(0px)' }}
                    animate={{ backdropFilter: 'blur(8px)' }}
                    exit={{ backdropFilter: 'blur(0px)' }}
                    transition={{ duration: '.7' }}
                    className={`fixed inset-0 backdrop-blur z-[999]`}></motion.div>
            )}
        </AnimatePresence>
    )
}

export default BgBlur;