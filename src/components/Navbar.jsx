import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          {" "}
          {props.title}{" "}
        </Link>{" "} */}
        <a className="navbar-brand" href="#">
          {" "}
          {props.title}{" "}
        </a>{" "}
        <button
          className="navbar-toggler"
          type="button"
          dataBsToggle="collapse"
          dataBsTarget="#navbarSupportedContent"
          ariaControls="navbarSupportedContent"
          ariaExpanded="false"
          ariaLabel="Toggle navigation">
          <span className="navbar-toggler-icon"> </span>{" "}
        </button>{" "}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" ariaCurrent="page" to="/">
                Home{" "}
              </Link>{" "} */}
              <a className="nav-link active" ariaCurrent="page" href="#">
                Home{" "}
              </a>{" "}
            </li>{" "}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                {" "}
                {props.aboutText}{" "}
              </Link>{" "}
            </li>{" "} */}
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2 mx-10"
                type="search"
                placeholder="Search"
                ariaLabel="Search"
              />{" "} */}
              <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
              <div class={`form-check form-switch text-${props.mode==='light' ?'dark' :'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
              </div>
              {/* <button className="btn btn-outline-success" type="submit">
                Search{" "}
              </button>{" "} */}
            {/* </form>{" "} */}
          </ul>{" "}
        </div>{" "}
      </div>{" "}
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};