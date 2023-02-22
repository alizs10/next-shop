import React from 'react'
import BreadCrumb from '../../components/Common/BreadCrumb';
import Product from '../../components/ProductPage/Product';
import ProductProvider from '../../components/Providers/ProductProvider'
import ProductModel from '../../database/Models/Product';
import { closeConnection, connectDatabase } from '../../util/database-util'

function ProductPage(props) {

    return (
        <section className='flex flex-col gap-y-8'>
            <BreadCrumb paths={[{ name: "Home", url: "/" }, { name: "All Products", url: "/products" }, { name: props.product.name, url: "/products/" + props.product.name, current: true }]} />
            <ProductProvider>
                <Product product={props.product} />
            </ProductProvider>
        </section>
    )
}

export async function getServerSideProps({ query }) {

    let { product_name } = query;

    await connectDatabase(process.env.DB_NAME)
    let product = await ProductModel.findOne({ name: product_name }).populate('sizes').populate('colors').exec()
    closeConnection()

    return {
        props: {
            product: JSON.parse(JSON.stringify(product)),
            layoutType: "app"
        }
    }

}

export default ProductPage