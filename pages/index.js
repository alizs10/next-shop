import Main from '../components/App/Main';
import Head from "next/head"
import { connectDatabase } from '../util/database-util';
import { jsonParser } from '../helpers/helpers';
import { useEffect } from 'react';
import useProductStore from '../stores/product-store';
import Product from '../database/Models/Product';
import Favorite from '../database/Models/Favorite';
import CartItem from '../database/Models/CartItem';
import useAuth from '../hooks/useAuth';
import { setCartItems } from '../helpers/cart-helpers';

const HomePage = ({ products, cartItems }) => {

  const { setProducts } = useProductStore()

  useEffect(() => {

    if (products) {
      setProducts(products)
    }

    // if(cartItems.length > 0)
    // {
    //   setCartItems(cartItems)
    // }

  }, [])



  return (
    <>
      <Head>
        <title>
          Nike's Shoes Shop
        </title>
        <meta name="description" content="Nike's Shoes Shop - best shoes brand in the world" />
      </Head>
      <Main />
    </>

  )
}


export async function getServerSideProps({ req }) {

  let props = {
    layoutType: "app"
  };

  await connectDatabase(process.env.DB_NAME)

  let products = await Product.find().populate('attributes.sizes.sizeId').exec()
  products = jsonParser(products);

  let user = await useAuth(req)

  if (user) {
    props.user = user

    let cartItems = await CartItem.find({ user: user._id })
    let favorites = await Favorite.find({ user: user._id })
    favorites = jsonParser(favorites)
    cartItems = jsonParser(cartItems)
    props.cartItems = cartItems;

    let userFavoritesIds = favorites.map(fav => fav.product)
    products = products.map(product => {
      let isFavorite = false
      if (userFavoritesIds.includes(product._id)) {
        isFavorite = true;
      }

      return { ...product, isFavorite }
    })
  }

  props.products = products;

  return {
    props
  }
}

export default HomePage
