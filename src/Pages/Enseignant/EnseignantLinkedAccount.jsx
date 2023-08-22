import React from 'react';
import Footer from '../../Components/Footer';
import NavbarTeacher from '../../Components/NavbarTeacher';

const EnseignantLinkedAccount = () => {
    return (
        <div>
            <NavbarTeacher/>
            <div className="page-content">
            <div className="container">
                <div className="row">

                    <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                        <div className="settings-widget dash-profile">
                            <div className="settings-menu p-0">
                                <div className="profile-bg">
                                    <h5>Beginner</h5>
                                    <img src="assets/img/instructor-profile-bg.jpg" alt/>
                                    <div className="profile-img">
                                        <a href="instructor-profile.html"><img src="assets/img/user/user15.jpg" alt/></a>
                                    </div>
                                </div>
                                <div className="profile-group">
                                    <div className="profile-name text-center">
                                        <h4><a href="instructor-profile.html">Jenny Wilson</a></h4>
                                        <p>Instructor</p>
                                    </div>
                                    <div className="go-dashboard text-center">
                                        <a href="add-course.html" className="btn btn-primary">Create New Course</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="settings-widget account-settings">
                            <div className="settings-menu ">
                                <h3 >DASHBOARD</h3>
                                <ul>
                                    <li className="nav-item ">
                                        <a href="instructor-dashboard.html" className="nav-link">
                                            <i className="feather-home"></i> My Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a href="instructor-course.html" className="nav-link">
                                            <i className="feather-book"></i> My Courses
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-reviews.html" className="nav-link">
                                            <i className="feather-star"></i> Reviews
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-earnings.html" className="nav-link">
                                            <i className="feather-pie-chart"></i> Earnings
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a href="instructor-orders.html" className="nav-link">
                                            <i className="feather-shopping-bag"></i> Orders
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a href="instructor-student-grid.html" className="nav-link">
                                            <i className="feather-users"></i> Students
                                        </a>
                                    </li>
                                    <li className="nav-item ">
                                        <a href="instructor-payouts.html" className="nav-link">
                                            <i className="feather-dollar-sign"></i> Payouts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-tickets.html" className="nav-link">
                                            <i className="feather-server"></i> Support Tickets
                                        </a>
                                    </li>
                                </ul>
                                <div className="instructor-title">
                                    <h3>ACCOUNT SETTINGS</h3>
                                </div>
                                <ul>
                                    <li className="nav-item ">
                                        <a href="instructor-edit-profile.html" className="nav-link ">
                                            <i className="feather-settings"></i> Edit Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-security.html" className="nav-link">
                                            <i className="feather-user"></i> Security
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-social-profiles.html" className="nav-link">
                                            <i className="feather-refresh-cw"></i> Social Profiles
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-notification.html" className="nav-link">
                                            <i className="feather-bell"></i> Notifications
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-profile-privacy.html" className="nav-link">
                                            <i className="feather-lock"></i> Profile Privacy
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="instructor-delete-profile.html" className="nav-link">
                                            <i className="feather-trash-2"></i> Delete Profile
                                        </a>
                                    </li>
                                    <li className="nav-item active">
                                        <a href="instructor-linked-account.html" className="nav-link">
                                            <i className="feather-user"></i> Linked Accounts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="index-2.html" className="nav-link">
                                            <i className="feather-power"></i> Sign Out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-xl-9 col-md-8" style={{textAlign:'left'}}>
                        <div className="settings-widget profile-details">
                            <div className="settings-menu p-0">
                                <div className="profile-heading">
                                    <h3>Linked Accounts</h3>
                                    <p>Delete or Close your account permanently.</p>
                                </div>
                                <div className="link-accounts personal-form">
                                    <div className="row">
                                        <div className="col-auto">
                                            <div className="world-img">
                                                <img src="assets/img/net-icon-02.png" className="img-fluid" alt="Logo"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-11">
                                            <div className="google-account">
                                                <div className="account-list">
                                                    <h4>Facebook</h4>
                                                    <p className="mb-0">Enable one-click login and receive more personalized
                                                        course recommendations.</p>
                                                </div>
                                                <div className="account-link">
                                                    <a href="javascript:void(0);" className="btn btn-primary">Remove your
                                                        facebook Account</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="world-img">
                                                <img src="assets/img/net-icon-01.png" className="img-fluid" alt="Logo"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-11">
                                            <div className="google-account">
                                                <div className="account-list">
                                                    <h4>Sign In using Google</h4>
                                                    <p className="mb-0">Enable one-click login and receive more personalized
                                                        course recommendations.</p>
                                                </div>
                                                <div className="google-link">
                                                    <a href="javascript:void(0);" className="btn btn-primary">Link my google
                                                        Account</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="world-img">
                                                <img src="assets/img/net-icon-03.png" className="img-fluid" alt="Logo"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-11">
                                            <div className="google-account">
                                                <div className="account-list">
                                                    <h4>Github</h4>
                                                    <p className="mb-0">Enable one-click login and receive more personalized
                                                        course recommendations.</p>
                                                </div>
                                                <div className="google-link">
                                                    <a href="javascript:void(0);" className="btn btn-primary">Link my google
                                                        Account</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <div className="world-img">
                                                <img src="assets/img/net-icon-04.png" className="img-fluid" alt="Logo"/>
                                            </div>
                                        </div>
                                        <div className="col-lg-11">
                                            <div className="google-account mb-0">
                                                <div className="account-list">
                                                    <h4>Twitter</h4>
                                                    <p className="mb-0">Enable one-click login and receive more personalized
                                                        course recommendations.</p>
                                                </div>
                                                <div className="google-link">
                                                    <a href="javascript:void(0);" className="btn btn-primary">Link my google
                                                        Account</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
};

export default EnseignantLinkedAccount;