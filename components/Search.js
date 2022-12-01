import React, { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import Backdrop from './ui/Backdrop'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

function Search({ onSearch }) {

    const [isOpen, setIsOpen] = useState(false)
    const searchInputRef = useRef()

    const onSubmit = (e) => {
        e.stopPropagation()
        e.preventDefault()

        let searchedValue = searchInputRef.current.value;
        closeSearchSlider()
        onSearch(searchedValue)
    }

    const closeSearchSlider = () => {
        setIsOpen(false)
    }

    const openSearchSlider = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [searchInputRef, isOpen])

    return (
        <div
            onClick={openSearchSlider}
            className={`absolute flex justify-center items-center top-[35%] left-0 ${isOpen ? 'w-[35vmin]' : 'w-[6vmin]'} h-fit bg-orange-200 rounded-r-3xl
        shadow-md cursor-pointer hover:left-2 transition-all duration-300`}>


            <AnimatePresence>
                {isOpen ? (
                    <>
                        <motion.form
                            exit={{ width: "0" }}
                            onSubmit={onSubmit} className='flex z-[60] w-full h-full rounded-r-3xl bg-orange-200'>
                            <input
                                ref={searchInputRef}
                                className="w-3/4 py-2 px-3 h-full focus:outline-none bg-gray-100 placeholder:text-sm"
                                placeholder='search through products'
                            />
                            <button type='submit' className='rounded-r-3xl w-1/4 flex justify-center items-center'>
                                <SearchIcon />
                            </button>
                        </motion.form>
                        <Backdrop toggler={isOpen} handleClick={closeSearchSlider} />
                    </>
                ) : (
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        className='py-2'>
                        <SearchIcon />
                    </motion.span>
                )}
            </AnimatePresence>

        </div >
    )
}

export default Search