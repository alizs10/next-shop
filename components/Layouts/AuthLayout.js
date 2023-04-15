import Header from '../Auth/Header/Header'

function AuthLayout({ children, type }) {
    return (
        <section
            className={`h-fit bg-gray-800`}>
            <Header />

            <main className='relative w-full'>
                {children}
            </main>

        </section>
    )
}

export default AuthLayout