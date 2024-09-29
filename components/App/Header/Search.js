import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SearchIcon from "../../ui/icons/SearchIcon";
import XIcon from "../../ui/icons/XIcon";

import { motion } from 'framer-motion';
import { useRouter } from "next/router";

function Search() {

    const [isExpanded, setIsExpanded] = useState(false)

    const searchInputRef = useRef(null)
    const router = useRouter()

    function toggleSearch() {
        setIsExpanded(prevState => !prevState)
    }

    function searchHandler(e) {

        let searchedProduct = searchInputRef.current.value;
        if (e.code !== 'Enter' || searchedProduct.length === 0) return

        setIsExpanded(false)
        router.push('/search/' + searchedProduct)
    }

    useEffect(() => {

        if (!isExpanded) return

        searchInputRef.current.focus()

    }, [isExpanded])

    return (
        <div className="flex flex-row-reverse items-center h-full pl-2">
            <div onClick={toggleSearch} className="w-10 text-red-500 cursor-pointer">
                <AnimatePresence mode="wait" initial={false}>
                    {isExpanded && (
                        <motion.div
                            key={0}
                            initial={{ y: 0, opacity: [0, 1] }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: [0, 20], opacity: 0 }}
                            transition={{ bounce: "spring", duration: ".3" }}
                        >
                            <div className="w-6 h-6">
                                <XIcon />
                            </div>
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
                            <div className="w-6 h-6">
                                <SearchIcon />
                            </div>

                        </motion.div>
                    )}

                </AnimatePresence>

            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ y: '-100%', opacity: 0 }}
                        animate={{ y: '0%', opacity: 1 }}
                        exit={{ y: '-100%', opacity: 0 }}
                        transition={{ bounce: "none", duration: ".3" }}
                        className="top-0 z-50 w-full mr-2 right-full">
                        {/* <span onClick={toggleSearch} className="md:hidden w-[10%] text-red-500 flex justify-center items-center cursor-pointer">
                            <XIcon />
                        </span> */}
                        <div className="relative w-full">
                            <input ref={searchInputRef} onKeyDownCapture={searchHandler} className="w-full py-2 pl-3 text-red-500 bg-gray-700 outline-none pr-14 rounded-xl text-md" />
                            <div className="absolute inset-0 left-auto flex items-center justify-center text-gray-400 w-14">
                                <div className="w-6 h-6">
                                    <SearchIcon />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Search;