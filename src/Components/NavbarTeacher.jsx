import React from 'react';
import { Link } from 'react-router-dom';

const NavbarTeacher = () => {
    return (
        <div>
            <header className="header header-page">
                <div className="header-fixed">
                    <nav className="navbar navbar-expand-lg header-nav scroll-sticky">
                        <div className="container ">
                            <div className="navbar-header">
                                <a id="mobile_btn" href="javascript:void(0);">
                                    <span className="bar-icon">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </a>
                                <a href="index-2.html" className="navbar-brand logo">
                                    <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                                </a>
                            </div>
                            <div className="main-menu-wrapper">
                                <div className="menu-header">
                                    <a href="index-2.html" className="menu-logo">
                                        <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                                    </a>
                                    <a id="menu_close" className="menu-close" href="javascript:void(0);">
                                        <i className="fas fa-times"></i>
                                    </a>
                                </div>
                                <ul className="main-nav">
                                    <li className="has-submenu">
                                        <a href="/">Home </a>
                                    </li>
                                    <li className="has-submenu active">
                                        <a href>Instructor <i className="fas fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li className="active"><a href="EnseignantProfile">Dashboard</a></li>
                                            <li >
                                                <a href="EnseignantGrid">Instructor</a>

                                            </li>

                                            <li><a href="EnseignantCourse">My Course</a></li>
                                            <li><a href="EnseignantReviews">Reviews</a></li>
                                            <li><a href="PayedCourse">Payouts</a></li>
                                            <li><a href="EnseignantModifyProfile">Modify Profile</a></li>
                                            <li><a href="EnseignantSecurity">Security</a></li>
                                            <li><a href="EnseignantSocialProfile">Social Profiles</a></li>
                                            <li><a href="EnseignantLinkedAccount">Linked Accounts</a></li>
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <a href="#">Message</a>
                                       
                                    </li>
                                    <li className="has-submenu">
                                        <a href>Pages <i className="fas fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><a href="notifications.html">Notification</a></li>
                                            <li><a href="pricing-plan.html">Pricing Plan</a></li>
                                            <li><a href="wishlist.html">Wishlist</a></li>
                                            <li className="has-submenu">
                                                <a href="course-list.html">Course</a>
                                                <ul className="submenu">
                                                    <li><a href="add-course.html">Add Course</a></li>
                                                    <li><a href="course-list.html">Course List</a></li>
                                                    <li><a href="course-grid.html">Course Grid</a></li>
                                                    <li><a href="course-details.html">Course Details</a></li>
                                                </ul>
                                            </li>
                                           
                                            <li><a href="faq.html">FAQ</a></li>
                                            <li><a href="support.html">Support</a></li>
                                            <li><a href="job-category.html">Category</a></li>
                                            
                                            
                                        </ul>
                                    </li>
                                    <li className="has-submenu">
                                        <a href>Blog <i className="fas fa-chevron-down"></i></a>
                                        <ul className="submenu">
                                            <li><Link to="/Blog">Blog Grid</Link></li>
                                            <li><a href="blog-grid.html">Blog Grid</a></li>
                                            
                                        </ul>
                                    </li>
                                    <li className="login-link">
                                        <a href="login.html">Login / Signup</a>
                                    </li>
                                </ul>
                            </div>
                            <ul className="nav header-navbar-rht">
                                <li className="nav-item">
                                    <a href="instructor-chat.html"><img src="assets/img/icon/messages.svg" alt="img" /></a>
                                </li>
                                <li className="nav-item cart-nav">
                                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <img src="assets/img/icon/cart.svg" alt="img" />
                                    </a>
                                    <div className="wishes-list dropdown-menu dropdown-menu-right">
                                        <div className="wish-header">
                                            <a href="#">View Cart</a>
                                            <a href="javascript:void(0)" className="float-end">Checkout</a>
                                        </div>
                                        <div className="wish-content">
                                            <ul>
                                                <li>
                                                    <div className="media">
                                                        <div className="d-flex media-wide">
                                                            <div className="avatar">
                                                                <a href="course-details.html">
                                                                    <img alt src="assets/img/course/course-04.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6><a href="course-details.html">Learn Angular...</a></h6>
                                                                <p>By Dave Franco</p>
                                                                <h5>$200 <span>$99.00</span></h5>
                                                            </div>
                                                        </div>
                                                        <div className="remove-btn">
                                                            <a href="#" className="btn">Remove</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="d-flex media-wide">
                                                            <div className="avatar">
                                                                <a href="course-details.html">
                                                                    <img alt src="assets/img/course/course-14.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6><a href="course-details.html">Build Responsive
                                                                    Real...</a></h6>
                                                                <p>Jenis R.</p>
                                                                <h5>$200 <span>$99.00</span></h5>
                                                            </div>
                                                        </div>
                                                        <div className="remove-btn">
                                                            <a href="#" className="btn">Remove</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="d-flex media-wide">
                                                            <div className="avatar">
                                                                <a href="course-details.html">
                                                                    <img alt src="assets/img/course/course-15.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6><a href="course-details.html">C# Developers Double
                                                                    ...</a></h6>
                                                                <p>Jesse Stevens</p>
                                                                <h5>$200 <span>$99.00</span></h5>
                                                            </div>
                                                        </div>
                                                        <div className="remove-btn">
                                                            <a href="#" className="btn">Remove</a>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="total-item">
                                                <h6>Subtotal : $ 600</h6>
                                                <h5>Total : $ 600</h5>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item wish-nav">
                                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <img src="assets/img/icon/wish.svg" alt="img" />
                                    </a>
                                    <div className="wishes-list dropdown-menu dropdown-menu-right">
                                        <div className="wish-content">
                                            <ul>
                                                <li>
                                                    <div className="media">
                                                        <div className="d-flex media-wide">
                                                            <div className="avatar">
                                                                <a href="course-details.html">
                                                                    <img alt src="assets/img/course/course-04.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6><a href="course-details.html">Learn Angular...</a></h6>
                                                                <p>By Dave Franco</p>
                                                                <h5>$200 <span>$99.00</span></h5>
                                                                <div className="remove-btn">
                                                                    <a href="#" className="btn">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="d-flex media-wide">
                                                            <div className="avatar">
                                                                <a href="course-details.html">
                                                                    <img alt src="assets/img/course/course-14.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6><a href="course-details.html">Build Responsive
                                                                    Real...</a></h6>
                                                                <p>Jenis R.</p>
                                                                <h5>$200 <span>$99.00</span></h5>
                                                                <div className="remove-btn">
                                                                    <a href="#" className="btn">Add to cart</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="media">
                                                        <div className="d-flex media-wide">
                                                            <div className="avatar">
                                                                <a href="course-details.html">
                                                                    <img alt src="assets/img/course/course-15.jpg" />
                                                                </a>
                                                            </div>
                                                            <div className="media-body">
                                                                <h6><a href="course-details.html">C# Developers Double
                                                                    ...</a></h6>
                                                                <p>Jesse Stevens</p>
                                                                <h5>$200 <span>$99.00</span></h5>
                                                                <div className="remove-btn">
                                                                    <a href="#" className="btn">Remove</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item noti-nav">
                                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <img src="assets/img/icon/notification.svg" alt="img" />
                                    </a>
                                    <div className="notifications dropdown-menu dropdown-menu-right">
                                        <div className="topnav-dropdown-header">
                                            <span className="notification-title">Notifications
                                                <select>
                                                    <option>All</option>
                                                    <option>Unread</option>
                                                </select>
                                            </span>
                                            <a href="javascript:void(0)" className="clear-noti">Mark all as read <i
                                                className="fa-solid fa-circle-check"></i></a>
                                        </div>
                                        <div className="noti-content">
                                            <ul className="notification-list">
                                                <li className="notification-message">
                                                    <div className="media d-flex">
                                                        <div>
                                                            <a href="notifications.html" className="avatar">
                                                                <img className="avatar-img" alt src="assets/img/user/user1.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6><a href="notifications.html">Lex Murphy requested
                                                                <span>access to</span> UNIX directory tree hierarchy
                                                            </a></h6>
                                                            <button className="btn btn-accept">Accept</button>
                                                            <button className="btn btn-reject">Reject</button>
                                                            <p>Today at 9:42 AM</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="notification-message">
                                                    <div className="media d-flex">
                                                        <div>
                                                            <a href="notifications.html" className="avatar">
                                                                <img className="avatar-img" alt src="assets/img/user/user2.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6><a href="notifications.html">Ray Arnold left 6
                                                                <span>comments on</span> Isla Nublar SOC2 compliance
                                                                report</a></h6>
                                                            <p>Yesterday at 11:42 PM</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="notification-message">
                                                    <div className="media d-flex">
                                                        <div>
                                                            <a href="notifications.html" className="avatar">
                                                                <img className="avatar-img" alt src="assets/img/user/user3.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6><a href="notifications.html">Dennis Nedry <span>commented
                                                                on</span> Isla Nublar SOC2 compliance report</a>
                                                            </h6>
                                                            <p className="noti-details">“Oh, I finished de-bugging the phones,
                                                                but the system's compiling for eighteen minutes, or twenty.
                                                                So, some minor systems may go on and off for a while.”</p>
                                                            <p>Yesterday at 5:42 PM</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="notification-message">
                                                    <div className="media d-flex">
                                                        <div>
                                                            <a href="notifications.html" className="avatar">
                                                                <img className="avatar-img" alt src="assets/img/user/user1.jpg" />
                                                            </a>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6><a href="notifications.html">John Hammond
                                                                <span>created</span> Isla Nublar SOC2 compliance report
                                                            </a></h6>
                                                            <p>Last Wednesday at 11:15 AM</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item user-nav">
                                    <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                                        <span className="user-img">
                                            <img src="assets/img/instructor/profile-avatar.jpg" alt />
                                            <span className="status online"></span>
                                        </span>
                                    </a>
                                    <div className="users dropdown-menu dropdown-menu-right" data-popper-placement="bottom-end">
                                        <div className="user-header">
                                            <div className="avatar avatar-sm">
                                                <img src="assets/img/instructor/profile-avatar.jpg" alt="User Image"
                                                    className="avatar-img rounded-circle" />
                                            </div>
                                            <div className="user-text">
                                                <h6>Jenny Wilson</h6>
                                                <p className="text-muted mb-0">Instructor</p>
                                            </div>
                                        </div>
                                        <a className="dropdown-item" href="instructor-dashboard.html"><i
                                            className="feather-home me-1"></i> Dashboard</a>
                                        <a className="dropdown-item" href="instructor-edit-profile.html"><i
                                            className="feather-star me-1"></i> Edit Profile</a>
                                        <div className="dropdown-item night-mode">
                                            <span><i className="feather-moon me-1"></i> Night Mode </span>
                                            <div className="form-check form-switch check-on m-0">
                                                <input className="form-check-input" type="checkbox" id="night-mode" />
                                            </div>
                                        </div>
                                        <a className="dropdown-item" href="index-2.html"><i className="feather-log-out me-1"></i>
                                            Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default NavbarTeacher;