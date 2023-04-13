import axios from "axios"

export const handlePostFavoriteProduct = async (productId) => {
    try {
        return await fetch('/api/favorites', {
            method: "POST",
            body: JSON.stringify({ productId }),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        return error.message
    }
}

export const handlePostOrder = async (data) => {
    try {
        return await fetch('/api/orders', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        return error.message
    }
}

export const handleGetCartItems = async () => {
    return axios.get(`/api/cart`).then(res => res.data.items)
}

export const handleGetOrder = async (orderId) => {
    console.log("we are here,", orderId);
    return axios.get(`/api/orders/${orderId}`).then(res => res.data.order)
}

export const handleGetUserAddresses = async () => {
    return fetch(`/api/profile/addresses`)
        .then(res => res.json())
        .then(data => data.addresses)
}

export const handleGetDeliveryMethods = async () => {
    return fetch(`/api/delivery-methods`)
        .then(res => res.json())
        .then(data => data.methods)
}

export const handlePostPayment = async (data) => {
    try {
        return await fetch('/api/payments', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        return error.message
    }
}

export const handleGetPayment = async (paymentId) => {
    return axios.get(`/api/payments/${paymentId}`).then(res => res.data.payment)
}

export const handleUpdateOrder = async (orderId, data) => {
    try {
        return await fetch(`/api/orders/${orderId}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        return error.message
    }
}


// discounts

export const handlePostDiscount = async (data) => {
    try {
        return await fetch(`/api/discounts`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

    } catch (error) {
        return error.message
    }
}

export const handleDeleteDiscount = async (discountId) => {
    try {
        return await fetch(`/api/discounts/${discountId}`, {
            method: "DELETE",
        })

    } catch (error) {
        return error.message
    }
}

export const handleGetDiscounts = async (data) => {
    return axios.get(`/api/discounts`).then(res => res.data.discounts)
}