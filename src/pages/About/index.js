import React from "react";
import images from "../../utils";
import "./index.css";

const { portrait, LIBug, GitHub, stack } = images;

const About = () => {
  return (
    <section className="about page">
      <h1 className="about title">
        <span className="reg">About </span>
        <span className="bold">me</span>
      </h1>
      <div className="about portrait">
        <img
          src={portrait}
          alt="photographic portrait of Sara Krizan"
          className="me"
        />
      </div>
      <div className="about content">
        <h2 className="about">
          My name is Sara.
        </h2>
        <p className="about">
          I am a project manager and full stack web developer with a background in biology and extensive
          experience providing client and administrative support for legal,
          scientific, and not-for-profit businesses. I am interested in helping
          your teams find elegant solutions to challenges in software
          development and project management.
        </p>
      </div>
      <div className="about links">
        <div className="badge-container li">
          <a className="about" id="li"
            href="https://www.linkedin.com/in/smkrizan/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={LIBug}
              alt="https://www.linkedin.com/in/smkrizan/"
            />
          </a>
        </div>
        <div className="badge-container gh">
          <a className="about" id="gh"
            href="https://github.com/SMKrizan"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GitHub} alt="https://github.com/SMKrizan" />
          </a>
        </div>
        <div className="badge-container so">
          <a className="about" id="so"
            href="https://stackoverflow.com/users/14132348/smkrizan?tab=profile"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={stack}
              alt="https://stackoverflow.com/users/14132348/smkrizan?tab=profile"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
