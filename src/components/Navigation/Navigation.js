import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container d-flex align-items-center">
        <Link to="/" className="navbar-brand py-0">
          Hotel
        </Link>
        <ul className="navbar-nav mr-auto d-flex flex-row align-items-end pt-1">
          <li className="nav-item">
            <Link to="/add" className="nav-link py-0 px-2">
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link py-0 px-2">
              Guests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
