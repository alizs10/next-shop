export const getPriceLimit = products => {
    if (products.length == 0) return 0

    let sortedProductsByPrice = products.sort((a, b) => a.price - b.price)
    return sortedProductsByPrice[sortedProductsByPrice.length - 1].price
}

export const getAllSizes = products => {
    let sizes = [];

    products.map((product) => {
        for (const key in product.sizes) {
            if (sizes.findIndex(checkingSize => checkingSize.size === product.sizes[key].size) < 0)
            {
                sizes.push({ ...product.sizes[key], isChecked: false })
            }
        }
    })

    return sizes;
}

export const getAllColors = products => {
    let colors = []

    products.map((product) => {
        for (const key in product.colors) {
            if (colors.findIndex(checkingColor => checkingColor.color_code === product.colors[key].color_code) < 0)
            {
                colors.push({ ...product.colors[key], isChecked: false })
            }
        }
    })

    return colors;
}