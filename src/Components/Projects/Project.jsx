import React, { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "Students Performancs Analysis, With interactive Dynamic dashboard",
        img: "Netflix.png",
        desc: "an in-depth analysis of student exam performance using Tableau Public. The goal was to extract meaningful insights from dataset to understand patterns in academic achievement. I designed an interactive dashboard comprising 5 key visualizations:gender-wise student count comparison of reading and writing scores, performance trends among students receiving free lunch, analysis based on parental education levels, and   a dynamic input-driven sheet that compares a user's score against others using color-coded differentiation. publicly Avilable in TableauLive "
    },
    {
        id: 2,
        title: "Gym Tracking System",
        img: "gym.jpg",
        desc: "In this project, I developed a Gym Tracking System designed to monitor and record various user exercises, such as push-ups, squats, and other workouts. Utilizing advanced tracking algorithms and user-friendly interfaces, the system provides real-time feedback on exercise performance and progress. This project showcases my skills in software development, data tracking, and user interface design, emphasizing my ability to create practical and efficient solutions for fitness tracking."
    },
    {
        id: 3,
        title: "Skillforce – Interview Prep Platform",
        img: "weather.png",
        desc: "In this project, I developed an AI-powered Learning Management System (LMS) consisting of three integrated modules aimed at enhancing the educational experience for both educators and students. The first module is an Educator Dashboard that allows teachers to generate and customize course, enabling seamless sharing with students.Exam Preparation Platform, where students can select their course preferences and automatically generate structured learning materials including chapter notes, flashcards, and quizzes.AI-based Interview Simulation tool that conducts adaptive, in-depth mock interviews, helping students build confidence."
    },
    {
        id: 4,
        title: "Sign Language Translation to Audio Conversion",
        img: "sign-language.webp",
        desc: "In this project, I created a system that translates sign language into audio. Using OpenCV, the system recognizes hand signs and converts them into corresponding text. This text is then transformed into audible speech, facilitating communication for individuals who use sign language. The project integrates computer vision and natural language processing techniques to bridge the gap between sign language users and the broader community"
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
