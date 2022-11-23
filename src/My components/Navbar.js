import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between ">
        <a className="navbar-brand  font-weight-bold text-success" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>         

        <div className="float-right d-flex">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button>
          </div>
      </nav></div>

  )
}
Navbar.defaultProps = {
  title: "ypiyjdnfvnf",
  searchBar: true
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  searchBar: PropTypes.bool.isRequired,
} 