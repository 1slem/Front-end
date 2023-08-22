import React from 'react';

const NavbarStudentD = () => {
  return (
    <div className="course-student-header">
      <div className="container">
        <div className="student-group">
          <div className="course-group">
            <div className="course-group-img d-flex">
              <a href="student-profile.html"><img src="assets/img/user/user11.jpg" alt="" className="img-fluid" /></a>
              <div className="d-flex align-items-center">
                <div className="course-name">
                  <h4><a href="student-profile.html">Rolands R</a><span>Beginner</span></h4>
                  <p>Student</p>
                </div>
              </div>
            </div>
            <div className="course-share">
              <a href="javascript:;" className="btn btn-primary">Account Settings</a>
            </div>
          </div>
        </div>
        <div className="my-student-list">
          <ul>
            <li><a className="active" href="deposit-student-dashboard.html">Dashboard</a></li>
            <li><a href="course-student.html">Courses</a></li>
            <li><a href="course-wishlist.html">Wishlists</a></li>
            <li><a href="course-message.html">Messages</a></li>
            <li><a href="purchase-history.html">Purchase history</a></li>
            <li><a href="deposit-student.html">Deposit</a></li>
            <li className="mb-0"><a href="transactions-student.html">Transactions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarStudentD;