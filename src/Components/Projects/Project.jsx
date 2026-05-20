import React, { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI Mock Interview Simulator",
    img: "interview.png",
    desc: "Developed an AI-powered mock interview platform using Next.js, React.js, Node.js, and Python. Integrated GPT-3.5 Turbo, Gemini AI, Google Speech-to-Text API, MediaPipe, CNN, and Bi-LSTM models for adaptive questioning, sentiment analysis, posture tracking, and automated interview feedback."
  },
  {
    id: 2,
    title: "AI-Powered LMS Platform",
    img: "lms.png",
    desc: "Built a Generative AI-based learning platform capable of generating quizzes, flashcards, summaries, interview preparation content, and personalized learning materials using AI workflows and cloud-integrated APIs."
  },
  {
    id: 3,
    title: "Sign Language to Audio Translator",
    img: "sign-language.webp",
    desc: "Developed a real-time sign language translation system using MediaPipe, Random Forest Classifier, OpenCV, and gTTS. Implemented hand and facial landmark detection for gesture recognition and speech conversion."
  },
  {
    id: 4,
    title: "Student Performance Analytics Dashboard",
    img: "Netflix.png",
    desc: "Designed an interactive Tableau dashboard for analyzing student academic performance using dynamic visualizations, comparative analysis, and data-driven insights."
  }
];

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref ,});
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imagecontainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div  className="textcontainer" style={{ y }} >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const Project = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <div className='project' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
};

export default Project;
