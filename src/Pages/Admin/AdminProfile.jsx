import React from 'react';
import NavbarTeacher from '../../Components/NavbarTeacher';

const AdminProfile = () => {
    return (
        <div>
            <NavbarTeacher/>
            <div className="page-content instructor-page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-12 theiaStickySidebar">
                            <div className="settings-widget dash-profile">
                                <div className="settings-menu p-0">
                                    <div className="profile-bg">
                                        <h5>Beginner</h5>
                                        <img src="assets/img/instructor-profile-bg.jpg" alt="" />
                                        <div className="profile-img">
                                            <a href="instructor-profile.html">
                                                <img src="assets/img/user/user15.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="profile-group">
                                        <div className="profile-name text-center">
                                            <h4>
                                                <a href="instructor-profile.html">Jenny Wilson</a>
                                            </h4>
                                            <p>Instructor</p>
                                        </div>
                                        <div className="go-dashboard text-center">
                                            <a href="add-course.html" className="btn btn-primary">
                                                Create New Course
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="settings-widget account-settings">
                                <div className="settings-menu">
                                    <h3>DASHBOARD</h3>
                                    <ul>
                                        <li className="nav-item active">
                                            <a href="instructor-dashboard.html" className="nav-link">
                                                <i className="feather-home"></i> My Dashboard
                                            </a>
                                        </li>
                                        <li className="nav-item">
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

                        <div className="col-xl-9 col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-md-4 d-flex">
                                    <div className="card instructor-card w-100">
                                        <div className="card-body">
                                            <div className="instructor-inner">
                                                <h6>REVENUE</h6>
                                                <h4 className="instructor-text-success">$467.34</h4>
                                                <p>Earning this month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="card instructor-card w-100">
                                        <div className="card-body">
                                            <div className="instructor-inner">
                                                <h6>STUDENTS ENROLLMENTS</h6>
                                                <h4 className="instructor-text-info">12,000</h4>
                                                <p>New this month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <div className="card instructor-card w-100">
                                        <div className="card-body">
                                            <div className="instructor-inner">
                                                <h6>COURSES RATING</h6>
                                                <h4 className="instructor-text-warning">4.80</h4>
                                                <p>Rating this month</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                          
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="settings-widget">
                                        <div className="settings-inner-blk p-0">
                                            <div className="sell-course-head comman-space">
                                                <h3>Courses</h3>
                                            </div>
                                            <div className="comman-space pb-0">
                                                <div className="settings-tickets-blk course-instruct-blk table-responsive">
                                                    <table className="table table-nowrap mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>COURSES</th>
                                                                <th>SALES</th>
                                                                <th>AMOUNT</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="sell-table-group d-flex align-items-center">
                                                                        <div className="sell-group-img">
                                                                            <a href="course-details.html">
                                                                                <img src="assets/img/course/course-10.jpg" className="img-fluid " alt />
                                                                            </a>
                                                                        </div>
                                                                        <div className="sell-tabel-info">
                                                                            <p>
                                                                                <a href="course-details.html">Information About UI/UX Design Degree</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>34</td>
                                                                <td>$3,145.23</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="sell-table-group d-flex align-items-center">
                                                                        <div className="sell-group-img">
                                                                            <a href="course-details.html">
                                                                                <img src="assets/img/course/course-11.jpg" className="img-fluid " alt />
                                                                            </a>
                                                                        </div>
                                                                        <div className="sell-tabel-info">
                                                                            <p>
                                                                                <a href="course-details.html">Wordpress for Beginners - Master Wordpress Quickly</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>34</td>
                                                                <td>$3,145.23</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="sell-table-group d-flex align-items-center">
                                                                        <div className="sell-group-img">
                                                                            <a href="course-details.html">
                                                                                <img src="assets/img/course/course-12.jpg" className="img-fluid " alt />
                                                                            </a>
                                                                        </div>
                                                                        <div className="sell-tabel-info">
                                                                            <p>
                                                                                <a href="course-details.html">Sketch from A to Z (2022): Become an app designer</a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>34</td>
                                                                <td>$3,145.23</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
    );
};

export default AdminProfile;