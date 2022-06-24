import React, { Component } from "react";
import Banner from "./component/banner";
import Products from "./component/products";
import Search from "./component/Search";
import Logos from "./component/Logos";
import Burguer from "./component/Burguer";
import Footer from "./component/Footer";
class HomePage extends Component {
  render() {
    return (
      <div>
        <Burguer/>
        <Banner />
        <Products />
        <Search />
        <Logos />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
