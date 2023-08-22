import React from 'react';
import Footer from '../../Components/Footer';
import NavbarTeacher from '../../Components/NavbarTeacher';

const EnseignantReviews = () => {
    return (
        <div>
            <NavbarTeacher />
            <div className="page-content">
                <div className="container">
                    <div className="row">

                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <div className="settings-widget dash-profile">
                                <div className="settings-menu p-0">
                                    <div className="profile-bg">
                                        <h5>Beginner</h5>
                                        <img src="assets/img/instructor-profile-bg.jpg" alt />
                                        <div className="profile-img">
                                            <a href="instructor-profile.html"><img src="assets/img/user/user15.jpg" alt /></a>
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
                                <div className="settings-menu">
                                    <h3>DASHBOARD</h3>
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
                                        <li className="nav-item active">
                                            <a href="instructor-reviews.html" className="nav-link">
                                                <i className="feather-star"></i> Reviews
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="instructor-earnings.html" className="nav-link">
                                                <i className="feather-pie-chart"></i> Earnings
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="instructor-orders.html" className="nav-link">
                                                <i className="feather-shopping-bag"></i> Orders
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="instructor-student-grid.html" className="nav-link">
                                                <i className="feather-users"></i> Students
                                            </a>
                                        </li>
                                        <li className="nav-item">
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
                                        <li className="nav-item">
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
                                        <li className="nav-item">
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


                        <div className="col-xl-9 col-lg-8 col-md-12"style={{textAlign:'left'}}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="settings-widget">
                                        <div className="settings-inner-blk p-0">
                                            <div className="sell-course-head comman-space">
                                                <h3>Reviews</h3>
                                                <p>You have full control to manage your own account setting.</p>
                                            </div>
                                            <div className="comman-space pb-0">
                                                <div className="instruct-search-blk mb-0">
                                                    <div className="show-filter all-select-blk">
                                                        <form action="#">
                                                            <div className="row gx-2 align-items-center">
                                                                <div className="col-md-6 col-lg-3 col-item">
                                                                    <div className="form-group select-form mb-1">
                                                                        <select className="form-select select" name="sellist1">
                                                                            <option>All</option>
                                                                            <option>review 1</option>
                                                                            <option>review 2</option>
                                                                            <option>review 3</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-lg-3 col-item">
                                                                    <div className="form-group select-form mb-1">
                                                                        <select className="form-select select" name="sellist1">
                                                                            <option>Rating</option>
                                                                            <option>5</option>
                                                                            <option>4</option>
                                                                            <option>3</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6 col-lg-3 col-item">
                                                                    <div className="form-group select-form mb-1">
                                                                        <select className="form-select select" name="sellist1">
                                                                            <option>Sort</option>
                                                                            <option>Sort 1</option>
                                                                            <option>Sort 2</option>
                                                                            <option>Sort 3</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comman-space bdr-bottom-line">
                                                <div className="instruct-review-blk ">
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <a href="instructor-profile.html"><img
                                                                        src="assets/img/user/user1.jpg" alt="img"
                                                                        className="img-fluid" /></a>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5><a href="instructor-profile.html">Nicole Brown</a>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">“ This is the second Photoshop course I have
                                                            completed with Cristian. Worth every penny and recommend it
                                                            highly. To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “</p>
                                                        <a href="javascript:;" className="btn btn-reply"><i
                                                            className="feather-corner-up-left"></i> Respond</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comman-space bdr-bottom-line">
                                                <div className="instruct-review-blk ">
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <a href="instructor-profile.html"><img
                                                                        src="assets/img/user/user2.jpg" alt="img"
                                                                        className="img-fluid" /></a>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5><a href="instructor-profile.html">Jesse Stevens</a>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">“ This is the second Photoshop course I have
                                                            completed with Cristian. Worth every penny and recommend it
                                                            highly. To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “</p>
                                                        <a href="javascript:;" className="btn btn-reply"><i
                                                            className="feather-corner-up-left"></i> Respond</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comman-space bdr-bottom-line">
                                                <div className="instruct-review-blk ">
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <a href="instructor-profile.html"><img
                                                                        src="assets/img/user/user3.jpg" alt="img"
                                                                        className="img-fluid" /></a>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5><a href="instructor-profile.html">John Smith</a>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">“ This is the second Photoshop course I have
                                                            completed with Cristian. Worth every penny and recommend it
                                                            highly. To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “</p>
                                                        <a href="javascript:;" className="btn btn-reply"><i
                                                            className="feather-corner-up-left"></i> Respond</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comman-space">
                                                <div className="instruct-review-blk ">
                                                    <div className="review-item">
                                                        <div className="instructor-wrap border-0 m-0">
                                                            <div className="about-instructor">
                                                                <div className="abt-instructor-img">
                                                                    <a href="instructor-profile.html"><img
                                                                        src="assets/img/user/user4.jpg" alt="img"
                                                                        className="img-fluid" /></a>
                                                                </div>
                                                                <div className="instructor-detail">
                                                                    <h5><a href="instructor-profile.html">Stella Johnson</a>
                                                                    </h5>
                                                                    <p>UX/UI Designer</p>
                                                                </div>
                                                            </div>
                                                            <div className="rating">
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star filled"></i>
                                                                <i className="fas fa-star"></i>
                                                            </div>
                                                        </div>
                                                        <p className="rev-info">“ This is the second Photoshop course I have
                                                            completed with Cristian. Worth every penny and recommend it
                                                            highly. To get the most out of this course, its best to to take
                                                            the Beginner to Advanced course first. The sound and video
                                                            quality is of a good standard. Thank you Cristian. “</p>
                                                        <a href="javascript:;" className="btn btn-reply"><i
                                                            className="feather-corner-up-left"></i> Respond</a>
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
            <Footer />
        </div>
    );
};

export default EnseignantReviews;