import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="main-wrapper ">
      <header className="header ">

        <div className="header-fixed bg-white p-2">
          <nav className="navbar navbar-expand-lg header-nav scroll-sticky mt-0">
            <div className="container ">
              <div className="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </a>
                <Link to="index-2.html" className="navbar-brand logo">
                  <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/Home" className="menu-logo">
                    <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                  </Link>
                  <a id="menu_close" className="menu-close" href="javascript:void(0);">
                    <i className="fas fa-times"></i>
                  </a>
                </div>
                <ul className="main-nav" >
                  <li className="has-submenu active">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="/EnseignantGrid" >Teachers</Link>
                  </li>
                 
                  <li className="has-submenu">
                    <a href>Pages <i className="fas fa-chevron-down"></i></a>
                    <ul className="submenu">


                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="support.html">Support</a></li>
                      <li><a href="job-category.html">Category</a></li>

                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                      <li><a href="forgot-password.html">Forgot Password</a></li>
                    </ul>
                  </li>
                  <li className="has-submenu" >


                    <Link to="/Blog">Blog Grid</Link>

                  </li>
                  <li className="has-submenu">
                    <Link to="/ContactUs">Support </Link>
                  
                  </li>
                  <li className="login-link">
                    <a href="login.html">Login / Signup</a>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht">
                <li className="nav-item">
                  <Link to="/Login" className="nav-link header-sign">Signin</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Signup" className="nav-link header-login">Signup</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
