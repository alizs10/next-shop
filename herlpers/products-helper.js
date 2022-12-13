export const paginateProducts = (products, pageNumber, count) => {
    let productsIns = [...products]
    let sortedProducts = productsIns.sort((a,b) => a.id - b.id)
    let startIndex = (pageNumber - 1) * count;
    let endIndex = startIndex + count;
    let paginatedProducts = sortedProducts.slice(startIndex, endIndex)

    let allProducts = products.length;
    let pages = Math.floor(allProducts / count);

    return {
        paginatedProducts,
        pages,
        allProducts
    };
}

export const sliceProducts = (products, breakIndex) => {
    let productsArr1 = products.slice(0, breakIndex)
    let productsArr2 = products.slice(breakIndex, products.length)

    return [productsArr1, productsArr2]
}

export const searchThroughProducts = (searchedValue, products) => {

    let productsIns = [...products]
    let filterdProducts = productsIns.filter(product => product.name.toLowerCase().includes(searchedValue.toLowerCase()))

    return filterdProducts
}