import React from 'react'
import Head from 'next/head'

import Cart from '../components/App/Cart/Cart'
import { CartContextProvider } from '../context/CartContext'

function CartPage() {


    return (
        <>
            <Head>
                <title>
                    Cart | Nike's Shoes Shop
                </title>
                <meta name="description" content="cart page - nike's shoes shop" />
            </Head>
            <CartContextProvider>
                <Cart />
            </CartContextProvider>
        </>

    )
}

export function getStaticProps() {
    return {
        props: {
            layoutType: "app"
        }
    }
}

export default CartPage