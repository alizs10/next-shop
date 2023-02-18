import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLayout({ title, children }) {
    return (
        <>
            <div className='py-8 px-24 bg-gray-800 min-h-screen flex flex-col gap-y-4'>
                <header >
                    <h2 className='text-3xl text-white'>ADMIN PANEL - {title.toUpperCase()}</h2>
                </header>
                <main>
                    {children}
                </main>
            </div>
            <ToastContainer />
        </>
    )
}

export default AdminLayout