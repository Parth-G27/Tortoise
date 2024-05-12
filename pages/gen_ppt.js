

import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import HamburgerMenu from "./hamburger";

const DonorPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios({
        url: 'http://localhost:8000/send-gen-ppt',
        method: 'POST',
        data: { "Test":"Test" },
        responseType: 'json',
      });

      const { generated_text, pptx_file_base64 } = response.data;

      // Update the generatedText state with the received text
      setGeneratedText(generated_text);

      // Handle the PowerPoint file download
      const pptx_file_bytes = new Uint8Array(atob(pptx_file_base64).split('').map(char => char.charCodeAt(0)));
      const blob = new Blob([pptx_file_bytes], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'generated_presentation.pptx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  // Split the generatedText into titles and contents
  const [titles, contents] = splitGeneratedText(generatedText);

  return (
    <div className={styles.container}>
      <Head>
        <title>Semantic Search for Donors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HamburgerMenu/>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Generative AI Reach-Out Pitch Deck</span>
        </h1>
        <div className={styles.searchContainer}>
          {/* <input
            type="text"
            placeholder="Enter your NPO's description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput_long}
          /> */}
          <button onClick={handleSearch} className={styles.searchButton2}>
            Generate
          </button>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
  position: 'relative',
  zIndex: 5,
  color: 'white',
  width: '960px',
  height: '540px',
  backgroundColor: 'white',
  backgroundImage: `url('logos/template.jpeg')`,
  margin: '50px auto 0',
  padding: '20px',
  overflowY: 'auto',
}}>
  <div className={`${styles.title} ${styles.titleColor}`}>{titles[0]}</div>
  <div className={`${styles.content} ${styles.contentDiv}`}>
    {contents[0] && contents[0].split('\n\n').map((paragraph, index) => (
      <p key={index}>
        {paragraph.split('\n').map((line, lineIndex) => (
          <>
            {lineIndex > 0 && '• '}
            {line}
            <br />
          </>
        ))}
      </p>
    ))}
  </div>
</div>

<div style={{
  position: 'relative',
  color: 'white',
  zIndex: 5,
  width: '960px',
  height: '540px',
  backgroundColor: 'white',
  backgroundImage: `url('logos/template.jpeg')`,
  margin: '50px auto 0',
  padding: '20px',
  overflowY: 'auto',
}}>
  <div className={`${styles.title} ${styles.titleColor}`}>{titles[1]}</div>
  <div className={`${styles.content} ${styles.contentDiv}`}>
    {contents[1] && contents[1].split('\n\n').map((paragraph, index) => (
      <p key={index}>
        {paragraph.split('\n').map((line, lineIndex) => (
          <>
            {lineIndex > 0 && '• '}
            {line}
            <br />
          </>
        ))}
      </p>
    ))}
  </div>
</div>

<div style={{
  position: 'relative',
  zIndex: 5,
  width: '960px',
  color: 'white',
  height: '540px',
  backgroundColor: 'white',
  backgroundImage: `url('logos/template.jpeg')`,
  margin: '50px auto 0',
  padding: '20px',
  overflowY: 'auto',
}}>
  <div className={`${styles.title} ${styles.titleColor}`}>{titles[2]}</div>
  <div className={`${styles.content} ${styles.contentDiv}`}>
    {contents[2] && contents[2].split('\n\n').map((paragraph, index) => (
      <p key={index}>
        {paragraph.split('\n').map((line, lineIndex) => (
          <>
            {lineIndex > 0 && '• '}
            {line}
            <br />
          </>
        ))}
      </p>
    ))}
  </div>
</div>
        </div>
      </main>
    </div>
  );
};

const splitGeneratedText = (text) => {
  // Split the text into titles and contents
  const parts = text.split('\n\nTitle: ');
  const titles = parts.map(part => part.split('\nContent:\n')[0]);
  const contents = parts.map(part => part.split('\nContent:\n')[1] || ''); // Set default empty string if content doesn't exist
  return [titles, contents];
};

export default DonorPage;



