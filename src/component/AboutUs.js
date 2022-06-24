import React, { Component } from "react";
import { Route ,Outlet} from "react-router-dom";
import { Link } from "react-router-dom";
import style from "./AboutUs.module.css"
import OurLocation from "./OurLocation";

class AboutUs extends Component {
  render() {
    return (
      <div className={style.container}>

        <h1>we will grow up</h1>
        <ul>
            <li><Link to="team" > our team</Link></li>
            <li><Link to="location" > location</Link></li>
            <li><Link to="phonenumber" > phone number</Link></li>

        </ul>
        <div>

          <Outlet/>
        
        </div>
      </div>
    );
  }
}

export default AboutUs;
