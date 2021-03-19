import React from "react";
import Emoji from "../Emoji";
import "./index.css";

const Footer = () => {
  const darkModeCheck = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  return (
    <footer>
      <div id="footer-layer">
        <p id="footer-text">
          <Emoji symbol="©" /> Copyright 2020 | Made with{" "}
          <Emoji label="heart" symbol="💗" /> &{" "}
          <Emoji symbol="☕" label="tea" /> by Sara Krizan
        </p>
        <p>{darkModeCheck ? <Emoji symbol='☾' /> : <Emoji symbol='✷' />} mode is enabled.</p>
      </div>
    </footer>
  );
};

export default Footer;
