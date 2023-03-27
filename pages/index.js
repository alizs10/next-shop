import Main from '../components/App/Main';
import Head from "next/head"
import { getSession } from 'next-auth/react'
import { closeConnection, connectDatabase } from '../util/database-util';
import User from '../database/Models/User'
import { jsonParser } from '../helpers/helpers';
import { useEffect } from 'react';
import useProductStore from '../stores/product-store';
import Product from '../database/Models/Product';
import Favorite from '../database/Models/Favorite';

const HomePage = ({ products }) => {

  const { setProducts } = useProductStore()

  useEffect(() => {

    if (products) {
      setProducts(products)
    }

  }, [products])

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
  let session = await getSession({ req })
  let user;

  if (session) {

    // connect database
    user = await User.findOne({ email: session.user.email }).select(['-password', '-verification_code'])

    if (user) {
      props.user = jsonParser(user)
    }

  }

  let products = await Product.find().populate('attributes.sizes.sizeId').exec()
  products = jsonParser(products);

  if (user) {
    let favorites = await Favorite.find({ user: user._id })
    favorites = jsonParser(favorites)
    let userFavoritesIds = favorites.map(fav => fav.product)
    products = products.map(product => {
      let isFavorite = false
      if (userFavoritesIds.includes(product._id)) {
        isFavorite = true;
      }

      return { ...product, isFavorite }
    })
  }

  console.log(products);
  props.products = products;
  closeConnection()
  return {
    props
  }
}

export default HomePage
