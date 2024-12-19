
import styles from "../page.module.css"
import Image from "next/image";

export function ProductItem(props) {
    const { productName, price, address, imgData } = props;
    return (
        <div className={styles.productItem_container} aria-label="Product item">
            <h3 className={styles.productItem_title}>{productName}</h3>
            <div className={styles.productItem_imageContainer}>
                <Image src={imgData.src} className={styles.productItem_image} width={imgData.width} height={imgData.height} />
            </div>
            <div className={styles.productItem_linkContainer}>
                <a href={address} className={styles.productItem_link}>Buy, {price}</a>
            </div>
        </div>
    )
}