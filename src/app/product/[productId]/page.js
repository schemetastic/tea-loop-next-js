import Image from "next/image";
import styles from "../../page.module.css";
import { products } from "@/app/lib/productsData";
import { ProductHeader } from "@/app/components/product-header";
import { ProductsCarousel } from "@/app/components/products-carousel";
import { Nav } from "@/app/components/nav";

export async function generateMetadata({ params }) {
  const routeData = await params;
  if (products[routeData.productId]) {
    const { title } = products[routeData.productId]
    return {
      title: title + " | Tea Loop"
    }
  } else {
    return {
      title: "404 Not Found"
    }
  }
}

export default async function ProductPage({ params }) {
  const routeData = await params;
  if (products[routeData.productId]) {
    const productData = products[routeData.productId]

    return (
      <main className={styles.main}>
        <Nav />
        <ProductHeader productData={productData} productId={routeData.productId} />
        <div className={styles.productsCarousel_container}>
          <h3 className={styles.productsCarousel_title}>Also, you may be interested in:</h3>
          <ProductsCarousel variant="tea-boxes" omit={routeData.productId} />
        </div>
      </main>
    );
  }
  else {
    return (
      <main className={styles.main}>
        <Nav />
        <h1>404 Not found</h1>
      </main>
    )
  }
}
