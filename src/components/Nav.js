import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-contents">
        <div className="logo">
          <Link to="/">
            nishan <span className="khanal">khanal</span>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li className="contact">
              <Link to="/contact">Say Hi</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
