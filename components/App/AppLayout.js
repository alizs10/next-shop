import Header from "./Header/Header";
import Sidebar from './Sidebar';
import Main from './Main';

function AppLayout({ children }) {
    return (
        <div className="h-fit bg-gray-800">
            <Header />

            <section className="grid grid-cols-10">

                <Sidebar />

                <main className='relative overflow-hidden col-span-10 lg:col-span-9'>
                    <Main />
                    {children}
                </main>

            </section>
        </div>
    );
}

export default AppLayout;