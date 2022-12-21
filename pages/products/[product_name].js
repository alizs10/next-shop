import React from 'react'
import Master from '../../components/Layouts/Master'
import Product from '../../components/ProductPage/Product'
import ProductProvider from '../../components/Providers/ProductProvider'
import { connectDatabase, findDocument } from '../../util/database-util'

function ProductPage(props) {

    return (
        <Master>
            <ProductProvider>
                <Product product={props.product} />
            </ProductProvider>
        </Master>
    )
}

export async function getServerSideProps(ctx) {

    let productName = ctx.query.product_name
    let client = await connectDatabase('nikes_shoes_shop')
    let document = await findDocument(client, 'products', { "name": productName })
    let data = await JSON.parse(JSON.stringify(document))

    return {
        props: {
            product: data
        }
    }

}

export default ProductPage