import React from "react";
import Emoji from "../Emoji";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <div id="footer-layer">
        <p id="footer-text">
          <Emoji symbol="©" /> Copyright 2020 | Made with{" "}
          <Emoji label="heart" symbol="💗" /> &{" "}
          <Emoji symbol="☕" label="tea" /> by Sara Krizan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
