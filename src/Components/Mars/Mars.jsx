import React from 'react'
import MarsImg from "../../assets/destination/image-mars.png"
export default function Mars() {
  return (
    <div className="row">

    <div className="col-md-6 img">
    <img src={MarsImg}  alt="" />
    </div>
    <div className="col-md-6 mt-5 text-white">
    <h2 className="ff-serif uppercase fs-900 mt-4 ">Mars</h2>
            <p>
       Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
            </p>
            <hr />
            <div className="d-flex  destination-meta">
              <div >
                <h3
                  className="ff-sans-cond  letter-spacing-3 me-4 fs-200 uppercase text-muted"
                >
                  Avg. distance
                </h3>
                <p className=" ff-serif uppercase fs-700">225 MIL. KM</p>
              </div>
              <div>
                <h3
                  className=" ff-sans-cond letter-spacing-3 fs-200  text-muted uppercase text-light"
                >
                  Est. travel time
                </h3>
                <p className=" ff-serif uppercase fs-700 " >9 MONTHS</p>
              </div>
            </div>
    </div>
    
       
       
        </div>
  )
}
