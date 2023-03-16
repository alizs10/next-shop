import { create } from "zustand";

const useAppStore = create((set) => ({
    shownProduct: {
        name: "NIKE AIR MAX III",
        price: 149,
        stars: [
            {
                id: "star-one",
                status: true
            },
            {
                id: "star-two",
                status: true
            },
            {
                id: "star-three",
                status: true
            },
            {
                id: "star-four",
                status: true
            },
            {
                id: "star-five",
                status: false
            }
        ],
        colors: [
            {
                id: "color-one",
                palette: ['#fff', "#222"],
                image: '/assets/nike-shoe-rmed-bg.png',
                price_increase: 0
            },
            {
                id: "color-two",
                palette: ['#fff', "#222"],
                image: '/assets/nike-shoe-rmed-bg.png',
                price_increase: 10
            },
            {
                id: "color-three",
                palette: ['#fff', "#222"],
                image: '/assets/nike-shoe-rmed-bg.png',
                price_increase: 25
            }
        ],
        sizes: [
            {
                id: "size-one",
                size: 6,
                price_increase: 0
            },
            {
                id: "size-one",
                size: 8,
                price_increase: 5
            },
            {
                id: "size-one",
                size: 10,
                price_increase: 15
            }
        ],
        image: "/assets/nike-shoe-rmed-bg.png",
    },
    setShownProduct: () => set(() => ({ shownProduct: payload })),

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