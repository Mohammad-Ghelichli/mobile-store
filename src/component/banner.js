import React from "react";
import image1 from "../images/banner.jpg";
import style from "./banner.module.css";
function Banner() {
  return (
    <section className={style.container}>
      <img src={image1} className={style.banner} alt="banner" />
      <p className={style.right}> best  mobile store</p>
      <p className={style.left}> follow us </p>
    </section>
  );
}

export default Banner;
