import React, { useRef } from "react";
import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallex = ({ type }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const backgrounds = {
        about: "linear-gradient(180deg, #111132, #0c0c1d)",
        project: "linear-gradient(180deg, #111132, #505064)",
        Skills: "linear-gradient(180deg, #111132, #1a1a2e)",
        certificate: "linear-gradient(180deg, #111132, #3d3d5c)"
    };

    const images = {
        about: "/planets.png",
        project: "/sun.png",
        Skills: "/planets.png",
        certificate: "/sun.png"
    };

    return (
        <div
            className='parallex'
            ref={ref}
            style={{
                background: backgrounds[type] || backgrounds.project,
            }}
        >
            <motion.h1 style={{ y: yText }}>
                {type === "about" ? "About Me" : type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div
                className="planets"
                style={{
                    y: yBg,
                    backgroundImage: `url(${images[type] || images.project})`,
                }}
            ></motion.div>
            <motion.div style={{ x: yBg }} className="stars"></motion.div>
        </div>
    );
};

export default Parallex;
