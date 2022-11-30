import React from 'react'
import { motion } from 'framer-motion'

function ConnectionError() {
    return (
        <motion.div
            animate={{ scale: [0, 1.1, 1] }}
            className="mt-20 mx-auto w-1/2 p-3 rounded-3xl bg-red-200 shadow-md flex justify-center items-center flex-col gap-y-3"
        >
            <h1 className='text-3xl'>Oops, Error while loading data</h1>
            <p className='text-lg text-gray-700'>If you're living in Iran, please use a vpn and then try to reload the page again</p>
        </motion.div>
    )
}

export default ConnectionError