import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Medical & Health Care Services</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Service</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Pages</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            <li className="nav-item"><a className="nav-link btn btn-primary" href="#">Appointment</a></li>
          </ul>
        </div>
      </nav>

      <div className="text-center mt-5">
        <h1>Your health is our top priority</h1>
        <p>Schedule an appointment with us today</p>
        <a href="#" className="btn btn-primary">Appointment</a>
        <a href="#" className="btn btn-secondary">Contact Us</a>
      </div>

      <div className="row mt-5">
        <div className="col-md-6">
          <h2>82%</h2>
          <p>Successfully Diagnosis</p>
        </div>
        <div className="col-md-6">
          <h2>16M</h2>
          <p>Patient Recoverer</p>
        </div>
      </div>

      <div className="mt-5">
        <blockquote className="blockquote">
          <p>“It is a long-established fact that a record will be distanced by the readable content”</p>
          <footer className="blockquote-footer">Dr. Natali Jackson</footer>
        </blockquote>
      </div>
    </div>
  )
}

export default navbar
