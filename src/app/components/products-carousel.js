"use client";

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { ProductItem } from './product-item';
import { products } from "../lib/productsData";


const productsListVariants = {
    "tea-boxes": ["honey-lavender", "raspberry-mint", "peach", "rose-lavender", "pomegranate", "black-tea-lemon"],
    "loose-leaf": ["tea-infuser-jar", "tea-infuser-balls", "honey-lavender-loose-leaf", "raspberry-mint-loose-leaf"],
}
export function ProductsCarousel(props) {
    const { variant, omit } = props;

    const productsList = productsListVariants[variant].map((item, index) => {
        if (item == omit) return (<></>)

        return (
            <SplideSlide key={index}>
                <ProductItem productName={products[item].title} price={products[item].price} address={`/product/${item}`} imgData={{
                    src: `/img/${products[item].imgFile}`,
                    width: products[item].productType == "box" ? 560 : 557,
                    height: products[item].productType == "box" ? 357 : 627,
                }} />
            </SplideSlide>
        )
    })

    return (
        <Splide aria-label="Products List" options={{
            perPage: 3,
            gap: "1rem",
            breakpoints: {
                1024: {
                    perPage: 2
                },
                680: {
                    perPage: 1
                },
            }
        }}>
            {productsList}
        </Splide>
    )
}