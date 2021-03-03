import React from "react";
import projects from "../../utils/images.js";
import './index.css';

const { project_info } = projects;

const Projects = () => {
  return (
    <section className="card">
      {project_info.map((project) => (
        <div key={project.key} className="card-container">
          <div alt={project.alt} className={project.name} style={{backgroundImage: "url(" + project.src + ")"}} id={project.width}>
            {/* <img className='card' src={project.src} /> */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <h5>Repo: <a href={project.repository}>GitHub</a></h5>
            <h5>Deployment: <a href={project.deployment}>{project.name}</a></h5>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
