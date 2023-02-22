import React from 'react'
import Head from '../Auth/Head'
import Footer from '../Footer'

function AuthLayout({ children, type }) {
    return (
        <div className="h-screen bg-white">
            <Head type={type} />
            {children}
            <Footer />
        </div>
    )
}

export default AuthLayout