import styles from "../page.module.css"
import { products } from "../lib/productsData"
import { ProductItem } from "./product-item";

export function ProductsList(props) {

    const mappedProducts = Object.keys(products).map((item, index) => {
        return (
            <ProductItem productName={products[item].title} price={products[item].price} address={`/product/${item}`} imgData={{
                src: `/img/${products[item].imgFile}`,
                width: products[item].productType == "box" ? 560 : 557,
                height: products[item].productType == "box" ? 357 : 627,
            }} key={index} />
        )
    })
    return (
        <section id="collection" className={styles.products_container}>
            <h1 className={styles.products_mainTitle}>Our Tea Products</h1>
            <div className={styles.products_listContainer} >
                {mappedProducts}
            </div>
        </section >
    )
}