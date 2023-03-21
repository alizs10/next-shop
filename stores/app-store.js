import { create } from "zustand";

const useAppStore = create((set) => ({
    shownProduct: null,
    setShownProduct: (payload) => set(() => ({ shownProduct: payload })),

    mainAddToCartPopupVis: false,
    toggleMainAddToCartPopup: () => set((state) => ({ mainAddToCartPopupVis: !state.mainAddToCartPopupVis, clickOutside: !state.mainAddToCartPopupVis })),


    drawerVis: false,
    toggleDrawer: () => set((state) => ({ drawerVis: !state.drawerVis, clickOutside: !state.drawerVis })),

    cartPopupVis: false,
    toggleCartPopup: () => set((state) => ({ cartPopupVis: !state.cartPopupVis, clickOutside: !state.cartPopupVis })),

    clickOutside: false,
    onClickOutside: () => set(() => ({ clickOutside: false, drawerVis: false, cartPopupVis: false, mainAddToCartPopupVis: false })),

    cartItems: [],
    setCartItems: (payload) => set(() => ({ cartItems: payload })),
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