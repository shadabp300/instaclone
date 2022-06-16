import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const Landing = () => {
  return (
    <div className="container">
      <img
        alt="RandomImage"
        src="https://blog.thomascook.in/wp-content/uploads/2018/04/Orange-crimson-e1523862678896.jpg"
      ></img>
      <div className="button">
        <h1>10X Team 04</h1>
        <span>
          <Link to="PostView"><button >Enter</button></Link>
        </span>
      </div>
    </div>
  );
};
export default Landing;
