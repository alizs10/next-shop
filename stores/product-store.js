import { create } from "zustand";

const useProductStore = create((set) => ({

    products: [],
    setProducts: (payload) => set(() => ({ products: payload })),
}))

export default useProductStore;