"use client";

import Image from "next/image";
import styles from "../page.module.css";
import { useState } from "react";


export function TeaCupFront(props) {
    const { fillColor, teaCupsCount, labelBg } = props;

    const [cupImgHasLoaded, setCupImgHasLoaded] = useState(false);

    const LiquidShape = (props) => {
        return (
            <svg
                width={336.75269}
                height={296.44299}
                viewBox="0 0 89.099149 78.433874"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.teaCupFront_liquidShape}
            >
                <defs />
                <g transform="translate(71.162413,-503.60406)">
                    <path
                        style={{
                            fill: fillColor,
                            stroke: "none",
                        }}
                        className={styles.teaCupFront_liquidShapePath}
                        d="m -51.583853,573.35114 c -10.161806,-16.14398 -18.016503,-32.6817 -19.560048,-60.31906 -0.762379,-11.16535 22.143368,-7.89261 47.021789,-9.42804 33.6516204,0.56113 39.521091,1.54533 41.715253,5.93895 l 0.32548,7.78936 c 0.318026,6.04379 -3.478564,32.67604 -17.53702271,56.57537 -4.96210959,4.4753 -14.98300829,8.1302 -23.92021929,8.1302 -10.429782,0 -23.631394,-4.0476 -28.045232,-8.68678 z"
                    />
                </g>
            </svg>
        )
    }

    return (
        <figure className={styles.teaCupFront}>
            <Image src="/img/tea-cup-front.webp" width={491} height={392} className={styles.teaCupFront_image} onLoad={() => setCupImgHasLoaded(true)} />
            <div className={`${styles.teaCupFront_liquidShapeContainer} ${cupImgHasLoaded ? styles.teaCupFront_liquidShapeContainer_show : ""}`}>
                <LiquidShape fillColor={props.fillColor} />
            </div>
            <span className={styles.teaCupFront_label} style={{ backgroundColor: labelBg }}>{teaCupsCount}</span>
        </figure>
    )
}