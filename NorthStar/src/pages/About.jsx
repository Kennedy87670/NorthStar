import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footers from "../components/Footers/Footers";
import TopSellers from "../components/TopSeller/TopSellers";
import AboutHero from "../aboutpage/AboutHero";
import Founders from "../aboutpage/Founders";
import Testimonials from "../aboutpage/Testimonials";

const About = () => {
  return (
    <>
      <AboutHero />
      <Founders />
      <Testimonials />
    </>
  );
};

export default About;
