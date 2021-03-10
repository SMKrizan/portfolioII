import React from "react";
import "./index.css";
import projects from "../../utils/images.js";

const { project_info } = projects;

const Projects = () => {
  return (
    <section className="card">
      <h1 className="projects">
        <span className="reg">featured </span>
        <span className="bold">Projects</span>
      </h1>
      {project_info.map((project) => (
        <div key={project.key} className="card-container">
          <h3>{project.title}</h3>
          {/* <div
            alt={project.alt} 
            className={project.name}
            style={{ backgroundImage: "url(" + project.src + ")" }}
            ></div> */}
          <p>{project.description}</p>
          <img className="card" src={project.src} alt={project.alt}/>
          <div className="links">
            <a href={project.repository}>Repo</a>
            {project.deployment ? (
              <a href={project.deployment}>App</a>
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
