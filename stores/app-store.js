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
}))

export default useAppStore;