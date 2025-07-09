import "./about.scss";

const About = () => {
    return (
        <div className="root">
            <div className="about">
                <div className="text">
                    <h1>ABOUT ME</h1>
                    <h2>
                        Transforming<span>Visions</span>
                    </h2>
                    <p>
  I am a passionate and innovation-driven software engineer with practical experience in full-stack development, AI/ML integration, and blockchain-based platforms. I’ve built smart learning systems, secure biometric authentication apps, and real-time computer vision tools. With a strong grounding in computer science and a flair for clean, scalable code, I specialize in transforming complex problems into intuitive digital experiences. I actively explore emerging technologies and thrive on building impactful, user-focused solutions that bridge creativity with real-world utility.
</p>
                </div>
                <div>
                    <img src="/Aboutme.png" alt="About Me" className="pic" />
                </div>
            </div>
        </div>
    );
};

export default About;
