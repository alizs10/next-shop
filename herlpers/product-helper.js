export const calculateFinalPrice = (product, selectedColor, selectedSize) => {

    let basePrice = +product.price;
    let discountPercentage = +product.discountPercentage;

    let colors = product.colors;
    let sizes = product.sizes;

    let selectedColorObj = colors[selectedColor]
    let selectedSizeObj = sizes[selectedSize]

    let colorPriceIncrease = +selectedColorObj.price_increase;
    let sizePriceIncrease = +selectedSizeObj.price_increase;

    let allPrices = basePrice + colorPriceIncrease + sizePriceIncrease
    let discountPrice = allPrices * discountPercentage / 100;
    let finalPrice = allPrices - discountPrice;
    return finalPrice;
}