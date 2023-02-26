import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'


import "./home.css"
export default function Home() {
const navigate = useNavigate();
function navigateBtn(params) {
  
  navigate("/Destination/Moon")
}
  return (
    <div className="Home">


<div className="container ">
  <div className="row  justify-content-between Home-container">
    <div className="col-md-6">
    <div className='text'>
  <h1 className="text-light ff-sans-cond uppercase fs-700 letter-spacing-1">
    So, you want to travel to
    <span className="ff-serif uppercase fs-900 text-white d-block mt-3"
      >Space</span>
  </h1>
  <p className='fs-400 text-white'>
    Let’s face it; if you want to go to space, you might as well <br /> genuinely
    go to outer space and not hover kind of on the edge  of <br /> it. Well sit
    back, and relax because we’ll give you a truly out of this  <br /> world
    experience!
  </p>
</div>
    </div>
    <div className="col-md-6 ">

    <div className='button '>
  <p onClick={navigateBtn}  className="large-button uppercase bg-white text-dark ff-serif">
    Explore
  </p>
</div>
    </div>
  </div>


    </div>
    </div>
)}




