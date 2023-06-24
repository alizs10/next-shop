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


        router.push('/search/' + searchedProduct)
    }

    useEffect(() => {

        if (!isExpanded) return

        searchInputRef.current.focus()

    }, [isExpanded])

    return (
        <div className="relative lg:mr-3">
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
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: [-100, 0] }}
                        exit={{ y: [0, -100], opacity: 0 }}
                        transition={{ bounce: "none", duration: ".3" }}
                        className="fixed top-0 right-0 left-0 z-50 md:absolute md:bottom-0 md:w-[250px] md:mr-4 md:right-full md:left-auto h-16 md:h-auto  md:p-0 p-3 flex gap-x-2 items-center justify-center">
                        <span onClick={toggleSearch} className="md:hidden w-[10%] text-red-500 flex justify-center items-center cursor-pointer">
                            <XIcon />
                        </span>
                        <div className="w-[90%] relative">
                            <input ref={searchInputRef} onKeyDownCapture={searchHandler} className="w-full py-2 pl-3 pr-14  bg-gray-700 rounded-xl text-md text-red-500 outline-none" />
                            <div className="absolute w-14 inset-0 left-auto text-gray-400 flex justify-center items-center">
                                <SearchIcon />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Search;