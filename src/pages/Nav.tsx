import React, { useState } from "react";
import '../assets/style/Nav.scss';
import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects") as HTMLElement | null;
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <>
      <div className="container_nav">
        <nav>
          <a className="logo" href="/">
            PORTFOLIO
          </a>

          <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a onClick={scrollToProjects}>Projects</a>
            </li>
            <li>
              <a href="#footer" onClick={closeMenu}>Contacts</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navbar">
        <div className="logo_img">
          <img src={Logo} alt="Logo" />
          <div className="info">
            <h2>Hi, I am ABDURAHMON</h2>
            <h3>Front-End Web Developer</h3>
            <p>Trained at the Pro Web Educational Institution and have a diploma</p>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Navbar;
