import { useState } from "react";
import EyeIcon from "../ui/icons/EyeIcon";
import EyeSlashIcon from "../ui/icons/EyeSlashIcon";
import { AnimatePresence } from "framer-motion";
import { motion } from 'framer-motion';

function PasswordInput(props) {

    const [passwordVis, setPasswordVis] = useState(false)
    function togglePassVis() {
        setPasswordVis(prevState => !prevState)
    }

    return (
        <div className="w-full rounded-xl px-3 py-2 bg-gray-600 flex">
            <input type={passwordVis ? 'text' : 'password'} className="w-[90%] bg-transparent outline-none text-lg text-gray-200" {...props} />
            <div className="w-[10%] flex justify-center items-center text-gray-400">

                <AnimatePresence mode="wait" initial={false}>

                    {!passwordVis ? (
                        <motion.span
                            key={0}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: [-10, 0] }}
                            exit={{ opacity: 0, y: [0, 10] }}
                            transition={{ duration: "0.1" }}

                            onClick={togglePassVis} className="cursor-pointer">
                            <EyeIcon />
                        </motion.span>
                    ) : (
                        <motion.span
                            key={1}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: [-10, 0] }}
                            exit={{ opacity: 0, y: [0, 10] }}
                            transition={{ duration: "0.1" }}
                            onClick={togglePassVis} className="cursor-pointer">
                            <EyeSlashIcon />
                        </motion.span>
                    )}

                </AnimatePresence>

            </div>
        </div>
    );
}

export default PasswordInput;