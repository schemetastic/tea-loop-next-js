import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const productCountStore = create((set) => ({
    count: 1,
    increase: () => set((state) => ({ count: state.count < 99 ? state.count + 1 : state.count })),
    decrease: () => set((state) => ({ count: state.count > 1 ? state.count - 1 : state.count })),
    reset: () => set({ count: 1 }),
}))


export const shoppingCartVisibility = create((set) => ({
    visibility: "hidden",
    visibilityTo: (visibility = "hidden") => set(() => ({ visibility: visibility }))
}))


export const cartItemsStore = create(
    persist(
        (set, get) => ({
            cartItems: "",
            add: (itemId, amount, price) => set((state) => ({ cartItems: state.cartItems += `${itemId},${amount},${price};` })),
            remove: (index) => set((state) => ({ cartItems: deleteItemInStr(state.cartItems, index) }))
        }),
        {
            name: "shopping-cart",
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

function deleteItemInStr(strItems, index) {
    const items = strItems.split(";");
    items.splice(index, 1);
    return items.join(";");
}