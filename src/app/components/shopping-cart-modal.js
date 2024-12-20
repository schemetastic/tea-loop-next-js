"use client";

import styles from "../page.module.css"
import { products } from "../lib/productsData";
import { shoppingCartVisibility, cartItemsStore } from "../lib/stores";
import { IconX, IconShoppingCart } from "@tabler/icons-react";
import { ShoppingCartItem } from "./shopping-cart-item";

export function ShoppingCartModal(props) {
    const showShoppingCart = shoppingCartVisibility((state) => state.visibility)
    const showShoppingCartModal = shoppingCartVisibility((state) => state.visibilityTo)

    function handleModalClick(ev) {
        if (ev.target.id === "shopping-cart-modal" || ev.target.id === "shopping-cart-close-btn") showShoppingCartModal("hidden")
    }
    const itemsInCart = cartItemsStore((state) => state.cartItems);
    const itemsInCartArr = itemsInCart.split(";");
    let totalItemsPrice = 0;
    const shoppingCartItems = itemsInCartArr.map((item, index) => {
        if (!item.length) return;
        const [itemId, amount, total] = item.split(",");
        totalItemsPrice += parseInt(total)
        const productData = products[itemId];

        return (
            <ShoppingCartItem productData={productData} amount={amount} total={"$" + total} key={index} itemIdNum={index} />
        )
    })

    return (
        <div style={{ visibility: showShoppingCart }} id="shopping-cart-modal" onClick={handleModalClick} className={styles.shoppingCart_modalContainer}>
            <div className={styles.shoppingCart_modalBox}>
                <button className={styles.shoppingCart_modalBox_closeBtn} id="shopping-cart-close-btn" ><IconX className={styles.shoppingCart_modalBox_iconX} /></button>
                <div className={styles.shoppingCart_modalBox_titleContainer}>
                    <div className={styles.shoppingCart_modalBox_titleIcon}><IconShoppingCart size="2rem" /></div>
                    <h2 className={styles.shoppingCart_modalBox_title}>Your Cart</h2>
                </div>
                <div className={styles.shoppingCart_modalBox_itemsContainer} style={{ justifyContent: itemsInCartArr.length > 1 ? "start" : "center" }}>
                    {itemsInCartArr.length > 1 ?
                        shoppingCartItems :
                        <div className={styles.shoppingCart_modalBox_noItemsContainer}>
                            <h3 className={styles.shoppingCart_modalBox_noItemsTitle}>You haven't added any items in your cart</h3>
                        </div>
                    }
                    {itemsInCartArr.length > 1 ?
                        (<div className={styles.shoppingCart_modalBox_totalContainer}>
                            <h3 className={styles.shoppingCart_modalBox_totalTitle}>Total: ${totalItemsPrice.toFixed(2)}</h3>
                        </div>)
                        : ""
                    }
                </div>
            </div>
        </div>
    )
}