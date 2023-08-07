import { create } from "zustand";
import userStore from "./user-store";

const useAppStore = create((set) => ({
    loading: true,
    setLoading: (payload) => set(() => ({ loading: payload })),

    shownProduct: null,
    shownProductImage: 0,
    setShownProduct: (payload) => set(() => ({ shownProduct: payload, shownProductImage: 0 })),
    setShownProductImage: (payload) => set(() => ({ shownProductImage: payload })),

    mainAddToCartPopupVis: false,
    toggleMainAddToCartPopup: (payload) => set((state) => {

        let returnedObj = { mainAddToCartPopupVis: !state.mainAddToCartPopupVis, clickOutside: !state.mainAddToCartPopupVis }
        if (payload._id) {
            returnedObj.shownProduct = payload;
            returnedObj.shownProductImage = 0;
        }

        return returnedObj;
    }),


    drawerVis: false,
    toggleDrawer: () => set((state) => ({ drawerVis: !state.drawerVis, clickOutside: !state.drawerVis })),

    cartPopupVis: false,
    toggleCartPopup: () => set((state) => ({ cartPopupVis: !state.cartPopupVis, clickOutside: !state.cartPopupVis })),

    clickOutside: false,
    setClickOutside: (payload) => set(() => {
        if (!payload) {
            return { clickOutside: false, drawerVis: false, cartPopupVis: false, mainAddToCartPopupVis: false }
        }
    }),
    onClickOutside: () => set(() => ({ clickOutside: false, drawerVis: false, cartPopupVis: false, mainAddToCartPopupVis: false })),

    cartItems: [],
    setCartItems: (payload) => set(() => ({ cartItems: payload })),

    cartProcess: { status: false, process: null },
    setCartProcess: (payload) => set(() => ({ cartProcess: payload })),

    addCartItem: (payload) => set((state) => ({ cartItems: [...state.cartItems, payload] })),
    increaseCartItemQuantity: (payload) => set((state) => {
        let itemsIns = [...state.cartItems]
        let itemIndex = itemsIns.findIndex(item => item._id === payload)
        let item = itemsIns[itemIndex]
        item.quantity++;
        return { cartItems: itemsIns }
    }),
    decreaseCartItemQuantity: (payload) => set((state) => {
        let itemsIns = [...state.cartItems]
        let itemIndex = itemsIns.findIndex(item => item._id === payload)
        let item = itemsIns[itemIndex]
        item.quantity--;
        return { cartItems: itemsIns }
    }),
    removeCartItem: (payload) => set((state) => {
        let cartItemsIns = [...state.cartItems]
        let filteredItems = cartItemsIns.filter(item => item._id !== payload)
        return { cartItems: filteredItems }
    }),
}))

export default useAppStore;