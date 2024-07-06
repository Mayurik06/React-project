// Navabar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navabar({ title, aboutText, mode, toggleMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{aboutText}</Link>
              </li>
            </ul>
            <div className="form-check form-switch mx-4">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={toggleMode} />
              <label className={`form-check-label text-${mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckChecked">Enable Dark mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navabar.defaultProps = {
  title: 'Set Title here',
  aboutText: 'Write About'
};

export default Navabar;
