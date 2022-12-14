import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav   className="navbar navbar-expand-lg navbar-light bg-white mb-4 ">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
        <img src="https://th.bing.com/th/id/OIP.blEyqQgSrRq_NxETWlz0BgHaJv?pid=ImgDet&rs=1" alt="" width="50" height="50"></img>
          Rick & Morty <span className="text-success"> ElezDev </span>
        </Link>

        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }
        `}</style>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/location"
            >
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
