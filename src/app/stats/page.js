import styles from "../page.module.css";
import { Nav } from "../components/nav";
import { Stats } from "../components/stats";


export default async function StatsPage() {
  
  return (
    <main className={styles.main}>
      <Nav />
      <Stats />
    </main >
  );
}