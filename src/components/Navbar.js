import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
<<<<<<< HEAD
        {/* <a className="navbar-brand" href="#">{title}</a> */}
        <Link className="navbar-brand" to="/">{title}</Link>
=======
        <a className="navbar-brand" href="#">{title}</a>
        {/* <Link className="navbar-brand" to="/">{title}</Link> */}
>>>>>>> 1b20f35efff6b0d4eae125171c4bb09189b328d3
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
<<<<<<< HEAD
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
=======
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
>>>>>>> 1b20f35efff6b0d4eae125171c4bb09189b328d3
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{aboutText}</Link>
            </li>
          </ul>
          
          {/* <div className='d-flex'>
          <div className='bg-primary rounded mx-2' onClick={()=>{toggleMode("primary")}} style={{height: "30px",width: "30px",cursor: "pointer"}}></div>
          <div className='bg-danger rounded mx-2' onClick={()=>{toggleMode("danger")}} style={{height: "30px",width: "30px",cursor: "pointer"}}></div>
          <div className='bg-success rounded mx-2' onClick={()=>{toggleMode("success")}} style={{height: "30px",width: "30px",cursor: "pointer"}}></div>
          <div className='bg-warning rounded mx-2' onClick={()=>{toggleMode("warning")}} style={{height: "30px",width: "30px",cursor: "pointer"}}></div>
          </div> */}

          {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
}

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About Text here"
}
