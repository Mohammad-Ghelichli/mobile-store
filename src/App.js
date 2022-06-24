import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "./component/Navigation";
import HomePage from "./HomePage";
import { Routes, Navigate } from "react-router-dom";
import AboutUs from "./component/AboutUs";
import Products from "./component/products";
import Search from "./component/Search";
import Burguer from "./component/Burguer";
import Footer from "./component/Footer";
import NotFound from "./component/NotFound";
import OurLocation from "./component/OurLocation";
import Details from "./component/Details";
import SignUp from "./form/SignUp"
import Login from "./form/Login"
import Landing from "./component/Landing";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Burguer /> */}
        
        {/* <Navigation /> */}
        <div>
          <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/SignUp" element={<SignUp/>}/>
            <Route path="/Products/*" element={<Products />} >
            <Route path=":id" element={<Details />} />
            </Route>
            <Route path="/Blogs" element={<Search />} />
            <Route path="/AboutUs/*" element={<AboutUs />}>
              <Route path="location" element={<OurLocation />} />
            </Route>
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/NotFound" element={<NotFound />} />
            
            <Route path="/*" element={<Navigate to="/NotFound" />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
