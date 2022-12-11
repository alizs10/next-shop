import Master from "../components/Layouts/Master"
import Landing from "../components/Landing"
import Head from "next/head"

const HomePage = () => {
  return (
    <Master>
      <Head>
        <title>
          Nike's Shoes Shop
        </title>
        <meta name="description" content="Nike's Shoes Shop - best shoes brand in the world" />
      </Head>
      <Landing />
    </Master>
  )
}

export default HomePage
