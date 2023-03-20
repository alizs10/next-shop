import Main from '../components/App/Main';
import Head from "next/head"
import { getSession } from 'next-auth/react'
import { closeConnection, connectDatabase } from '../util/database-util';
import User from '../database/Models/User'
import { jsonParser } from '../helpers/helpers';
import Product from '../database/Models/Product';
import { useEffect } from 'react';
import useProductStore from '../stores/product-store';

const HomePage = ({ products }) => {

  console.log(products);
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

  if (session) {

    // connect database
    let user = await User.findOne({ email: session.user.email }).select(['fullName', 'email'])

    if (user) {
      props.user = jsonParser(user)
    }

  }

  let products = await Product.find().populate('attributes.sizes.sizeId').exec()
  props.products = jsonParser(products)



  closeConnection()
  return {
    props
  }
}

export default HomePage
