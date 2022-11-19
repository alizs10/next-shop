import Head from "../components/Head"
import Products from "../components/Products"
import Pagination from "../components/Pagination"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="h-screen bg-white">
      <Head/>
      <Products/>
      <Pagination/>
      <Footer/>
    </div>
  )
}

export default HomePage
