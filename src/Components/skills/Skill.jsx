import React from 'react';
import './skill.scss';

const Skill = () => {
  return (
    <div className='container'>
      <div className='title'>
        <p>SKILLS</p>
      </div>
      <div className='exp-list'>
       
        <div className="exp-item">
          <div className='exp-info'>
            <p>JAVA</p>
            <p>90%</p>
          </div>
          <div className='progress' data-percent="90">
            <span className="line" style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>JAVASCRIPT</p>
            <p>90%</p>
          </div>
          <div className='progress' data-percent="90">
            <span className="line" style={{ width: "90%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>ANGULAR JS</p>
            <p>80%</p>
          </div>
          <div className='progress' data-percent="80">
            <span className="line" style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>MYSQL</p>
            <p>85%</p>
          </div>
          <div className='progress' data-percent="85">
            <span className="line" style={{ width: "85%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>AZURE AI</p>
            <p>80%</p>
          </div>
          <div className='progress' data-percent="80">
            <span className="line" style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>AI DEVELOPMENT</p>
            <p>60%</p>
          </div>
          <div className='progress' data-percent="60">
            <span className="line" style={{ width: "60%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>Python</p>
            <p>90%</p>
          </div>
          <div className='progress' data-percent="90">
            <span style={{ width: "90%" }}></span>
          </div>
        </div> <div className="exp-item">
          <div className='exp-info'>
            <p>React</p>
            <p>80%</p>
          </div>
          <div className='progress' data-percent="80">
            <span style={{ width: "80%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p>Tableau</p>
            <p>60%</p>
          </div>
          <div className='progress' data-percent="60">
            <span style={{ width: "60%" }}></span>
          </div>
        </div>
        <div className="exp-item">
          <div className='exp-info'>
            <p> etherium Blogchain</p>
            <p>40%</p>
          </div>
          <div className='progress' data-percent="40">
            <span style={{ width: "40%" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
