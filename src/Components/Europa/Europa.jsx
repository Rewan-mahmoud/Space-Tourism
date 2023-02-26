import React from 'react'
import EuropaImg from "../../assets/destination/image-europa.png"
export default function Europa() {
  return (
    <div className="row">

<div className="col-md-6 img">
<img src={EuropaImg}  alt="" />
</div>
<div className="col-md-6 mt-5 text-white">
<h2 className="ff-serif uppercase fs-900 mt-4 ">    EUROPA</h2>
        <p>
        The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
        </p>
        <hr />
        <div className="d-flex  destination-meta">
          <div >
            <h3
              className="ff-sans-cond  letter-spacing-3 me-4 fs-200 uppercase text-muted"
            >
              Avg. distance
            </h3>
            <p className=" ff-serif uppercase fs-700">628 MIL. KM</p>
          </div>
          <div>
            <h3
              className=" ff-sans-cond letter-spacing-3 fs-200 uppercase text-muted"
            >
              Est. travel time
            </h3>
            <p className=" ff-serif uppercase fs-700 " >3 YEARS</p>
          </div>
        </div>
</div>

   
   
    </div>
  )
}
