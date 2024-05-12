// import { useState, useEffect } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css';
// import axios from 'axios';

// const DonorPage = () => {
//     const router = useRouter();
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState("Generating...");
  
//     // const sendMessage = async () => {
//     //   try {
//     //     const response = await axios.post('http://localhost:8080/send-message', { searchQuery }); // Change the URL to include port 8080
//     //     console.log(response.data);
//     //   } catch (error) {
//     //     console.error('Error sending message:', error);
//     //   }
//     // };
  
  
//     const handleSearch = async () => {
//       try {
  
//         const response = await axios.post('http://localhost:8000/send-gen-ppt', { searchQuery }); // Change the URL to include port 
//         console.log(response.data);
       
  
//         const req = await fetch("http://localhost:8000/revert-gen-ppt")
//         .then(req =>  req.json())
//         .then(
//           (data) => { 
//             console.log(data);
//             setSearchResults(data.message);
//         });
      
        
//       } catch (error) {
//         console.error('Error during search:', error);
//       }
//     };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Semantic Search for Donors</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       {/* <div className={styles.header}>
//         <button className={styles.donateButton} onClick={() => router.push('/donor_side')}>
//           Donate
//         </button>
//       </div> */}

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           <span className={styles.gradientText}>Reach out </span>
//         </h1>

//         <div className={styles.searchContainer}>
//           <input
//             type="text"
//             placeholder="Enter your NPO's description"
//             value={searchQuery}
//             onChange={(e) => {setSearchQuery(e.target.value);
//                 console.log(searchQuery);
//             }}
//             className={styles.searchInput_long}
//           />
//           <button onClick={handleSearch} className={styles.searchButton}>
//             Generate
//           </button>
//         </div>

//         <div className={styles.resultsContainer}>
//           {/* {searchResults.map((donor, index) => (
//             <div key={index} className={styles.donorItem}>
//               <h3 className={styles.donorName}>{donor}</h3>
//             </div>
//           ))} */}

//           {/* {searchResults.map((name,index) =>(
//             <div key={index} className={styles.donorItem}>
//               <h3 className={styles.donorName}>{name}</h3>
//             </div>
//           ))} */}
//           {
//             searchResults
//           }

//         </div>
//       </main>

//       {/* <footer className={styles.footer}>
//         <p>&copy; 2023 Semantic Search for Donors. All rights reserved.</p>
//       </footer> */}
//     </div>
//   );
// };

// export default DonorPage;


// import { useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css';
// import axios from 'axios';

// const DonorPage = () => {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [generatedText, setGeneratedText] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios({
//         url: 'http://localhost:8000/send-gen-ppt',
//         method: 'POST',
//         data: { searchQuery },
//         responseType: 'json',
//       });

//       const { generated_text, pptx_file_base64 } = response.data;

//       // Update the generatedText state with the received text
//       setGeneratedText(generated_text);

//       // Handle the PowerPoint file download
//       const pptx_file_bytes = new Uint8Array(atob(pptx_file_base64).split('').map(char => char.charCodeAt(0)));
//       const blob = new Blob([pptx_file_bytes], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'generated_presentation.pptx');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error during search:', error);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Semantic Search for Donors</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           <span className={styles.gradientText}>Reach out</span>
//         </h1>
//         <div className={styles.searchContainer}>
//           <input
//             type="text"
//             placeholder="Enter your NPO's description"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={styles.searchInput_long}
//           />
//           <button onClick={handleSearch} className={styles.searchButton}>
//             Generate
//           </button>
//         </div>
//         {generatedText && (
//           <div className={styles.generatedTextContainer}>
//             <h2>Generated Text:</h2>
//             <pre>{generatedText}</pre>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default DonorPage;



// import { useState } from 'react';
// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import styles from '../styles/Home.module.css';
// import axios from 'axios';

// const DonorPage = () => {
//   const router = useRouter();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [generatedText, setGeneratedText] = useState('');

//   const handleSearch = async () => {
//     try {
//       const response = await axios({
//         url: 'http://localhost:8000/send-gen-ppt',
//         method: 'POST',
//         data: { searchQuery },
//         responseType: 'json',
//       });

//       const { generated_text, pptx_file_base64 } = response.data;

//       // Update the generatedText state with the received text
//       setGeneratedText(generated_text);

//       // Handle the PowerPoint file download
//       const pptx_file_bytes = new Uint8Array(atob(pptx_file_base64).split('').map(char => char.charCodeAt(0)));
//       const blob = new Blob([pptx_file_bytes], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'generated_presentation.pptx');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     } catch (error) {
//       console.error('Error during search:', error);
//     }
//   };

//   // Split the generatedText into three parts
//   const generatedTextParts = splitGeneratedText(generatedText, 3);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Semantic Search for Donors</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           <span className={styles.gradientText}>Reach out</span>
//         </h1>
//         <div className={styles.searchContainer}>
//           <input
//             type="text"
//             placeholder="Enter your NPO's description"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className={styles.searchInput_long}
//           />
//           <button onClick={handleSearch} className={styles.searchButton}>
//             Generate
//           </button>
//         </div>
//         <div className={styles.generatedTextContainer}>
//           {generatedTextParts.map((part, index) => (
//             <div key={index} className={styles.generatedTextPart}>
//               <h2>Part {index + 1}</h2>
//               <pre>{part}</pre>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// const splitGeneratedText = (text, parts = 3) => {
//   const length = Math.floor(text.length / parts);
//   const result = [];

//   for (let i = 0; i < text.length; i += length) {
//     result.push(text.substring(i, i + length));
//   }

//   return result;
// };

// export default DonorPage;


import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import axios from 'axios';

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
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Reach out</span>
        </h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Enter your NPO's description"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput_long}
          />
          <button onClick={handleSearch} className={styles.searchButton}>
            Generate
          </button>
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
  position: 'relative',
  zIndex: 5,
  width: '960px',
  height: '540px',
  backgroundColor: 'white',
  backgroundImage: `url('https://img.freepik.com/premium-vector/black-wall-dark-studio-web-background-template-vector-illustration_532963-1992.jpg?w=360')`,
  margin: '50px auto 0',
  padding: '20px',
  overflowY: 'auto',
}}>
  <div className={styles.title}>{titles[0]}</div>
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
  zIndex: 5,
  width: '960px',
  height: '540px',
  backgroundColor: 'white',
  backgroundImage: `url('https://cdn.pixabay.com/photo/2017/08/12/23/29/background-texture-2635740_640.jpg')`,
  margin: '50px auto 0',
  padding: '20px',
  overflowY: 'auto',
}}>
  <div className={styles.title}>{titles[1]}</div>
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
  height: '540px',
  backgroundColor: 'white',
  backgroundImage: `url('logos/template.png')`,
  margin: '50px auto 0',
  padding: '20px',
  overflowY: 'auto',
}}>
  <div className={styles.title}>{titles[2]}</div>
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



