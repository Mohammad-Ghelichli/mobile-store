import React, { Component } from 'react';

import styles from "styled-components"
import Navigation from './Navigation';
const DIV =styles.div`

width: 40px;
height: 40px;
position:fixed;
margin:5px 15px;
z-index:5;
justify-content: space-around;
flex-direction: column;
top:0px;
right:0px;
display:none;
cursor: pointer;
@media(max-width:670px){
    display:flex;
}
div{
    height: 5px;
    background-color:${props => props.open ? "white" : "rgb(80, 81, 82)"};
    border-radius:10px;
    transition:0.2s;
    transform-origin: 1px;
    &:nth-child(1){
        transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"} ;
    }
    &:nth-child(2){
        transform: ${props => props.open ? "translateX(-110%)" : "translateX(0)"} 
        ;
        opacity:${props => props.open ? "0":"1"}
    }
    &:nth-child(3){
        transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"} ;
    }
}

`
class Burguer extends Component {
    constructor(){
        super()
        this.state= {
            open:false
        }
    }
    Handler=()=>{
        this.setState({
            open:!this.state.open
            
        })
        
    }
    render() {
        return (
            <>
            <DIV open ={this.state.open} onClick={this.Handler}>
                <div></div>
                <div></div>
                <div></div>
            </DIV>
            <Navigation open={this.state.open}/>
            </>
        );
    }
}

export default Burguer;