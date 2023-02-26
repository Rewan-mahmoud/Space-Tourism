import React from 'react'
import MoonImg from "../../assets/destination/image-moon.png"
export default function Moon() {
  return (
<div className="row">

<div className="col-md-6  img">
<img src={MoonImg}   alt="" />
</div>
<div className="col-md-6 mt-lg-5 moon   text-white">
<h2 className="ff-serif uppercase fs-900 mt-4 ">Moon</h2>
        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <hr />
        <div className="d-flex  destination-meta">
          <div >
            <h3
              className="ff-sans-cond  letter-spacing-3 me-4 fs-200 uppercase text-muted"
            >
              Avg. distance
            </h3>
            <p className=" ff-serif uppercase fs-700">384,400 km</p>
          </div>
          <div>
            <h3
              className=" ff-sans-cond letter-spacing-3 fs-200 uppercase text-muted"
            >
              Est. travel time
            </h3>
            <p className=" ff-serif uppercase fs-700 " >3 days</p>
          </div>
        </div>
</div>

   
   
    </div>
 )
}
