import styles from "./page.module.css";
import { HomeHeader } from "./components/home-header";
import { ProductsList } from "./components/products-list";
import { getVariableValue } from "./devcycle";

export default async function Home() {
  const variant = await getVariableValue('tea-header-variant', 'honey-lavender');

  return (
    <main className={styles.main}>
      <HomeHeader variant={variant} />
      <ProductsList />
    </main>
  );
}

