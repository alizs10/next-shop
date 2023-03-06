import React, { useEffect } from 'react'
import Header from '../Header'
import Footer from '../Footer'
import userStore from '../../stores/user-store'

function AppLayout({ children, user }) {

    const setUser = userStore((state) => state.setUser)

    useEffect(() => {
        setUser(user)
    }, [])

    return (
        <div className="h-screen bg-white">
            <Header />
            <div className='h-20 bg-orange-200'>
                <div className='bg-white w-full h-full rounded-t-full'></div>
            </div>
            <main className='px-10 sm:px-14 md:px-16 lg:px-20 xl:px-48'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout