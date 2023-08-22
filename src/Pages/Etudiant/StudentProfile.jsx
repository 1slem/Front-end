import React from 'react';
import Footer from '../../Components/Footer';
import NavbarStudent from '../../Components/NavbarStudent';



function StudentProfile() {
  

  return (
    
   
    <div className="page-content">
       <NavbarStudent/>
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
            <div className="settings-widget dash-profile mb-3">
              <div className="settings-menu p-0">
                <div className="profile-bg">
                  <h5>Beginner</h5>
                  <img src="assets/img/profile-bg.jpg" alt="" />
                  <div className="profile-img">
                    <a href="student-profile.html"><img src="assets/img/user/user11.jpg" alt="" /></a>
                  </div>
                </div>
                <div className="profile-group">
                  <div className="profile-name text-center">
                    <h4><a href="student-profile.html">Rolands R</a></h4>
                    <p>Student</p>
                  </div>
                  <div className="go-dashboard text-center">
                    <a href="deposit-student-dashboard.html" className="btn btn-primary">Go to Dashboard</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="settings-widget account-settings">
              <div className="settings-menu">
                <h3>ACCOUNT SETTINGS</h3>
                <ul>
                  <li className="nav-item active">
                    <a href="setting-edit-profile.html" className="nav-link">
                      <i className="feather-settings"></i> Edit Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-security.html" className="nav-link">
                      <i className="feather-user"></i> Security
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-social-profile.html" className="nav-link">
                      <i className="feather-refresh-cw"></i> Social Profiles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-notification.html" className="nav-link">
                      <i className="feather-bell"></i> Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-privacy.html" className="nav-link">
                      <i className="feather-lock"></i> Profile Privacy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-delete-profile.html" className="nav-link">
                      <i className="feather-trash-2"></i> Delete Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-accounts.html" className="nav-link">
                      <i className="feather-user"></i> Linked Accounts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-referral.html" className="nav-link">
                      <i className="feather-user-plus"></i> Referrals
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="login.html" className="nav-link">
                      <i className="feather-power"></i> Sign Out
                    </a>
                  </li>
                </ul>
                <h3>SUBSCRIPTION</h3>
                <ul>
                  <li className="nav-item">
                    <a href="setting-student-subscription.html" className="nav-link">
                      <i className="feather-calendar"></i> My Subscriptions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-billing.html" className="nav-link">
                      <i className="feather-credit-card"></i> Billing Info
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-payment.html" className="nav-link">
                      <i className="feather-credit-card"></i> Payment
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="setting-student-invoice.html" className="nav-link">
                      <i className="feather-clipboard"></i> Invoice
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
                  <h3>Profile Details</h3>
                  <p>You have full control to manage your own account setting.</p>
                </div>
                <div className="course-group mb-0 d-flex">
                  <div className="course-group-img d-flex align-items-center">
                    <a href="student-profile.html"><img src="assets/img/user/user11.jpg" alt="" className="img-fluid" /></a>
                    <div className="course-name">
                      <h4><a href="student-profile.html">Your avatar</a></h4>
                      <p>PNG or JPG no bigger than 800px wide and tall.</p>
                    </div>
                  </div>
                  <div className="profile-share d-flex align-items-center justify-content-center">
                    <a href="javascript:;" className="btn btn-success">Update</a>
                    <a href="javascript:;" className="btn btn-danger">Delete</a>
                  </div>
                </div>
                <div className="checkout-form personal-address add-course-info " style={{textAlign:'left'}}>
                  <div className="personal-info-head">
                    <h4>Personal Details</h4>
                    <p>Edit your personal information and address.</p>
                  </div>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">First Name</label>
                          <input type="text" className="form-control" placeholder="Enter your first Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Last Name</label>
                          <input type="text" className="form-control" placeholder="Enter your last Name" />
                        </div>
                      </div>
                      <div className="col-lg-6" >
                        <div className="form-group">
                          <label className="form-control-label">Phone</label>
                          <input type="text" className="form-control" placeholder="Enter your Phone" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Email</label>
                          <input type="text" className="form-control" placeholder="Enter your Email" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Birthday</label>
                          <input type="text" className="form-control" placeholder="Birth of Date" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-label">Country</label>
                          <select className="form-select select country-select" name="sellist1">
                            <option>Select country</option>
                            <option>India</option>
                            <option>America</option>
                            <option>London</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Address Line 1</label>
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">Address Line 2 (Optional)</label>
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">City</label>
                          <input type="text" className="form-control" placeholder="Enter your City" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="form-control-label">ZipCode</label>
                          <input type="text" className="form-control" placeholder="Enter your Zipcode" />
                        </div>
                      </div>
                      <div className="update-profile">
                        <button type="button" className="btn btn-primary">Update Profile</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default StudentProfile;