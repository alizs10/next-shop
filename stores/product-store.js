import { create } from "zustand";
import { handlePostFavoriteProduct } from '../helpers/api-helpers';

const useProductStore = create((set) => ({

    products: [],
    setProducts: (payload) => set(() => ({ products: payload })),

    toggleProductToFavorite: async (payload) => {

        let productId = payload;
        let result = await handlePostFavoriteProduct(productId)

        if (result.status !== 200) {
            return state
        }

        var data = await result.json()


        return set((state) => {
            let productsIns = [...state.products]
            let productIndex = productsIns.findIndex(pr => pr._id === productId)
            productsIns[productIndex] = { ...productsIns[productIndex], isFavorite: data.isFavorite };

            return { products: [...productsIns] };
        })
    }
}))

export default useProductStore;