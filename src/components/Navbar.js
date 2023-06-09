import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
// navbar-dark  bg-dark     bg-body-tertiary 
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/*<Link className="navbar-brand" to="/">{props.title}</Link>*/}
        <a className="navbar-brand" href="/">{props.title}</a>
       {/*  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>  */}

        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
        {/*  <div className="collapse navbar-collapse" id="navbar SupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
           
          </ul>
        </div> */}
        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change theme</label>
        </div>
      </div >
    </nav >
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};