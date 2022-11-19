
import Products from "../components/Products"
import Pagination from "../components/Pagination"
import Master from "../components/Layouts/Master"

const HomePage = () => {
  return (
    <Master>
      <Products/>
      <Pagination/>
    </Master>
  )
}

export default HomePage
