import React from 'react'
import { motion } from "framer-motion"

export default function Backdrop({ children, handleClick, blur }) {
    return (
        <motion.div
            initial={{ left: "-100%" }}
            animate={{ left: 0 }}
            exit={{ left: "-100%" }}
            transition={{ bounce: "none" }}
            onClick={handleClick} className={`fixed flex top-0 left-0 w-full h-full ${blur && 'backdrop-blur-md'} z-[9999]`}>
            {children}
        </motion.div>
    );
}
