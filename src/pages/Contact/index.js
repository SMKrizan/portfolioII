import React from "react";
import image from "../../utils";
import "./index.css";

const { cameo } = image;

const Contact = () => {
  return (
    <section className="contact-container">
      <div className="contact">
        <div id="container">
          <img src={cameo} alt="cameo portrait of Sara Krizan" id="cameo" />
          <h1 className="contact-title">
            <span className="reg">get </span>
            <span className="bold">
              in <br />
              Touch
            </span>
          </h1>
        </div>
      </div>
      <div className="contact" id="address">
        <address>
          <span id="first">Sara </span>
          <span id="mi-last">M. Krizan</span>
          <br />
          <span id="location">Madison</span>, Wisconsin
          <br />
          T: +{" "}
          <span id="phone">
            1 608-622-0717
            <br />
          </span>
          E:{" "}
          <span id="email">
            <a href="mailto:smkrizan@gmail.com">SMKrizan@gmail.com</a>
          </span>
        </address>
      </div>
    </section>
  );
};

export default Contact;
