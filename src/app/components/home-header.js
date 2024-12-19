"use client";

import styles from "../page.module.css"
import { products } from "../lib/productsData"
import Image from "next/image";
import { Nav } from "./nav";
import { useState } from "react";
import * as React from 'react'
import { useTrack } from '@devcycle/nextjs-sdk';

export function HomeHeader(props) {
    const variant = props.variant;
    const { title, slogan, price, bgColor, teaColorTop, btnBgColor, btnFgColor } = products[variant]
    const trackEvent = useTrack();
    const [cupLoaded, setCupLoaded] = useState(false);
    const [leftDecorLoaded, setLeftDecorLoaded] = useState(false);
    const [rightDecorLoaded, setRightDecorLoaded] = useState(false);


    async function handleRedirect(ev) {
        ev.preventDefault();
        trackEvent({ type: "clicked-header-cta" });
        setTimeout(() => { window.location = "/product/" + variant }, 2000);
    }
    return (
        <header className={styles.homeHeader} style={{ backgroundColor: bgColor }}>
            <Nav />
            <div className={styles.homeHeader_contentContainer}>
                <div className={styles.homeHeader_contentWrapper}>
                    <h1 className={styles.homeHeader_title}>{title}, {slogan}</h1>
                    <figure className={styles.homeHeader_illustrationContainer}>
                        <div className={styles.homeHeader_teaBoxContainer}>
                            <Image src={`/img/${variant}-box.webp`} priority alt={`3D render of a ${title} tea box`} width={560} height={357} className={styles.homeHeader_teaBoxImage} />
                        </div>
                        <div className={styles.homeHeader_teaCupContainer}>
                            <Image src="/img/tea-cup-top-view.webp" priority onLoad={() => setCupLoaded(true)} alt="Top view of a tea cup" width={542} height={486} className={styles.homeHeader_teaCupImage} />
                            <div className={`${styles.homeHeader_teaCupColor} ${cupLoaded ? styles.homeHeader_teaCupColor_animation : ""}`} style={{ backgroundColor: teaColorTop }}></div>
                        </div>
                    </figure>
                    <div className={styles.homeHeader_linkContainer}>
                        <a href={`/product/${variant}`} onClick={handleRedirect} className={styles.homeHeader_link} style={{ backgroundColor: btnBgColor, color: btnFgColor }}>Get it! {price}</a>
                    </div>
                    <div className={styles.homeHeader_blDecorContainer}>
                        <Image src={`/img/${variant}-bl-decor.webp`} priority onLoad={() => setLeftDecorLoaded(true)} alt="Decorative image" width={480} height={480} className={`${styles.homeHeader_decorImage} ${leftDecorLoaded && rightDecorLoaded ? styles.homeHeader_decorImage_animation : ""}`} />
                    </div>
                    <div className={styles.homeHeader_brDecorContainer}>
                        <Image src={`/img/${variant}-br-decor.webp`} priority onLoad={() => setRightDecorLoaded(true)} alt="Decorative image" width={480} height={480} className={`${styles.homeHeader_decorImage} ${leftDecorLoaded && rightDecorLoaded ? styles.homeHeader_decorImage_animation : ""}`} />
                    </div>
                </div>
            </div>
        </header >
    )
}