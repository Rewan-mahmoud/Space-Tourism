import React from 'react'
import { Outlet  , NavLink} from 'react-router-dom'
import "./destination.css"

export default function destination() {
  const destinationItems = [
    { title: "Moon", path: "Moon" },
    { title: "MARS", path: "Mars" },
    { title: "EUROPA", path: "Europa" },
    { title: "TITAN", path: "Titan" }]

  return (
  
    <div className='destination'>
    <div className="container ">
      <div className="row ">
        <div className="col-md-6 ">
        <h1 className="numbered-title destination-Title  fs-700  ">
        <span >01</span> Pick your destination
      </h1>
        </div>

        <div className="col-md-6 ">
        <div className="nav destination-Nav  ">
          {destinationItems.map((item , index)=>  
        
  <NavLink activeClassName="active" className="nav-link  uppercase me-3 ff-sans-cond text-light letter-spacing-2" key={index}  to={item.path}>{item.title}</NavLink>)}

</div>
        </div>
        <Outlet/>
      </div>
     
 


        </div>
      </div>
   








 

  )
}
