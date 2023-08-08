import React, { useEffect } from 'react'
import Head from 'next/head'
import CartItem from '../database/Models/CartItem'
import Cart from '../components/App/Cart/Cart'
import { CartContextProvider } from '../context/CartContext'
import useAuth from '../hooks/useAuth'
import { connectDatabase } from '../util/database-util'
import useAppStore from '../stores/app-store'

function CartPage({ user }) {

    // useEffect(() => {

    //     if (!user) {

    //         let cartInLocalStorage = localStorage.getItem('cart')
    //         let cartInLocalStorageArr = cartInLocalStorage ? JSON.parse(cartInLocalStorage) : []

    //         useAppStore.setState((prev) => ({ ...prev, cartItems: [...cartInLocalStorageArr] }))

    //     } else {
    //         useAppStore.setState((prev) => ({ ...prev, cartItems: [...cartItems] }))
    //     }


    // }, [])


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