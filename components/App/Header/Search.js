import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "../../ui/icons/SearchIcon";
import XIcon from "../../ui/icons/XIcon";

import { motion } from 'framer-motion';

function Search() {

    const [isExpanded, setIsExpanded] = useState(false)

    const searchInputRef = useRef(null)

    function toggleSearch() {
        setIsExpanded(prevState => !prevState)
    }

    useEffect(() => {

        if (!isExpanded) return

        searchInputRef.current.focus()

    }, [isExpanded])

    return (
        <div className="relative mr-3">
            <div onClick={toggleSearch} className="lg:scale-125 w-10 cursor-pointer text-red-500">
                <AnimatePresence mode="wait" initial={false}>
                    {isExpanded && (
                        <motion.div
                            key={0}
                            initial={{ y: 0, opacity: [0, 1] }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: [0, 20], opacity: 0 }}
                            transition={{ bounce: "spring", duration: ".3" }}
                        >
                            <XIcon />
                        </motion.div>
                    )}

                    {!isExpanded && (
                        <motion.div
                            key={1}
                            initial={{ y: 0, opacity: [0, 1] }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: [0, 20], opacity: 0 }}
                            transition={{ bounce: "spring", duration: ".3" }}
                        >
                            <SearchIcon />

                        </motion.div>
                    )}

                </AnimatePresence>

            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key={2}
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ x: [100, 0], opacity: [0, 1] }}
                        exit={{ y: [0, 20], opacity: 0 }}
                        transition={{ bounce: "none", duration: ".3" }}
                        className="absolute bottom-0 right-full mr-4 flex gap-x-2 items-end">
                        <span className="text-red-500 scale-125 cursor-pointer">
                            <SearchIcon />
                        </span>
                        <input ref={searchInputRef} className="py-2 px-3 border-2 border-red-500 bg-gray-700 rounded-xl text-md text-red-400 outline-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Search;