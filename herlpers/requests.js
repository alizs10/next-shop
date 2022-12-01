export const getAllProducts = async () => {
    let response = await fetch('https://nike-shop-ac988-default-rtdb.firebaseio.com/products.json')
    let data = await response.json()
    let allProducts = []

    for (const key in data) {
      allProducts.push({ id: key, ...data[key] })
    }

    return allProducts;
}