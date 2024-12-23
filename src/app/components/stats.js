"use client";
import { useState, useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { products } from "../lib/productsData";

export function Stats(props){
    const [statsStatus, setStatsStatus] = useState("fetch");

    let [resultsItems, setResultsItems] = useState(null);

    useEffect(()=>{
        fetch("/api/get-stats", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }}).then(response => {
            if (response.status == 500) {
              throw Error("There was a problem trying to fetch the results");
            }
            return response.json();
          }).then((results)=>{
            console.log(results);
            setResultsItems(results.map((item, index) => {
                return (
                  <div className={styles.resultsItem} key={index}>
                    <h3>{item.name}</h3>
                    <Image src={`/img/${products[item.key].imgFile}`} width={products[item.key].productType == "box" ? 340 : 278} height={products[item.key].productType == "box" ? 216 : 314} />
                    <h4><span className={styles.resultsItem_clickedLabel}>Clicked record:</span> <span className={styles.resultsItem_count}>{item.totalValue}</span></h4>
                  </div>)
              }));
            setStatsStatus("ok");
             
        }).catch((error)=>{
            setStatsStatus("error");
            console.log(error);
        });
    }, [])
    
    return (
    <div className={styles.resultsContainer}>
        {statsStatus == "fetch" ?
        <>
            <h1>Fetching results...</h1>
        </>
        :
        statsStatus == "ok"  ?
        <>
            <h1>Results for the header variants</h1>
            <p>Below you can find how many times each variant of the header has recorded a click on th CTA button:</p>
            <div className={styles.resultsItemsContainer}>
                {resultsItems}
            </div>
        </> :
        <>
            <h1>There was a problem trying to get the data, try refreshing or results may automatically appear in a few minutes</h1>
        </>
        }
        
    </div>
    );
}