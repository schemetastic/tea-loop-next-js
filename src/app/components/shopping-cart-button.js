"use client";

import styles from "../page.module.css"
import { shoppingCartVisibility, cartItemsStore } from "../lib/stores";
import { IconShoppingCart } from "@tabler/icons-react";



export function ShoppingCartButton(props) {
    const showShoppingCartModal = shoppingCartVisibility((state) => state.visibilityTo);
    const itemsInCart = cartItemsStore((state) => state.cartItems)

    return (
        <button onClick={() => showShoppingCartModal("visible")} className={styles.shoppingCart_button}><IconShoppingCart className={styles.shoppingCart_button_icon} size="1.75rem" /> <span className={styles.shoppingCart_button_counter}>{itemsInCart.split(";").length - 1}</span></button>
    )
}