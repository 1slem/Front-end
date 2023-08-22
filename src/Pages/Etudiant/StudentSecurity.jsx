import React from 'react';
import Footer from '../../Components/Footer';
import NavbarStudent from '../../Components/NavbarStudent';


const StudentSecurity = () => {
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
                    <a href="student-profile.html">
                      <img src="assets/img/user/user11.jpg" alt="" />
                    </a>
                  </div>
                </div>
                <div className="profile-group">
                  <div className="profile-name text-center">
                    <h4>
                      <a href="student-profile.html">Rolands R</a>
                    </h4>
                    <p>Student</p>
                  </div>
                  <div className="go-dashboard text-center">
                    <a href="deposit-student-dashboard.html" className="btn btn-primary">
                      Go to Dashboard
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="settings-widget account-settings">
              <div className="settings-menu">
                <h3>ACCOUNT SETTINGS</h3>
                <ul>
                  <li className="nav-item">
                    <a href="setting-edit-profile.html" className="nav-link">
                      <i className="feather-settings"></i> Edit Profile
                    </a>
                  </li>
                  <li className="nav-item active">
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
                  <h3>Security</h3>
                  <p>Edit your account settings and change your password here.</p>
                </div>
                <div className="checkout-form personal-address border-line">
                  <div className="personal-info-head">
                    <h4>Email Address</h4>
                    <p>
                      Your current email address is{' '}
                      <span>
                        <a href="https://dreamslms.dreamguystech.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="e98488919e8c8585a98c91888499858cc78a8684">
                          [email&#160;protected]
                        </a>
                      </span>
                    </p>
                  </div>
                  <form action="#">
                    <div className="new-address">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-control-label">New email address</label>
                            <input type="text" className="form-control" placeholder="Enter your New email address" />
                          </div>
                        </div>
                        <div className="profile-share d-flex">
                          <button type="button" className="btn btn-success">
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="checkout-form personal-address">
                  <div className="personal-info-head">
                    <h4>Change Password</h4>
                    <p>We will email you a confirmation when changing your password, so please expect that email after submitting.</p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <form action="#">
                        <div className="form-group">
                          <label className="form-control-label">Current password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Password</label>
                          <div className="pass-group" id="passwordInput">
                            <input type="password" className="form-control pass-input" placeholder="Enter your password" />
                          </div>
                          <div className="password-strength" id="passwordStrength">
                            <span id="poor"></span>
                            <span id="weak"></span>
                            <span id="strong"></span>
                            <span id="heavy"></span>
                          </div>
                          <div id="passwordInfo"></div>
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Confirm New Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="update-profile save-password">
                          <button type="button" className="btn btn-primary">
                            Save Password
                          </button>
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
      <Footer/>
    </div>
  );
};

export default StudentSecurity;