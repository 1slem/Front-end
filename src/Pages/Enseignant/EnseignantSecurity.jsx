import React from 'react';
import Footer from '../../Components/Footer';
import NavbarTeacher from '../../Components/NavbarTeacher';

const EnseignantSecurity = () => {
    return (
        <div>
            <NavbarTeacher />
            <div class="page-content">
                <div class="container">
                    <div class="row">

                        <div class="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <div class="settings-widget dash-profile">
                                <div class="settings-menu p-0">
                                    <div class="profile-bg">
                                        <h5>Beginner</h5>
                                        <img src="assets/img/instructor-profile-bg.jpg" alt/>
                                            <div class="profile-img">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user15.jpg" alt/></a>
                                            </div>
                                    </div>
                                    <div class="profile-group">
                                        <div class="profile-name text-center">
                                            <h4><a href="instructor-profile.html">Jenny Wilson</a></h4>
                                            <p>Instructor</p>
                                        </div>
                                        <div class="go-dashboard text-center">
                                            <a href="add-course.html" class="btn btn-primary">Create New Course</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="settings-widget account-settings">
                                <div class="settings-menu">
                                    <h3>DASHBOARD</h3>
                                    <ul>
                                        <li class="nav-item ">
                                            <a href="instructor-dashboard.html" class="nav-link">
                                                <i class="feather-home"></i> My Dashboard
                                            </a>
                                        </li>
                                        <li class="nav-item ">
                                            <a href="instructor-course.html" class="nav-link">
                                                <i class="feather-book"></i> My Courses
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-reviews.html" class="nav-link">
                                                <i class="feather-star"></i> Reviews
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-earnings.html" class="nav-link">
                                                <i class="feather-pie-chart"></i> Earnings
                                            </a>
                                        </li>
                                        <li class="nav-item ">
                                            <a href="instructor-orders.html" class="nav-link">
                                                <i class="feather-shopping-bag"></i> Orders
                                            </a>
                                        </li>
                                        <li class="nav-item ">
                                            <a href="instructor-student-grid.html" class="nav-link">
                                                <i class="feather-users"></i> Students
                                            </a>
                                        </li>
                                        <li class="nav-item ">
                                            <a href="instructor-payouts.html" class="nav-link">
                                                <i class="feather-dollar-sign"></i> Payouts
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-tickets.html" class="nav-link">
                                                <i class="feather-server"></i> Support Tickets
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="instructor-title">
                                        <h3>ACCOUNT SETTINGS</h3>
                                    </div>
                                    <ul>
                                        <li class="nav-item">
                                            <a href="instructor-edit-profile.html" class="nav-link ">
                                                <i class="feather-settings"></i> Edit Profile
                                            </a>
                                        </li>
                                        <li class="nav-item active">
                                            <a href="instructor-security.html" class="nav-link">
                                                <i class="feather-user"></i> Security
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-social-profiles.html" class="nav-link">
                                                <i class="feather-refresh-cw"></i> Social Profiles
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-notification.html" class="nav-link">
                                                <i class="feather-bell"></i> Notifications
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-profile-privacy.html" class="nav-link">
                                                <i class="feather-lock"></i> Profile Privacy
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-delete-profile.html" class="nav-link">
                                                <i class="feather-trash-2"></i> Delete Profile
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="instructor-linked-account.html" class="nav-link">
                                                <i class="feather-user"></i> Linked Accounts
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a href="index-2.html" class="nav-link">
                                                <i class="feather-power"></i> Sign Out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-9 col-md-8" style={{textAlign:'left'}}>
                            <div class="settings-widget profile-details">
                                <div class="settings-menu p-0">
                                    <div class="profile-heading">
                                        <h3>Security</h3>
                                        <p>Edit your account settings and change your password here.</p>
                                    </div>
                                    <div class="checkout-form personal-address border-line">
                                        <div class="personal-info-head">
                                            <h4>Email Address</h4>
                                            <p>Your current email address is <span><a
                                                href="https://dreamslms.dreamguystech.com/cdn-cgi/l/email-protection"
                                                class="__cf_email__"
                                                data-cfemail="c5a8a4bdb2a0a9a985a0bda4a8b5a9a0eba6aaa8">[email&#160;protected]</a></span>
                                            </p>
                                        </div>
                                        <form action="#">
                                            <div class="new-address">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <div class="form-group">
                                                            <label class="form-control-label">New email address</label>
                                                            <input type="text" class="form-control"
                                                                placeholder="Enter your New email address"/>
                                                        </div>
                                                    </div>
                                                    <div class="profile-share d-flex ">
                                                        <button type="button" class="btn btn-success">Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="checkout-form personal-address">
                                        <div class="personal-info-head">
                                            <h4>Change Password</h4>
                                            <p>We will email you a confirmation when changing your password, so please
                                                expect that email after submitting.</p>
                                        </div>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <form action="#">
                                                    <div class="form-group">
                                                        <label class="form-control-label">Current password</label>
                                                        <input type="password" class="form-control"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-control-label">Password</label>
                                                        <div class="pass-group" id="passwordInput">
                                                            <input type="password" class="form-control pass-input"
                                                                placeholder="Enter your password"/>
                                                        </div>
                                                        <div class="password-strength" id="passwordStrength">
                                                            <span id="poor"></span>
                                                            <span id="weak"></span>
                                                            <span id="strong"></span>
                                                            <span id="heavy"></span>
                                                        </div>
                                                        <div id="passwordInfo"></div>
                                                    </div>
                                                    <div class="form-group">
                                                        <label class="form-control-label">Confirm New Password</label>
                                                        <input type="password" class="form-control"/>
                                                    </div>
                                                    <div class="update-profile save-password">
                                                        <button type="button" class="btn btn-primary">Save Password</button>
                                                    </div>
                                                </form>
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

export default EnseignantSecurity;