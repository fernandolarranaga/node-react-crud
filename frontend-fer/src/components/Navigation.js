import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Heraldistas</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="navbar-brand" to="/blazons">crea un blasón</Link>
        </li>
        <li className="nav-item">
        <Link className="navbar-brand" to="/notes">video</Link>        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
        )
    }
}
