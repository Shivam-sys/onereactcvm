import logo from "../logo.svg";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div
      className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-sm sticky-top`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabIndex="-1">
                Hello {props.title}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label text-success"
              htmlFor="darkModeSwitch"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired };
Navbar.defaultProps = { title: "Guest" };
