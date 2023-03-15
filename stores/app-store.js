import { create } from "zustand";

const useAppStore = create((set) => ({
    drawerVis: false,
    toggleDrawer: () => set((state) => ({ drawerVis: !state.drawerVis })),
    cartPopupVis: false,
    toggleCartPopup: () => set((state) => ({ cartPopupVis: !state.cartPopupVis })),
}))

export default useAppStore;