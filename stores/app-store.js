import { create } from "zustand";

const useAppStore = create((set) => ({
    drawerVis: false,
    toggleDrawer: () => set((state) => ({ drawerVis: !state.drawerVis, clickOutside: !state.cartPopupVis })),
    cartPopupVis: false,
    toggleCartPopup: () => set((state) => ({ cartPopupVis: !state.cartPopupVis, clickOutside: !state.cartPopupVis })),
    clickOutside: false,
    onClickOutside: () => set(() => ({ clickOutside: false, drawerVis: false, cartPopupVis: false })),
}))

export default useAppStore;