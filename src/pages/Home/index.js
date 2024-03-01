import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { Element } from "react-scroll";

function Home() {
  return (
    <div>
      <Header />
      <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <Element name="About">
          <About />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="Contact">
          <Contact />
        </Element>
        <Footer />
        <LeftSider />
      </div>
    </div>
  );
}
export default Home;
