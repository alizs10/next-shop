import Link from "next/link";
import { useRouter } from "next/router";

function ProfileLayout({ children }) {

    const { pathname } = useRouter()

    return (
        <section className="p-20">
            <ul className="flex flex-nowrap gap-x-4 w-full overflow-x-scroll no-scrollbar">
                <Link href='/profile'>
                    <li className={`min-w-fit text-center text-2xl text-white py-3 px-5 border-b-[3px] transition-all duration-300 ${pathname === '/profile' ? 'border-red-500' : 'border-gray-800'}`}>
                        Profile Information
                    </li>
                </Link>
                <Link href='/profile/favorites'>
                    <li className={`min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 px-5 border-b-[3px] transition-all duration-300 ${pathname === '/profile/favorites' ? 'border-red-500' : 'border-gray-800'}`}>
                        <span>Favorites</span>
                        <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">2</div>
                    </li>
                </Link>
                <Link href='/profile/orders'>
                    <li className={`min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 px-5 border-b-[3px] transition-all duration-300 ${pathname === '/profile/orders' ? 'border-red-500' : 'border-gray-800'}`}>
                        <span>Orders</span>
                        <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">2</div>
                    </li>
                </Link>
                <Link href='/profile/addresses'>
                    <li className={`min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 px-5 border-b-[3px] transition-all duration-300 ${pathname === '/profile/addresses' ? 'border-red-500' : 'border-gray-800'}`}>
                        <span>Addresses</span>
                        <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">2</div>
                    </li>
                </Link>
                <Link href='/profile/payments'>
                    <li className={`min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 px-5 border-b-[3px] transition-all duration-300 ${pathname === '/profile/payments' ? 'border-red-500' : 'border-gray-800'}`}>
                        <span>Payments</span>
                        <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">2</div>
                    </li>
                </Link>
            </ul>

            {children}
        </section>
    );
}

export default ProfileLayout;