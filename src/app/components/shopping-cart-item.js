"use client";

import styles from "../page.module.css"
import Image from "next/image";
import { cartItemsStore } from "../lib/stores";
import { IconX } from "@tabler/icons-react";


export function ShoppingCartItem(props) {
    const { productData, amount, total, itemIdNum } = props;
    const { title, imgFile, price, productType } = productData;

    const removeItem = cartItemsStore((state) => state.remove)

    return (
        <div className={styles.shoppingCart_itemContainer}>
            <div className={styles.shoppingCart_itemImageContainer}>
                <span className={styles.shoppingCart_itemCounter}>{amount}</span>
                <Image src={`/img/${imgFile}`} className={productType == "box" ? styles.shoppingCart_itemImage_long : styles.shoppingCart_itemImage_tall} width={productType == "box" ? 340 : 278} height={productType == "box" ? 216 : 314} />
            </div>
            <div className={styles.shoppingCart_itemSeparator}></div>
            <div className={styles.shoppingCart_itemTitleAndValuesContainer}>
                <h3 className={styles.shoppingCart_itemTitle}>{title}{productType === "box" ? ", tea box, 20 bags" : productType === "loose-leaf" ? " bottle, 400g" : ""}</h3>
                <span className={styles.shoppingCart_itemValues}>{amount} X {price}</span>
            </div>
            <span className={styles.shoppingCart_itemEqualLabel}>=</span>
            <div className={styles.shoppingCart_itemTotalContainer}>
                <h3 className={styles.shoppingCart_itemTitle}>Total</h3>
                <span className={styles.shoppingCart_itemTotalLabel}>{total}</span>
            </div>
            <button className={styles.shoppingCart_itemRemoveBtn} onClick={() => removeItem(itemIdNum)}><IconX size="1.25rem" /></button>
        </div>
    )
}