export const paginateProducts = (products, pageNumber, count) => {
    let productsIns = [...products]
    let startIndex = (pageNumber - 1) * count;
    let endIndex = startIndex + count;
    let paginatedProducts = productsIns.slice(startIndex, endIndex)

    let allProducts = products.length;
    let pages = Math.floor(allProducts / count + 1);

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