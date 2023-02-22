import React from 'react'
import Head from '../Head'
import Footer from '../Footer'

function AppLayout({ children }) {
    return (
        <div className="h-screen bg-white">
            <Head />
            <main className='px-10 sm:px-14 md:px-16 lg:px-20 xl:px-28 pt-24'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout