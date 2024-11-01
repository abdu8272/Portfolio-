import React from 'react';
import "../assets/style/Skills.scss"; 
import htmlIcon from '../assets/images/html.png';
import cssIcon from '../assets/images/css.png';
import javascriptIcon from '../assets/images/javascript.png';
import reactIcon from '../assets/images/react.png';
import sassIcon from '../assets/images/sass.png';
import typescriptIcon from '../assets/images/typescript.png';
import githubIcon from '../assets/images/github.png';
import nodejsIcon from '../assets/images/nodejs.png';
import figmaIcon from '../assets/images/figma.png';
import viteIcon from '../assets/images/vite.png';

const Skills: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        <div className="skill-item">
          <img src={htmlIcon} alt="HTML Icon" className="skill-icon" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <img src={cssIcon} alt="CSS Icon" className="skill-icon" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <img src={javascriptIcon} alt="JavaScript Icon" className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <img src={reactIcon} alt="React Icon" className="skill-icon" />
          <p>React JS</p>
        </div>
        <div className="skill-item">
          <img src={sassIcon} alt="Sass Icon" className="skill-icon" />
          <p>Sass</p>
        </div>
        <div className="skill-item">
          <img src={typescriptIcon} alt="TypeScript Icon" className="skill-icon" />
          <p>TypeScript</p>
        </div>
        <div className="skill-item">
          <img src={githubIcon} alt="GitHub Icon" className="skill-icon" />
          <p>GitHub</p>
        </div>
        <div className="skill-item">
          <img src={nodejsIcon} alt="NodeJS Icon" className="skill-icon" />
          <p>Node JS</p>
        </div>
        <div className="skill-item">
          <img src={figmaIcon} alt="Figma Icon" className="skill-icon" />
          <p>Figma</p>
        </div>
        <div className="skill-item">
          <img src={viteIcon} alt="ViteJS Icon" className="skill-icon" />
          <p>Vite JS</p>
        </div>
      </div>
      <div className="divider"></div>
    </section>
    
  );
};

export default Skills;
