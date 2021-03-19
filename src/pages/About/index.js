import React from "react";
import images from "../../utils";
import "./index.css";

const { portrait, portrait_dk, LIBug, GitHub, stack } = images;

const About = () => {
  const darkModeCheck = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if(!darkModeCheck){
    console.log("User prefers light interface.")
  }

  return (
    <section className="about page">
      <h1 className="about title">
        <span className="reg">About </span>
        <span className="bold">me</span>
      </h1>
      <div className="about portrait">
        <img
          src={darkModeCheck ? portrait_dk : portrait}
          alt="photographic portrait of Sara Krizan"
          className="me"
        />
      </div>
      <div className="about content">
        <h2 className="about">
          My name is Sara.
        </h2>
        <p className="about">
          I am a project manager and full stack web developer with a foundation in biology and extensive
          experience providing client and administrative support for legal,
          scientific, and not-for-profit businesses. I am driven by equal parts curiousity and the desire to contribute to work that has a positive impact on the world. I would be thrilled for an opportunity to help
          your teams identify creative and elegant solutions to challenges in software development and project management.
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
