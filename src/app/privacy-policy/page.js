import styles from "../page.module.css";
import { Nav } from "../components/nav";

export default async function PrivacyPolicy() {
  return (
    <main className={styles.main}>
      <Nav />
      <div className={styles.docContainer}>
        <h1>Privacy Policy</h1>
        <p>Before starting is important that you know that this is demonstration site, this means that the data showed in the website is not of a real company,
          However, some data may be collected from you or stored in your device, your use of this website indicates you acceptance between you and the owner or administrator of the website.
        </p>
        <h2>Data collected</h2>
        <p>This website doesn't collect personal data from you such as your name or email, but it might collect your IP address or other data as a normal procedure of how a lot of websites work. This website collects anonymous data for marketing purposes and determine the behavior of its users.</p>
        <h2>Stored data in your device</h2>
        <p>This website uses local device storage and session storage for the normal use of the website and its content.</p>
        <h2>Third party connections</h2>
        <p>This website connects to third party providers and they have different policies to this privacy policy.</p>
        <h2>Changes to this document</h2>
        <p>This document may change from time to time, your continued use after changes made to this document indicates your acceptance to the new terms.</p>
        <p>Effective date: 21 December 2024 PDT</p>
        <p>Website administrated by Rodrigo Calix, Honduras.</p>
      </div>
    </main>
  );
}

