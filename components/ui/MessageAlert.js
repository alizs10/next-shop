import React from 'react'
import { motion } from 'framer-motion'

function ConnectionError(props) {
    return (
        <motion.div
            animate={{ scale: [0, 1.1, 1] }}
            className="mt-20 mx-auto w-1/2 p-3 rounded-3xl bg-orange-200 shadow-md flex justify-center items-center flex-col gap-y-3"
        >
            <h1 className='text-3xl'>{props.title}</h1>
            <p className='text-lg text-gray-700'>{props.body}</p>
        </motion.div>
    )
}

export default ConnectionError