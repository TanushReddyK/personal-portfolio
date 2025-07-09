import React from "react";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Nav from "./Components/Navbar/Nav";
import Parallex from "./Components/parallex/Parallex";
import Project from "./Components/Projects/Project";
import Skill from "./Components/skills/Skill";
import "./app.scss";
import Footer from "./Components/Footer/footer";

const App = () => {
  return (
    <div>
      <section id="Home">
        <Nav />
        <Hero />
      </section>
      <section id="About Me">
        <Parallex type="about" />
      </section> 
       <section>
        <About />
      </section>
      <section id="Skills">
        <Parallex type="Skills" />
      </section>
      <section>
        <Skill />
      </section>
      <section id="Project">
        <Parallex type="project" />
      </section>
        <Project />
      <section><Footer/></section>
      
      
    
    </div>
  );
};

export default App;
