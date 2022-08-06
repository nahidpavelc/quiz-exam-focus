import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import navLogo from '../../../Assets/img/logo.png';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-shadow" style={{background:'#FFFFFF', padding:'25px 0px', boxShadow:'revert-layer'}}>
        <div class="container-fluid container">
          <a class="navbar-brand" href="#">
            <img src={navLogo} alt="" width="260" height="69" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Exam">
                      {" "}
                      পরীক্ষা
                    </NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Result">
                      {" "}
                      ফলাফল
                    </NavLink>
                  </a>
                </li>
                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Profile">
                      {" "}
                      প্রোফাইল
                    </NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Aboutus">
                      {" "}
                      লগআউট
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;