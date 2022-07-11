import React from 'react';
import './About.css';

function About({ theme }) {
  return (
    <section id="about">
        <h1>Your Fitness Goal</h1>
        <div className="about-container">
            <div className="image-container">
                <h2>Workout</h2>
                <img src={`../assets/img/undraw_personal_training_0dqn_${theme}.svg`} alt="Personal Training" id="image1" />
            </div>
            <div className="image-container">
                <h2>Mindfulness</h2>
                <img src={`../assets/img/undraw_mindfulness_scgo_${theme}.svg`} alt="Mindfulness" id="image2" />
            </div>
            <div className="image-container">
                <h2>Achievement</h2>
                <img src={`../assets/img/undraw_healthy_lifestyle_6tyl_${theme}.svg`} alt="Healthy lifestyle" id="image3" />
            </div>
        </div>
    </section>
  )
}

export default About;