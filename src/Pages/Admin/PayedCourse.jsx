import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import NavbarAdmin from '../../Components/NavbarAdmin';


const PayedCourse = () => {
    return (
        <div>
            <NavbarAdmin />
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
                                        <li className="nav-item active">
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
                                            <Link to="/Home"> <i className="feather-power"></i> Sign Out</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-xl-9 col-lg-8 col-md-12" style={{ textAlign: 'left' }}>
                            <div className="tak-instruct-group">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="settings-widget">
                                            <div className="settings-inner-blk p-0">
                                                <div className="sell-course-head comman-space">
                                                    <h3>Payout Method</h3>
                                                    <p>Order Dashboard is a quick overview of all current orders.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="settings-widget">
                                            <div className="settings-inner-blk p-0">
                                                <div className="comman-space pb-0">
                                                    <div className="sell-course-head withdraw-history-head border-bottom-0">
                                                        <h3>Withdraw History</h3>
                                                    </div>
                                                    <div className="instruct-search-blk mb-0">
                                                        <div className="show-filter all-select-blk">
                                                            <form action="#">
                                                                <div className="row gx-2 align-items-center">
                                                                    <div className="col-md-6 col-lg-3 col-item">
                                                                        <div className="form-group select-form mb-0">
                                                                            <select className="form-select select"
                                                                                name="sellist1">
                                                                                <option>30 days</option>
                                                                                <option>20 days</option>
                                                                                <option>10 days</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-lg-3 col-item">
                                                                        <div className="form-group select-form mb-0">
                                                                            <select className="form-select select"
                                                                                name="sellist1">
                                                                                <option>Oct 2020</option>
                                                                                <option>Nov 2020</option>
                                                                                <option>Jan 2021</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-lg-3 col-item">
                                                                        <div className="form-group select-form mb-0">
                                                                            <select className="form-select select"
                                                                                name="sellist1">
                                                                                <option>Transaction Type</option>
                                                                                <option>Cash</option>
                                                                                <option>Card</option>
                                                                                <option>Online</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6 col-lg-3 col-item">
                                                                        <div className="download-widra">
                                                                            <a href="javascript:;"><i
                                                                                className="feather-download"></i></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comman-space pb-0">
                                                    <div
                                                        className="settings-referral-blk course-instruct-blk  table-responsive">

                                                        <table className="table table-nowrap mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </th>
                                                                    <th>ID</th>
                                                                    <th>DATE</th>
                                                                    <th>STATUS</th>
                                                                    <th>AMOUNT</th>
                                                                    <th>METHOD </th>
                                                                    <th>&nbsp;</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1061</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$1800</td>
                                                                    <td>Mastercard </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1051</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$1200</td>
                                                                    <td>Mastercard </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#2061</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-medium">Pending</span></td>
                                                                    <td>$1100</td>
                                                                    <td>Visa</td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1021</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-high">Cancel</span></td>
                                                                    <td>$1200</td>
                                                                    <td>Visa </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1051</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$1500</td>
                                                                    <td>Mastercard </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1061</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$2200</td>
                                                                    <td>Visa </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#2061</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$3200</td>
                                                                    <td>Mastercard </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1161</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$1400</td>
                                                                    <td>Visa </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#3061</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-low">Paid</span></td>
                                                                    <td>$1300</td>
                                                                    <td>Mastercard </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
                                                                </tr>
                                                                <tr>
                                                                    <td>
                                                                        <div className="form-check instruct-check-list">
                                                                            <input className="form-check-input" type="checkbox"
                                                                                name="option1" />
                                                                        </div>
                                                                    </td>
                                                                    <td><a href="view-invoice.html">#1061</a></td>
                                                                    <td>10-05-20</td>
                                                                    <td><span className="badge info-high">Cancel</span></td>
                                                                    <td>$1200</td>
                                                                    <td>Mastercard </td>
                                                                    <td><a href="javascript:;"><i
                                                                        className="feather-more-vertical"></i></a></td>
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
            <Footer />
        </div>
    );
};

export default PayedCourse;