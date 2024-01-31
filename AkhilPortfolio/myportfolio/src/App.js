import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Skills from "./components/Experience";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Portfolio />
      <Skills />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;