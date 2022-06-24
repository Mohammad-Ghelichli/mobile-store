import Product from "./Product";
import style from "./products.module.css";
import React, { Component } from "react";
import Footer from "./Footer";
import Burguer from "./Burguer";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

const Products=()=> {
  

    return (
      <div>
        <div
          className={style.container}
        >
          <div className={style.parent}>
            <ScrollMenu>
              
               <div>eee</div>
               <div>eee</div>
               <div>eee</div>

              
            </ScrollMenu>
          </div>
        </div>

        {/* <Footer/> */}
      </div>
    );
  }


export default Products;
