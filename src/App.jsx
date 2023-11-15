import "../src/index.css";
import Header from "./components/home/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Achivements from "./components/achivements/Achivements";
import Hobies from "./components/hobies/Hobies";
import Contact from "./components/contacts/Contact";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Footer />
      <About />
      <Projects />
      <Achivements />
      <Hobies />
      <Contact />
    </>
  );
};

export default App;
