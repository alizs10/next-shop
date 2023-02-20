import React from 'react'
import Master from '../../components/Layouts/Master'
import Product from '../../components/ProductPage/Product';
import ProductProvider from '../../components/Providers/ProductProvider'
import ProductModel from '../../database/Models/Product';
import { closeConnection, connectDatabase } from '../../util/database-util'

function ProductPage(props) {

    return (
        <Master>
            <ProductProvider>
                <Product product={props.product} />
            </ProductProvider>
        </Master>
    )
}

export async function getServerSideProps({ query }) {

    let { product_name } = query;

    await connectDatabase(process.env.DB_NAME)
    let product = await ProductModel.findOne({ name: product_name }).populate('sizes').populate('colors').exec()
    closeConnection()

    return {
        props: {
            product: JSON.parse(JSON.stringify(product))
        }
    }

}

export default ProductPage