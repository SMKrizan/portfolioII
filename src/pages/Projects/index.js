import React from "react";
import "./index.css";
import projects from "../../utils/images.js";

const { project_info } = projects;

const Projects = () => {
  return (
    <section className="card">
      {project_info.map((project) => (
        <div key={project.key} className="card-container">
          <h3>{project.title}</h3>
          {/* <div
            alt={project.alt}
            className={project.name}
            style={{ backgroundImage: "url(" + project.src + ")" }}
            ></div> */}
            <img className='card' src={project.src} />
            <p>{project.description}</p>
            <div className="links">
              <a href={project.repository}>GitHub</a>
              <a href={project.deployment}>gotoApp</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
