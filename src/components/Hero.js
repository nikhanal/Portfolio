import React from "react";

import "./style.css";

function Hero() {
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
            business and technology to create successful products
          </p>
        </div>
        <div className="projects">
          <a
            className="project-in"
            href="https://github.com/nikhanal?tab=repositories"
          >
            Projects
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
