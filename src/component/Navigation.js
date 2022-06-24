import React, { Component } from "react";
import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
import styles from "styled-components";

const UL = styles.ul`

  background-color:  rgb(80, 81, 82);
  display: flex;
  justify-content: space-right;
  position: fixed;
  z-index: 1;
  width: 100%;
  opacity: 0.8;


  li{
    font-size:19px;
    font-weight: bold;
    text-align: center;
    float: right;
    width: 200px;
    list-style: none;
    cursor: pointer;
    color: #fff;
    margin-top:16px ;
    margin-bottom: 15px;
    &:hover{
      color: #FFC533;
    }
    
    
  }
  @media (max-width:670px){
    transform:${(props) =>
      props.open ? "translateX(0%)" : "translateX(100%)"} ;
    justify-content: space-around;
    transition: 1s;
    flex-direction: column;
    width:300px;
    position: fixed;
    top: 0%;
    right: 0%;
    height:100%;
    
    
  }
  
`;
class Navigation extends Component {
  render() {
    const { open } = this.props;
    return (
      <div>
        <UL open={open}>
          <li>
            <Link className={style.link} to="/HomePage">
              HomePage
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/Products">
              Products
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/AboutUs">
              About US
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/Blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className={style.link} to="/Login">
              Account
            </Link>
          </li>
        </UL>
      </div>
    );
  }
}

export default Navigation;
