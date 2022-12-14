import React from 'react'

function AdminLayout(props) {
    return (
        <div className='py-8 px-24 bg-gray-800 min-h-screen flex flex-col gap-y-4'>
            <header >
                <h2 className='text-3xl text-white'>ADMIN PANEL - PRODUCTS</h2>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default AdminLayout