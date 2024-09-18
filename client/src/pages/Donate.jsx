import React, { useState, useQuery } from "react";
import Charity from "../components/charity";
import '../index.css';
import { useAuth } from "../App";

  function Donate() {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const { isLoggedIn } = useAuth();
  
    const toggleExpand = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

  const projects = [
    {
      name: "Bright Horizons Foundation",
      image: "../../../public/charity1.png",
      description: "Bright Horizons Foundation is dedicated to improving educational opportunities for underprivileged children worldwide. By providing resources, scholarships, and mentorship programs, we aim to empower young minds to reach their full potential and build a brighter future for all.",
    },
    {
      name: "Hopeful Hearts Initiative",
      image: "../../../public/charity2.jpg",
      description: "Hopeful Hearts Initiative focuses on mental health and emotional well-being. We offer counseling services, support groups, and educational workshops to help individuals and families navigate mental health challenges and foster resilience and hope in their communities.",
    },
    {
      name: "Global Unity Outreach",
      image: "../../../public/charity3.jpg",
      description: "Global Unity Outreach works to promote peace and collaboration among diverse communities through international aid, cultural exchange programs, and conflict resolution workshops. Our goal is to build bridges between cultures and create a more harmonious global society.",
    },
    {
      name: "Sunrise Support Network",
      image: "../../../public/charity4.webp",
      description: "Sunrise Support Network provides assistance to low-income families by offering essential services such as food distribution, housing support, and job training programs. Our mission is to uplift individuals and families during times of need and help them achieve self-sufficiency.",
    },
    {
      name: "Echoes of Empathy",
      image: "../../../public/charity5.webp",
      description: "ThEchoes of Empathy is dedicated to raising awareness and providing support for individuals affected by rare diseases. We work to connect patients with medical resources, support networks, and research opportunities, while also advocating for greater understanding and funding for rare disease research.",
    },
    {
      name: "Future Smiles Alliance",
      image: "../../../public/charity6.jpg",
      description: "Future Smiles Alliance is committed to enhancing the lives of children with special needs through specialized educational programs, adaptive technologies, and family support services. We strive to create an inclusive environment where every child has the opportunity to thrive and achieve their personal best.",
    },
  ];

  return (
    <section className="charity-section">
      <div charity-div>
        <h2 className="pick-charity">Pick A Charity</h2>
        <div className="charity-grid">
        {projects.map((project, index) => (
          <div
          className={`charity-card col-md-6 col-lg-4 mb-4 d-flex justify-content-center ${
            expandedIndex === index ? 'expanded' : ''
          }`}
          key={index}
        >
          <Charity
            name={project.name}
            image={project.image}
            description={project.description}
            isExpanded={expandedIndex === index}
            onToggle={() => toggleExpand(index)}
            isLoggedIn={isLoggedIn}
          />
        </div>        
        ))}
        </div>
      </div>
    </section>
  );
}

export default Donate;