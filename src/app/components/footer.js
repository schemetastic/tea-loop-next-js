import styles from "../page.module.css";

export function Footer() {
    return (
        <footer className={styles.appFooter_container}>
            <div className={styles.appFooter}>
                <span>© Rodrigo Calix 2024</span>
                <div className={styles.appFooter_linksContainer}>
                    <a href="/privacy-policy/" className={styles.appFooter_link}>Privacy Policy</a>
                    <a href="/disclaimer/" className={styles.appFooter_link}>Disclaimer</a>
                </div>
            </div>
        </footer>
    )
}