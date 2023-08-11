import React from 'react'
import Head from 'next/head'
import CartItem from '../database/Models/CartItem'
import Cart from '../components/App/Cart/Cart'
import { CartContextProvider } from '../context/CartContext'
import useAuth from '../hooks/useAuth'
import { connectDatabase } from '../util/database-util'
import { jsonParser } from '../helpers/helpers'

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

    let cartItems = [];

    if (user) {
        props.user = user;

        cartItems = await CartItem.find({ user: user._id })
        cartItems = jsonParser(cartItems)
    }

    props.cartItems = cartItems;

    return { props }
}

export default CartPage