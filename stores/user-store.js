import { create } from 'zustand'

const userStore = create((set) => ({
    user: null,
    setUser: (payload) => set(() => ({ user: payload ? payload : null })),
    removeUser: () => set({ user: null }),
}))

export default userStore;