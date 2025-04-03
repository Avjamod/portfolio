import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { useSelector } from "react-redux";
import About from "./About";
import Welcome from "./Welcome";
import Notification from "./Notification";
import Skills from "./Skills";
import HireMe from "./HireMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Body = () => {
  const { theme } = useSelector((store) => store);
  //const theme = localStorage.getItem("theme");
  return (
    <div id="home" data-theme={theme}>
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <HireMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Body;
