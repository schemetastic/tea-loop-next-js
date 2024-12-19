import styles from "../page.module.css"
import Image from "next/image";
import { ShoppingCartButton } from "./shopping-cart-button";
import { IconMug } from "@tabler/icons-react";

export function Nav(props = { isHomePage: true }) {

    return (
        <nav className={styles.nav}>
            <div className={styles.nav_logoContainer}>
                <a href="/">
                    <Image src="/img/tea-loop-logo.webp" className={styles.nav_logo} width={405} height={143} alt="Tea Loop logo" />
                </a>
            </div>
            <div className={styles.nav_itemsContainer}>
                <a className={styles.nav_item} href="/#collection"><IconMug className={styles.nav_item_icon} size="1.5em" /> Collection</a>
                <ShoppingCartButton />
            </div>
        </nav>
    )
}