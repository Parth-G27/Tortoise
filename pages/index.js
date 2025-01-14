import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import HamburgerMenu from "./hamburger";
// import gem from '../public/logos/gemini_logo'




export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(["Waiting for your prompt..."]);
  const [donorNameSend, setdonorNameSend] = useState("");

  // const [prompt, setprompt] = useState('');



  

  const sendMessage = async () => {
    try {
      const response = await axios.post("http://localhost:8080/send-message", {
        searchQuery,
      }); // Change the URL to include port 8080
      console.log(response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.post("http://localhost:8080/send-message", {
        searchQuery,
      }); // Change the URL to include port 8080
      console.log(response.data);

      const req = await fetch("http://localhost:8080/api/home")
        .then((req) => req.json())
        .then((data) => {
          console.log(data);
          setSearchResults(data.message);
        });
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const sendDonorName = async (DonorName) => {
    try {
      setdonorNameSend(DonorName);

      const response = await axios.post("http://localhost:8000/receive-donor-name", {
        donorNameSend,
      }); // Change the URL to include port 8000

      console.log(donorNameSend);

      
    } catch (error) {
      console.error("Error during sending donor name", error);
    }

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Semantic Search for Donors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HamburgerMenu/>

      <div className={styles.header}>
        {/* <button
          className={styles.donateButton}
          onClick={() => router.push("/donor_side")}
        >
          Donate
        </button> */}
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Human Search Agent</span>
        </h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Enter your search query"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Search
          </button>
        </div>

        <div className={styles.resultsContainer}>
          {/* {searchResults.map((donor, index) => (
            <div key={index} className={styles.donorItem}>
              <h3 className={styles.donorName}>{donor}</h3>
            </div>
          ))} */}

          {searchResults.map((name, index) => (
            <div key={index} className={styles.donorItem}>
              <h3 className={styles.donorName}>{name}</h3>

              {/* <button onClick={} className={styles.iconButton}>
                
                Go
              </button> */}
              <a href="/gen_ppt" className={styles.iconButton}><span>&#8594;</span></a>
            </div>
          ))}
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <p>&copy; 2023 Semantic Search for Donors. All rights reserved.</p>
      </footer> */}
    </div>
  );
}
