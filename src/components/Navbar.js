import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{ backgroundColor: 'black', textShadow: '1px 1px 0.1px white' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
            {/*<li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">{props.aboutText}</Link>
            </li> */}
          </ul>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={() => { props.toggleMode('primary') }} style={{ border: '1px solid grey', height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-danger rounded mx-2" onClick={() => { props.toggleMode('danger') }} style={{ border: '1px solid grey', height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-success rounded mx-2" onClick={() => { props.toggleMode('success') }} style={{ border: '1px solid grey', height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-warning rounded mx-2" onClick={() => { props.toggleMode('warning') }} style={{ border: '1px solid grey', height: '30px', width: '30px', cursor: 'pointer' }}></div>
            <div className="bg-light rounded mx-2" onClick={() => { props.toggleMode('light') }} style={{ border: '1px solid grey', height: '30px', width: '30px', cursor: 'pointer' }}></div>
            {/* <div className="bg-dark rounded mx-2" onClick={() => { props.toggleMode('dark') }} style={{ border: '1px solid grey', height: '30px', width: '30px', cursor: 'pointer' }}></div> */}
          </div>

          {/*<div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">toggle mode</label>
          </div>*/}
        </div>
      </div>
    </nav>
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