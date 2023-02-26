import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import "./navbar.css";

export default function Navbar() {
  const navItems = [
    { title: "00HOME", path: "/Home" },
    { title: "01DESTINATION", path: "Destination/Moon" },
    { title: "02CREW", path: "Crew" },
    { title: "03TECHNOLOGY", path: "Technology" },
  ];

  return (
    <div className="position-absolute ms-lg-5  container pt-3 d-flex justify-content-between ">
      <div className="mt-3 logo">
        <img src={logo} alt="" />
      </div>
      <nav className="navbar navbar-expand-lg p-4  ">
      <button
      
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation">
                 <i class="text-white fa-solid fa-bars"></i>
             
            </button>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {navItems.map((item, index) => (
                <div key={"navBar" + index}>
                  <li className="nav-item   ">
                    <NavLink
                      activeClassName="active"
                      className="nav-link "
                      to={item.path}
                      aria-current="page"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
