import React from 'react'
import { Link } from 'react-router-dom'
import image from "../images/1.png"
function Landing() {
  return (
    <div >
    
        <Link to="/HomePage" ><img src={image} alt="landing" width="900px" height="900px"/></Link>
    </div>
  )
}

export default Landing