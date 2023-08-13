import { create } from "zustand";

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


    cartProcess: { status: false, process: null },
    setCartProcess: (payload) => set(() => ({ cartProcess: payload })),

    cartUpdate: false,
    updateCart: () => set((state) => ({ cartUpdate: !state.cartUpdate })),

    requireLogin: false,
    requireLoginMessage: '',
    setRequireLogin: () => set((state) => ({ requireLogin: !state.requireLogin })),
    setRequireLoginMessage: (payload) => set((state) => ({ requireLoginMessage: payload })),
}))

export default useAppStore;