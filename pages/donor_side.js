
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactModal from "react-modal";
import styles from "../styles/Home.module.css";
// import {Chart} from 'chart.js';
// import {SankeyController, Flow} from 'chartjs-chart-sankey';
import { Sankey } from 'react-vis';



const DonorPage = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [searchDonor, setsearchDonor] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const nodes = [
    { name: 'Node A' },
    { name: 'Node B' },
    { name: 'Node C' },
    { name: 'Node D' },
    { name: 'Node E' },
  ];
  
  const links = [
    { source: 0, target: 1, value: 15 },
    { source: 0, target: 2, value: 20 },
    { source: 1, target: 3, value: 5 },
    { source: 2, target: 4, value: 15 },
  ];

  const customNodeRenderer = (props) => {
    const { name } = props.node;
    return (
      <text
        fill="white"
        textAnchor="middle"
        x={props.x}
        y={props.y}
      >
        {name}
      </text>
    );
  };

  const SankeyDiagram = () => {
    return (
      <Sankey
        nodes={nodes}
        links={links}
        width={800}
        height={500}
        hasVoronoi={false}
        nodePadding={10}
        nodeWidth={15}
        nodePaddingRatio={0.7}
        renderNode={customNodeRenderer}
      />
    );
  };



 
  




  useEffect(() => {
    const sampleProjects = [
      {
        id: 1,
        title: "Clean Water Initiative",
        description:
          "The Clean Water Initiative aims to provide clean and accessible water to underserved communities. Through innovative water purification systems and infrastructure development, we are working to ensure that everyone has access to safe and reliable drinking water.",
        image: "/project1.jpg",
        fundingGoal: 50000,
        fundingRaised: 35000,
      },
      {
        id: 2,
        title: "Reforestation Project",
        description:
          "The Reforestation Project focuses on planting trees in areas affected by deforestation. By replenishing the forest cover, we aim to combat climate change, improve soil quality, and provide habitats for endangered species.",
        image: "/project2.jpg",
        fundingGoal: 75000,
        fundingRaised: 55000,
      },
      {
        id: 3,
        title: "Education Empowerment",
        description:
          "The Education Empowerment initiative aims to improve access to quality education for underprivileged children. We provide scholarships, build new schools, and implement innovative learning programs to ensure that every child has the opportunity to reach their full potential.",
        image: "/project3.jpg",
        fundingGoal: 100000,
        fundingRaised: 80000,
      },
      {
        id: 4,
        title: "Sustainable Agriculture",
        description:
          "The Sustainable Agriculture project focuses on promoting environmentally-friendly farming practices. We work with local farmers to implement sustainable techniques, such as crop rotation, organic pest management, and water conservation, to ensure long-term food security and environmental sustainability.",
        image: "/project4.jpg",
        fundingGoal: 60000,
        fundingRaised: 45000,
      },
      {
        id: 5,
        title: "Renewable Energy Initiative",
        description:
          "The Renewable Energy Initiative aims to transition communities to clean and renewable energy sources. We install solar panels, wind turbines, and other sustainable energy infrastructure to reduce carbon emissions and promote a greener future.",
        image: "/project5.jpg",
        fundingGoal: 90000,
        fundingRaised: 70000,
      },
      {
        id: 6,
        title: "Animal Welfare Program",
        description:
          "The Animal Welfare Program focuses on protecting and rehabilitating endangered animal species. We establish wildlife sanctuaries, support conservation efforts, and educate the public on the importance of biodiversity and animal preservation.",
        image: "/project6.jpg",
        fundingGoal: 80000,
        fundingRaised: 65000,
      },
      {
        id: 7,
        title: "Disaster Relief Efforts",
        description:
          "The Disaster Relief Efforts provide aid and support during natural disasters and emergencies. We mobilize resources, deploy emergency teams, and coordinate with local authorities to ensure that affected communities receive the assistance they need during challenging times.",
        image: "/project7.jpg",
        fundingGoal: 120000,
        fundingRaised: 95000,
      },
      {
        id: 8,
        title: "Community Development",
        description:
          "The Community Development initiative aims to empower local communities through infrastructure improvements and social welfare programs. We build schools, healthcare facilities, and community centers to foster economic growth and social cohesion.",
        image: "/project8.jpg",
        fundingGoal: 70000,
        fundingRaised: 50000,
      },
      {
        id: 9,
        title: "Mental Health Advocacy",
        description:
          "The Mental Health Advocacy program promotes awareness and provides support services for individuals struggling with mental health challenges. We offer counseling, therapy, and educational resources to destigmatize mental health and ensure that everyone has access to the care they need.",
        image: "/project9.jpg",
        fundingGoal: 85000,
        fundingRaised: 60000,
      },
      {
        id: 10,
        title: "Poverty Alleviation Initiative",
        description:
          "The Poverty Alleviation Initiative aims to address the root causes of poverty and improve social welfare. We implement programs that provide job training, microfinance opportunities, and access to essential services to empower individuals and families to break the cycle of poverty.",
        image: "/project10.jpg",
        fundingGoal: 100000,
        fundingRaised: 75000,
      },
    ];
    setProjects(sampleProjects);
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
  };

  const edu_projects = [
    {
      id: 21,
      title: "Education Empowerment",
      description:
        "The Education Empowerment initiative aims to improve access to quality education for underprivileged children. We provide scholarships, build new schools, and implement innovative learning programs to ensure that every child has the opportunity to reach their full potential.",
      image: "/project3.jpg",
      fundingGoal: 100000,
      fundingRaised: 80000,
    },
    {
      id: 22,
      title: "Educate today ",
      description:
        "Educate Today is a non-profit organization dedicated to providing equitable access to quality education for all, fostering innovation in teaching methodologies, empowering students to reach their full potential, and promoting lifelong learning in communities worldwide.",
      image: "/project3.jpg",
      fundingGoal: 85000,
      fundingRaised: 50000,
    },
    {
      id: 23,
      title: "EduCare Foundation",
      description:
        "EduCare Foundation strives to empower underprivileged youth through educational programs, ensuring equal opportunities for academic success and personal growth.",
      image: "/project3.jpg",
      fundingGoal: 105000,
      fundingRaised: 850000,
    },
    {
      id: 24,
      title: "Brighter Tomorrow Initiative",
      description:
        "Brighter Tomorrow Initiative is committed to enhancing education access and quality, illuminating pathways for brighter futures in underserved communities.",
      image: "/project3.jpg",
      fundingGoal: 65000,
      fundingRaised: 50000,
    },
    {
      id: 25,
      title: "LearnWell Alliance",
      description:
        "LearnWell Alliance collaborates with educators and communities to innovate teaching methods, fostering engaging learning environments that inspire students to excel.",
      image: "/project3.jpg",
      fundingGoal: 95000,
      fundingRaised: 55000,
    },
    {
      id: 26,
      title: "Global Education Network",
      description:
        "Global Education Network connects educators worldwide, facilitating knowledge exchange and collaboration to enhance educational standards and promote global citizenship.",
      image: "/project3.jpg",
      fundingGoal: 130000,
      fundingRaised: 90000,
    },
  ];

  const health_projects = [
    {
      id: 31,
      title: "Health for All Foundation",
      description:
        "Health for All Foundation works tirelessly to ensure equitable access to healthcare services and promote well-being for all individuals.",
      image: "/project3.jpg",
      fundingGoal: 110000,
      fundingRaised: 85000,
    },
    {
      id: 32,
      title: "CareBridge Health Initiative",
      description:
        "CareBridge Health Initiative bridges gaps in healthcare access, delivering compassionate care and empowering communities to achieve optimal health outcomes",
      image: "/project3.jpg",
      fundingGoal: 95000,
      fundingRaised: 50000,
    },
    {
      id: 33,
      title: "Wellness Outreach Network",
      description:
        "Wellness Outreach Network promotes preventive healthcare and community wellness through education, outreach programs, and access to essential health services.",
      image: "/project3.jpg",
      fundingGoal: 105000,
      fundingRaised: 950000,
    },
    {
      id: 34,
      title: "HealHope Alliance",
      description:
        "HealHope Alliance is dedicated to providing hope and healing through innovative healthcare solutions, fostering resilience and well-being in communities.",
      image: "/project3.jpg",
      fundingGoal: 65000,
      fundingRaised: 55000,
    },
    {
      id: 35,
      title: "MedServe Community Care",
      description:
        "MedServe Community Care extends compassionate healthcare services, prioritizing community well-being and fostering a healthier, more resilient society for all.",
      image: "/project3.jpg",
      fundingGoal: 85000,
      fundingRaised: 45000,
    },
  ];

  const showCards = () => {
    const words = searchDonor.split(/\s+/); // Split the sentence into words using whitespace as delimiter
    const wordObject = {};
    words.forEach((word, index) => {
      wordObject[`word${index + 1}`] = word; // Assign each word as a property of the object
    });

    for (const key in wordObject) {
      if (wordObject.hasOwnProperty(key)) {
        if (
          wordObject[key] === "education" ||
          wordObject[key] === "educational"
        ) {
          console.log("edu present");

          setProjects(edu_projects);
        }
      }
    }

    for (const key in wordObject) {
      if (wordObject.hasOwnProperty(key)) {
        if (wordObject[key] === "health" || wordObject[key] === "healthcare") {
          console.log("health present");

          setProjects(health_projects);
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Donor Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.gradientText}>Donor Dashboard</span>
        </h1>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for NPOs"
            value={searchDonor}
            onChange={(e) => setsearchDonor(e.target.value)}
            className={styles.searchInput}
          />
          <button onClick={() => showCards()} className={styles.searchButton}>
            Search
          </button>
        </div>

        {projects.length > 0 && (
          <div className={styles.projectsContainer}>
            {projects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => handleProjectClick(project)} // Make the entire card clickable
                style={{ cursor: "pointer" }} // Add a cursor style for better UX
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.volunteerProgress}>
                  <div
                    className={styles.volunteerBar2}
                    style={{
                      width: `${
                        (project.fundingRaised / project.fundingGoal) * 100
                      }%`,
                    }}
                  />
                </div>
                <span className={styles.volunteerAmount}>
                  ${project.fundingRaised.toLocaleString()} /{" "}
                  {project.fundingGoal.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        )}

        {projects.length === 0 && <div>Loading...</div>}
      </main>

      <ReactModal
        isOpen={showPopup}
        onRequestClose={closePopup}
        contentLabel="Project Details"
        className={styles.modal}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.closeButton} onClick={closePopup}>
          &times;
        </button>
        {selectedProject && (
          <>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className={styles.popupImage}
            />
            <h3 className={styles.popupTitle}>{selectedProject.title}</h3>
            <p className={styles.popupDescription}>
              {selectedProject.description}
            </p>
            {
              SankeyDiagram()
            }





          </>
        )}
      </ReactModal>

      <footer className={styles.footer}>
        <p>&copy; 2024 Donor Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DonorPage;