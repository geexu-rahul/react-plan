import React from 'react'
import Search from './Search'
import PropTypes from 'prop-types'
import SwitchMode from './SwitchMode'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About </Link>          
        </li>
        
        
      </ul>
      <Search />
      <SwitchMode mode={ props.mode} toggleMode={ props.toggleMode} />
    </div>
  </div>
</nav>
  )
}
// props types 
Navbar.propTypes = {
    title : PropTypes.string,
}

// detafult Props 
Navbar.defaultProps = {
    title :'Text 12'
}