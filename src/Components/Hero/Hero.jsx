import React, { useRef } from "react";
import ParticlesBackground from "./particles"; // Adjusted import path if necessary
import "./hero.scss";
import profile from "./profile.png";

import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import Footer from "../Footer/footer"; // Adjusted import path if necessary

const textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
};

const slidervariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

const Hero = () => {
  const footerRef = useRef(null);

  const handleContactScroll = () => {
    const el = document.getElementById("Contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
  window.open(
    "https://drive.google.com/uc?export=download&id=1HupF1i12eQlQgfug7h5bOrGSzaJ59MAu",
    "_blank"
  );
};

  return (
    <div className="hero">
      <ParticlesBackground />
      <div className="wrapper">
        <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate">
          <motion.h2 variants={textvariants}>Tanush Reddy K</motion.h2>
          <motion.h2 variants={textvariants}>AI/ML Engineer & Full-Stack Developer</motion.h2>
          <motion.p variants={textvariants} className="desc">
  Building AI-powered applications using Generative AI, NLP, Computer Vision, and modern full-stack technologies.
</motion.p>

          <motion.div variants={textvariants} className="buttons">
            <motion.button variants={textvariants} className="download" onClick={handleDownload}>
              <p>Download Resume</p>
              <ArrowDownTrayIcon className='arrow'/>
            </motion.button>
            <motion.button variants={textvariants} onClick={handleContactScroll} className="contact">Contact Me</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="sliding" variants={slidervariants} initial="initial" animate="animate">
        Data Analyst
      </motion.div>

      <div className="imagecontainer">
        <img src={profile} alt="Hero" />
      </div>
      
      <section ref={footerRef} />
      <Footer />
    </div>
  );
};

export default Hero;
