import React from "react";
import AboutHero from "../components/aboutpage/AboutHero";
import Founders from "../components/aboutpage/founders/Founders";
import Testimonials from "../components/aboutpage/Testimonials";

export default function About() {
  return (
    <>
      <AboutHero />
      <Founders />
      <Testimonials />
    </>
  );
}
