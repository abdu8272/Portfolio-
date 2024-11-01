import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import "./assets/style/main.scss";


const App: React.FC = () => {
  return (
    <div className="home">
      <Nav />
      <section id="about">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default App;
