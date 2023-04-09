import React from 'react'
import Head from 'next/head'

import Cart from '../components/App/Cart/Cart'
import { CartContextProvider } from '../context/CartContext'
import useAuth from '../hooks/useAuth'
import { connectDatabase } from '../util/database-util'

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

export async function getServerSideProps({ req }) {

    let props = {};
    props.layoutType = "app";

    await connectDatabase(process.env.DB_NAME)
    let user = await useAuth(req)
    if (user) {
        props.user = user;
    }

    return { props }
}

export default CartPage