import React, { useState, useRef, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

function ProfileLayout({ children, data }) {

    const navContainerRef = useRef();
    const navRef = useRef();
    const borderRef = useRef();

    const profileRef = useRef()
    const favoritesRef = useRef()
    const ordersRef = useRef()
    const paymentsRef = useRef()
    const addressesRef = useRef()

    useEffect(() => {
        placeBorder()

        scrollToItem(getCurrentIndex())

    }, [])

    function placeBorder() {
        handleTabHover(getCurrentIndex())
    }

    const scrollToItem = (index) => {

        if (pathname === '/profile') {
            profileRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        if (pathname === '/profile/favorites') {
            favoritesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (pathname === '/profile/orders') {
            ordersRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (pathname === '/profile/addresses') {
            addressesRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
        if (pathname === '/profile/payments') {
            paymentsRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        }

    };

    function getCurrentIndex() {
        let index;

        if (pathname === '/profile') {
            index = 0;
        }

        if (pathname === '/profile/favorites') {
            index = 1;
        }
        if (pathname === '/profile/orders') {
            index = 2;
        }
        if (pathname === '/profile/addresses') {
            index = 3;
        }
        if (pathname === '/profile/payments') {
            index = 4;

        }

        return index
    }

    const { pathname } = useRouter()

    useEffect(() => {

        setIsRedirecting(false)

    }, [pathname])


    const [isRedirecting, setIsRedirecting] = useState(false)


    function handleTabHover(index) {
        if (isRedirecting) return

        const nav = navRef.current;
        const border = borderRef.current;
        const tab = nav.children[index];
        border.style.width = `${tab.offsetWidth}px`;
        border.style.left = `${tab.offsetLeft}px`;
    }



    return (
        <section className="p-20">

            <div ref={navContainerRef} className='pb-1 relative  overflow-x-scroll no-scrollbar'>

                <ul ref={navRef} className="flex flex-nowrap gap-x-4 w-fit">
                    <Link ref={profileRef} onClick={() => setIsRedirecting(true)} href='/profile'>
                        <li onMouseEnter={() => handleTabHover(0)} onMouseLeave={placeBorder} className={`whitespace-nowrap min-w-fit text-center text-2xl text-white py-3 transition-all duration-300`}>
                            Profile Information
                        </li>
                    </Link>
                    <Link ref={favoritesRef} onClick={() => setIsRedirecting(true)} href='/profile/favorites'>
                        <li onMouseEnter={() => handleTabHover(1)} onMouseLeave={placeBorder} className={`whitespace-nowrap min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 transition-all duration-300`}>
                            <span>Favorites</span>
                            <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">{data.favoritesCount}</div>
                        </li>
                    </Link>
                    <Link ref={ordersRef} onClick={() => setIsRedirecting(true)} href='/profile/orders'>
                        <li onMouseEnter={() => handleTabHover(2)} onMouseLeave={placeBorder} className={`whitespace-nowrap min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 transition-all duration-300`}>
                            <span>Orders</span>
                            <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">{data.ordersCount}</div>
                        </li>
                    </Link>
                    <Link ref={addressesRef} onClick={() => setIsRedirecting(true)} href='/profile/addresses'>
                        <li onMouseEnter={() => handleTabHover(3)} onMouseLeave={placeBorder} className={`whitespace-nowrap min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 transition-all duration-300 `}>
                            <span>Addresses</span>
                            <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">{data.addressesCount}</div>
                        </li>
                    </Link>
                    <Link ref={paymentsRef} onClick={() => setIsRedirecting(true)} href='/profile/payments'>
                        <li onMouseEnter={() => handleTabHover(4)} onMouseLeave={placeBorder} className={`whitespace-nowrap min-w-fit flex items-center gap-x-2 text-center text-2xl text-white py-3 transition-all duration-300 `}>
                            <span>Payments</span>
                            <div className="rounded-md w-7 aspect-square bg-gray-700 text-gray-200 text-sm flex justify-center items-center">{data.paymentsCount}</div>
                        </li>
                    </Link>
                </ul>
                <div ref={borderRef} className='h-1 bottom-0 transition-all duration-300 bg-red-500 absolute'></div>
            </div>

            {children}
        </section>
    );
}

export default ProfileLayout;