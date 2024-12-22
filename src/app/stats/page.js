import styles from "../page.module.css";
import { products } from "../lib/productsData";
import Image from "next/image";
import { Nav } from "../components/nav";


export default async function Stats() {
  const token = await getToken();
  const results = await getResults(token);

  if (token == "error" || results == "error") {
    return (
      <main className={styles.main}>
        <h1>There was an error trying to fetch the data</h1>
      </main>
    )
  }

  const resultsItems = results.map((item, index) => {
    return (
      <div className={styles.resultsItem} key={index}>
        <h3>{item.name}</h3>
        <Image src={`/img/${products[item.key].imgFile}`} width={products[item.key].productType == "box" ? 340 : 278} height={products[item.key].productType == "box" ? 216 : 314} />
        <h4><span className={styles.resultsItem_clickedLabel}>Clicked record:</span> <span className={styles.resultsItem_count}>{item.totalValue}</span></h4>
      </div>)
  })

  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.resultsContainer}>
        <h1>Results for the header variants</h1>
        <p>Below you can find how many times each variant of the header has recorded a click on th CTA button:</p>
        <div className={styles.resultsItemsContainer}>
          {resultsItems}
        </div>
      </div>
    </main >
  );
}


// Get token

async function getToken() {
  const token = await fetch("https://auth.devcycle.com/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      audience: "https://api.devcycle.com/",
      client_id: process.env.DEVCYCLE_CLIENT_ID,
      client_secret: process.env.DEVCYCLE_CLIENT_SECRET
    })
  }).then(response => response.json())
    .then(data => data.access_token)
    .catch(error => {console.log(error); return "error"});

  return token
}


// Get data

async function getResults(token) {
  if (token == "error") return "error";
  let hasError = false;

  const urlParams = new URLSearchParams({
    feature: "tea-loop-header-flavor",
    startDate: "2024-12-20T06:55:57.263Z",
    endDate: getTodayDateISOFormat()
  });
  const apiUrl = `https://api.devcycle.com/v1/projects/schemetastic/metrics/preferred-header-flavor/results?${urlParams.toString()}`;

  const results = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (!response.ok) {
        return "error"
      }
      return response.json();
    })
    .then(data => {
      return data.result.variations
    })
    .catch(error => {console.log(error); return "error"});

  return results;
}

function getTodayDateISOFormat() {
  let todayDate = new Date();
  return todayDate.toISOString();
}

