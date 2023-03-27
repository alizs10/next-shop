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