import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function AppLayout({ children, user }) {

    return (
        <div className="h-screen bg-white">
            <Header user={user} />
            <div className='h-20 bg-orange-200'>
                <div className='bg-white w-full h-full rounded-t-full'></div>
            </div>
            <main className='px-10 sm:px-14 md:px-16 lg:px-20 xl:px-28'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout