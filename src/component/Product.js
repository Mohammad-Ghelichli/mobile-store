import React, { Component } from "react";
import style from "./Product.module.css";
import add from "../images/add-item-in-cart.svg";
import delet from "../images/delete-cart-item.svg";
import { Link } from "react-router-dom";
class Product extends Component {
    constructor(){
        super()
        this.state= {
            counter:0
            
        }}
    AddHandler = ()=>{
         
        this.setState({
            counter : this.state.counter + 1
        })
    }
    DeletHandler = ()=>{
        if(this.state.counter > 0){

            this.setState({
            
                counter : this.state.counter -1
            })
        }
    }
   
  render() {
    const { image,id, price,title } = this.props.phone;
    const {counter}=this.state
    return (
      <>
        <article className={style.container}>
          <img src={image} alt="phone" />
          <h3><Link to={`/Products/${id}`}>{title}</Link></h3>
          <span> Price : {price}</span>
          <div className={style.buy}>
            <img src={add} onClick={this.AddHandler} />
            <span>{counter}</span>
            <img src={delet}  className={this.state.counter ? "":style.deactive} onClick={this.DeletHandler} />
          </div>
        </article>
      </>
    );
  }
}

export default Product;
