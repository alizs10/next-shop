import Landing from "../components/Landing"
import Head from "next/head"
import { getSession } from 'next-auth/react'
import { closeConnection, connectDatabase } from '../util/database-util';
import User from '../database/Models/User'
import { jsonParser } from '../helpers/helpers';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>
          Nike's Shoes Shop
        </title>
        <meta name="description" content="Nike's Shoes Shop - best shoes brand in the world" />
      </Head>
      <Landing />
    </>

  )
}

export async function getServerSideProps({ req }) {

  let props = {
    layoutType: "app"
  };

  let session = await getSession({ req })

  if (session) {

    // connect database
    await connectDatabase(process.env.DB_NAME)
    let user = await User.findOne({ email: session.user.email }).select(['fullName', 'email'])

    if (user) {
      props.user = jsonParser(user)
    }

    closeConnection()


  }

  return {
    props
  }
}

export default HomePage
