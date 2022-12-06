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

export const getCheckedColors = colors => {
    let checkedColors = [];
    colors.map(color => {
        if(color.isChecked)
        {
            checkedColors.push(color.color_code)
        }
    })

    return checkedColors;
}

export const getCheckedSizes = sizes => {
    let checkedSizes = [];
    sizes.map(size => {
        if(size.isChecked)
        {
            checkedSizes.push(size.size)
        }
    })

    return checkedSizes;
}

export const filterProducts = (products, filters) => {

    console.log(filters);
    let filteredProducts = products.filter(product => {
        
        // filter price
        if (filters.priceRange && (product.price < filters.priceRange[0] || product.price > filters.priceRange[1])) {
            return false
        }

        // filter size
        if (filters.sizes && filters.sizes.length > 0) {
            let productSizes = []
            for (const key in product.sizes) {
                productSizes.push(product.sizes[key].size)
            }

            let isExists = false;
            productSizes.every(productSize => {
                if (filters.sizes.includes(productSize)) {
                    isExists = true
                }
                return !isExists;
            })

            if (!isExists) return false;
        }
        // filter color
        if (filters.colors && filters.colors.length > 0) {
           
            let productColors = []
            for (const key in product.colors) {
                productColors.push(product.colors[key].color_code)
            }

            let isExists = false;
            productColors.every(productColor => {
                
                if (filters.colors.includes(productColor)) {
                    isExists = true
                }
                return !isExists;
            })

            if (!isExists) return false;
        }

        return true;
    })

    return filteredProducts;
}