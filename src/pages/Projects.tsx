import '../assets/style/Projects.scss';
import OnlineMarketImage from '../assets/images/OnlineMarket.png';
import NikeImage from '../assets/images/Nike.png';
import VueCinemaImage from '../assets/images/VueCinema.png';
import AboutMeImage from '../assets/images/AboutMe.png';


const Projects = () => {
  return (
    <div className="container">
      <div className="projects">
        <h2>Projects</h2>
        <div className="project_box">
          <div
            className="project_card"
            onClick={() =>
              window.open("https://market1898.netlify.app/")
            }
          >
            <img src={OnlineMarketImage} alt="OnlineMarket" />
            <h3>OnlineMarket</h3>
          </div>
          <div
            className="project_card"
            onClick={() =>
              window.open("https://abdu8272.github.io/VueCinema-/")
            }
          >
            <img src={VueCinemaImage} alt="VueCinema" />
            <h3>VueCinema</h3>
          </div>
          <div
            className="project_card"
            onClick={() => window.open("https://abdu8272.github.io/ABOUTME1/")}
          >
            <img src={AboutMeImage} alt="AboutMe" />
            <h3>AboutMe</h3>
          </div>
          <div
            className="project_card"
            onClick={() =>
              window.open("https://abdu8272.github.io/Nike/")
            }
          >
            <img src={NikeImage} alt="OnlineMarket" />
            <h3>Nike</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
