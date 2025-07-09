import React, { useRef } from "react";
import ParticlesBackground from "./particles"; // Adjusted import path if necessary
import "./hero.scss";
import profile from "./profile.jpg";
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
      duration: 20,
    },
  },
};

const Hero = () => {
  const footerRef = useRef(null);

  const handleContactScroll = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    window.open("/Final Resume.pdf", "_blank");
    // Replace "/Final Resume.pdf" with the actual path to your resume file
  };

  return (
    <div className="hero">
      <ParticlesBackground />
      <div className="wrapper">
        <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate">
          <motion.h2 variants={textvariants}>Tanush Reddy K</motion.h2>
          <motion.h1 variants={textvariants}>Web And Python developer</motion.h1>
          <motion.div variants={textvariants} className="buttons">
            <motion.button variants={textvariants} className="download" onClick={handleDownload}>
              <p>Download Cv</p>
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
      
      {/* Render Footer component with ref */}
      <Footer ref={footerRef} />
    </div>
  );
};

export default Hero;
