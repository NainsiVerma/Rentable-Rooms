import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#97D8DD'}}>
      <div className="container">
        <img height={60} src="/logo.png" alt="" />&nbsp;&nbsp;
        <NavLink className="navbar-brand fw-bold" to="/">
          Rentable Rooms
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link " to="/browse">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup page
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse">
                Browse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/addroom">
                Add Rent Space
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
