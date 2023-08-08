export const setCartItems = (items) => {

    localStorage.setItem('cart', JSON.stringify(items))

}

export const getCartItems = () => {

    let cartItemsInLocalStorage = localStorage.getItem('cart')
    let cartItemsInLocalStorageArr = cartItemsInLocalStorage !== 'undefined' ? JSON.parse(cartItemsInLocalStorage) : []

    return cartItemsInLocalStorageArr;
}

export const getCartItemsCount = () => {
    let count = 0;

    let items = [...getCartItems()];
    items.map(item => {
        count += item.quantity;
    })

    return count;
}


export const addItemToCart = (newItem) => {
    let items = [...getCartItems()];
    let updatedItems = [...items, newItem];
    setCartItems(updatedItems)

    return updatedItems;
}


export const increaseItemQuantity = (itemId) => {

    let items = [...getCartItems()];

    let itemIndex = items.findIndex(item => item._id === itemId)
    let item = items[itemIndex]
    item.quantity++;

    setCartItems(items)
    return items;
}

export const decreaseItemQuantity = (itemId) => {

    let items = [...getCartItems()];

    let itemIndex = items.findIndex(item => item._id === itemId)
    let item = items[itemIndex]
    item.quantity--;

    setCartItems(items)
    return items;
}

export const removeItemFromCart = (itemId) => {

    let items = [...getCartItems()];
    let filteredItems = items.filter(item => item._id !== itemId)

    setCartItems(filteredItems)
    return filteredItems;
}