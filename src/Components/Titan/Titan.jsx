import React from 'react'
import TitanImg from "../../assets/destination/image-titan.png"
export default function Titan() {
  return (
    <div className="row">

    <div className="col-md-6 img ">
    <img src={TitanImg}  alt="" />
    </div>
    <div className="col-md-6 mt-5 text-white">
    <h2 className="ff-serif uppercase fs-900 mt-4 "> TITAN</h2>
            <p>
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
            </p>
            <hr />
            <div className="d-flex  destination-meta">
              <div >
                <h3
                  className="ff-sans-cond  letter-spacing-3 me-4 fs-200 uppercase text-muted"
                >
                  Avg. distance
                </h3>
                <p className=" ff-serif uppercase fs-700">1.6 BIL. KM</p>
              </div>
              <div>
                <h3
                  className=" ff-sans-cond letter-spacing-3 fs-200 uppercase text-muted"
                >
                  Est. travel time
                </h3>
                <p className=" ff-serif uppercase fs-700 " >7 YEARS</p>
              </div>
            </div>
    </div>
    
       
       
        </div>
  )
}
