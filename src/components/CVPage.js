import React from "react";
import './CVPage.css';

const CVPage = () => {
  return (
    <div className="cv-container">
      <div className="cv-header">
        {/* <span className="cv-portfolio">CV</span> */}
        <h1 className="cv-title">My CV</h1>
      </div>
      <iframe
        src={process.env.PUBLIC_URL + "/Nishan-Khanal-cv.pdf"}  // Adjust the path to your CV PDF
        width="100%"
        height="1000px"
        title="Nishan Khanal's CV"
      ></iframe>
    </div>
  );
}

export default CVPage;
