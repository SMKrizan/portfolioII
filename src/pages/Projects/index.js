import React from "react";
import projects from "../../utils/images.js";

const { project_info } = projects;

const Projects = () => {
  return (
    <section className="card">
      {project_info.map((project) => (
        <div key={project.key} id="card-container">
          <div id={project.name} alt={project.alt}>
            <img src={project.src} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repository}>GitHub</a>
            <a href={project.deployment}>Link</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
