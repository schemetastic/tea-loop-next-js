"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { TeaCupFront } from "./tea-cup-front";
import { productCountStore, cartItemsStore } from "../lib/stores";


export function ProductHeader(props) {
    const { title, slogan, productType, price, btnBgColor, bgColor, imgFile, teaColorFront } = props.productData;
    const { productId } = props;


    const productCount = productCountStore((state) => state.count);
    const increase = productCountStore((state) => state.increase);
    const decrease = productCountStore((state) => state.decrease);
    const reset = productCountStore((state) => state.reset);
    const itemsInCart = cartItemsStore((state) => state.cartItems)
    const addToCartStore = cartItemsStore((state) => state.add)

    console.log(itemsInCart, typeof itemsInCart)

    function addProduct() {
        addToCartStore(productId, productCount, (parseInt(price.replace("$", "")) * productCount).toFixed(2));
        reset();
    }
    return (
        <header className={styles.productHeader}>
            <div className={styles.productHeader_leftCol} style={{ backgroundColor: bgColor }}>
                <div>
                    <Image src={`/img/${imgFile}`} width={productType == "box" ? 680 : 557} height={productType == "box" ? 433 : 627} className={styles.productHeader_image} />

                </div>
            </div>
            <div className={styles.productHeader_rightCol}>
                <h1 className={styles.productHeader_title}>{title}, {slogan}</h1>
                {["box", "loose-leaf"].includes(productType) ?
                    <TeaCupFront fillColor={teaColorFront} teaCupsCount={productType == "box" ? "x" + productCount * 20 : "+" + productCount * 60} labelBg={bgColor} /> :
                    <></>
                }
                <div className={styles.addProduct_quantityContainer}>
                    <span className={styles.addProduct_quantityLabel}>Quantity:</span>
                    <span className={styles.addProduct_quantityNumber} style={{ backgroundColor: bgColor }}>{productCount}</span>
                    <div className={styles.addProduct_quantityBtns_container}>
                        <button className={styles.addProduct_quantityBtn} style={{ "--hover-quantity-btn": bgColor }} onClick={decrease}>-</button>
                        <button className={styles.addProduct_quantityBtn} style={{ "--hover-quantity-btn": bgColor }} onClick={increase}>+</button>
                    </div>
                </div>
                <button className={styles.addProduct_btn} onClick={addProduct} style={{ backgroundColor: btnBgColor }}>Add to cart: {productCount} = ${(parseInt(price.replace("$", "")) * productCount).toFixed(2)}</button>
            </div>
        </header>
    )
}