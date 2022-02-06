import React from 'react'
import PropTypes from 'prop-types'



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><b>{props.about}</b></a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <b>Click Me</b>
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Bonjour Madame</a></li>
            <li><a className="dropdown-item" href="/">Bonjour Monsuier</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Merci</a></li>
          </ul>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.prototype = {
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
}

// default props (in this if we are not passing value in App.js then it will print the default value )

Navbar.defaultProps ={
    title:'Bonjour madame',
    about:'about from here'
};