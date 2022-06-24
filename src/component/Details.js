import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Product from "./Product";

function Details(props) {
  const Params = useParams();
  console.log(Params);
  return (
    <div>
      <Product  key= {Params.id} />
      <Outlet/>
     
    </div>
  );
}

export default Details;
