import React from 'react'
import Head from '../Auth/Head'
import Footer from '../Footer'

function Master({ children }) {
    return (
        <div className="h-screen bg-white">
            <Head />
            {children}
            <Footer />
        </div>
    )
}

export default Master