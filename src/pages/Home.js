import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

function Home() {
  const myProjects = [
    {
      title: "USSAF Nepal Website",
      description: "Website for a health NGO showcasing their mission and services.",
      image: "./Ussaf.png",
      link: "https://ussafnepal.org/",
      category: "webdevelopment"
    },
    {
      title: "Bond Nepal Website",
      description: "Website for a construction and waterproofing company showcasing their services.",
      image: "./BondNepal.png",
      link: "https://bondnepal.com/",
      category: "webdevelopment"
    },
    {
      title: "Thapathali Campus Website",
      description: "Redesigned and improved user experience of the college website.",
      image: "./Thapathali.png",
      link: "https://tcioe.edu.np/",
      category: "webdevelopment"
    },
    {
      title: "Typing Test Website",
      description: "A dynamic platform with typing challenges supporting multiple languages.",
      image: "./Anand.png",
      link: "https://anandtyping.com/",
      category: "webdevelopment"
    },
    {
      title: "Pulse Post",
      description: "A social media application developed as part of a database management project.",
      image: "./Pulsepost.png",
      link: "https://pulsepost.onrender.com/",
      category: "webdevelopment"
    },
    {
      title: "Autonomous Rubik's Cube Solver",
      description: "Published a paper on Mechanical automation and YOLOv8 vision system for Rubik’s Cube solving.",
      image: "./rubik.png",
      link: "https://conference.ioe.edu.np/publications/ioegc15/IOEGC-15-023-C1-2-42.pdf",
      category: "academic"
    },
  ];
  
  return (
    <div>
      <Hero />
      <div id="portfolio-section">
        <Portfolio projects={myProjects} />
      </div>
    </div>
  );
}

export default Home;
