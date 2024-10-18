import React from "react";
import "./style.css";

function Hero() {
  // Function to handle scroll to portfolio
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="hero-contents">
        <div className="intro">
          <h1>
            Hey, I'm Nishan <span className="khanal">Khanal</span>
          </h1>
        </div>
        <div className="about">
          <p>
            A front-end web developer that is passionate about combining
            business and technology to create successful products.
          </p>
        </div>
        <div className="projects">
          {/* Projects Button */}
          <button
            className="project-in"
            onClick={scrollToPortfolio}
          >
            Projects
          </button>
          {/* CV Button */}
          <a
            className="cv-button"
            href="/cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
