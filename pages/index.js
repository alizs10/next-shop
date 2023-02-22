import Landing from "../components/Landing"
import Head from "next/head"

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

export function getStaticProps() {
  return {
    props: {
      layoutType: "app"
    }
  }
}

export default HomePage
