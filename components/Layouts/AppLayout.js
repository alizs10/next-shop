import React from 'react'
import Head from '../Head'
import Footer from '../Footer'

function AppLayout({ children }) {
    return (
        <div className="h-screen bg-white">
            <Head />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout