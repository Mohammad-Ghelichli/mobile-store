import React, { Component } from "react";
import style from "./Logos.module.css";
import apple from "../images/apple.png";
import mi from "../images/mi.png";
import asus from "../images/asus.png";
// import huawi from "../images/huawi.jpg";

class Logos extends Component {
  render() {
    return (
      <div className={style.logos}>
        <h1>Company</h1>

        <article >
          <a href="www.google.com"><img src={apple} alt="logo" /></a>
          <img src={mi} alt="logo" />
          <img src={asus} alt="logo" />
          {/* <img src={huawi} alt="logo" /> */}
        </article>
      </div>
    );
  }
}

export default Logos;
