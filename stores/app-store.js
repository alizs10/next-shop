import { create } from "zustand";

const useAppStore = create((set) => ({
    drawerVis: false,
    toggleDrawer: () => set((state) => ({ drawerVis: !state.drawerVis })),
}))

export default useAppStore;