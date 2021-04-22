import React from "react";
import "./index.css";

const Home = (props) => {
  return (
    <>
      <div id="Home">
        <h1 id='home' className="top2">
          <span className="reg">Hello! My name is <span className="bold">Sara.<br /></span>
          <span className="bold">Welcome</span> to my portfolio.<br /></span>
        </h1>
        <h1 id='home' className="bot2">
          <span className="reg">Please <span className="bold">have a look</span> around<br /> 
          and <span className="bold">keep in touch!</span></span>
        </h1>
      </div>
    </>
  );
};

export default Home;
