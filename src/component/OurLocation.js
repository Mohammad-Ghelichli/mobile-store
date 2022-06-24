import React from "react";
import { useNavigate } from "react-router-dom";

const OurLocation = () => {
  const navigate = useNavigate();  
  const BackHandler = () => {
    
    navigate(-2)
  };

  return (
    <div>
      <h1> location</h1>
      <br />
      <br />
      <br />
      <br />
      <h2>tehran</h2>
      <button onClick={BackHandler}>click me to back</button>
    </div>
  );
};
export default OurLocation;
