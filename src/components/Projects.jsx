import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects">
        <h1>Buttons</h1>
        <div className="buttons">
            <button className="primary">Primary</button>
            <button className="secondary">Secondary</button>
            <button className="primary" disabled>Disabled</button>
            <button className="outline">Outline</button>
            <button className="secondary outline">Alt outline</button>
            <button className="outline" disabled>Disabled</button>
        </div>
        <div className="text-box">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt sunt soluta quisquam repellat quidem quod eveniet nihil, temporibus, nulla deleniti impedit, laudantium quis corrupti aliquid voluptatibus eaque vitae beatae.</p>
        </div>
    </section>
  )
}

export default Projects;