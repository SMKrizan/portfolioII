import React from "react";
import images from "../../utils";
import "./index.css";

const { portrait, LIBug, GitHub, stack } = images;

const About = () => {
  return (
    <section className='about'>
      <h1 className="about">
        <span className="reg">About </span>
        <span className="bold">me</span>
      </h1>
      <div className="about">
        <div className="me">
          <img
            src={portrait}
            alt="photographic portrait of Sara Krizan"
            className="me"
          />
        </div>
        <div className="text">
          <h2 className="about">
            <span>My name is</span> Sara.
          </h2>
          <p className="about">
            I am a full stack web developer and project manager with over a
            decade of experience providing client and administrative support for
            legal, scientific, and not-for-profit businesses. I am interested in
            helping your teams find elegant solutions to challenges in software
            development and project management.
          </p>
          <div id="links">
            <div>
              <div className="badge" id="li">
                <a
                  href="https://www.linkedin.com/in/smkrizan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    id="li"
                    src={LIBug}
                    alt="https://www.linkedin.com/in/smkrizan/"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="badge" id="gh">
                <a
                  href="https://github.com/SMKrizan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img id="gh" src={GitHub} alt="https://github.com/SMKrizan" />
                </a>
              </div>
            </div>
            <div>
              <div className="badge" id="so">
                <a
                  href="https://stackoverflow.com/users/14132348/smkrizan?tab=profile"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    id="so"
                    src={stack}
                    alt="https://stackoverflow.com/users/14132348/smkrizan?tab=profile"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
