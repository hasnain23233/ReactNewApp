import React, { Component } from 'react'
import {Link} from "react-router-dom"

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">NEW-APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to ="/">Home</Link>
                    </li>
                    <li className="nav-item"><Link  to="/business" className="nav-link" >business</Link></li>
                    <li className="nav-item"><Link to="/entertainment" className="nav-link" >entertainment</Link></li>
                    <li className="nav-item"><Link  to="/health" className="nav-link" >health</Link></li>
                    <li className="nav-item"><Link  to="/science" className="nav-link" >science</Link></li>
                    <li className="nav-item"><Link to="/sports" className="nav-link" >sports</Link></li>
                    <li className="nav-item"><Link  to="/technology" className="nav-link" >technology</Link></li>
                </ul>
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
