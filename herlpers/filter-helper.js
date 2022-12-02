export const getPriceLimit = products => {
    if (products.length == 0) return 0

    let sortedProductsByPrice = products.sort((a, b) => a.price - b.price)
    return sortedProductsByPrice[sortedProductsByPrice.length - 1].price
}