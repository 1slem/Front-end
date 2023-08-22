import React from 'react';
import Footer from '../../Components/Footer';
import NavbarStudentD from '../../Components/NavbarStudentD';
import NavbarStudent from '../../Components/NavbarStudent';

const StudentDashboard = () => {
  return (
    <div className="page-content">
      <NavbarStudent />
      <NavbarStudentD/>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <div className="settings-top-widget student-deposit-blk">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="card stat-info ttl-tickets">
                    <div className="card-body">
                      <div className="view-all-grp d-flex">
                        <div className="student-ticket-view">
                          <h3>50</h3>
                          <p>Purchased Courses</p>
                          <a href="purchase-history.html">View All</a>
                        </div>
                        <div className="img-deposit-ticket">
                          <img src="assets/img/students/book.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card stat-info open-tickets">
                    <div className="card-body">
                      <div className="view-all-grp d-flex">
                        <div className="student-ticket-view">
                          <h3>30</h3>
                          <p>Total Transactions</p>
                          <a href="deposit-student.html">View All</a>
                        </div>
                        <div className="img-deposit-ticket">
                          <img src="assets/img/students/receipt-text.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="card stat-info close-tickets">
                    <div className="card-body">
                      <div className="view-all-grp d-flex">
                        <div className="student-ticket-view">
                          <h3>20</h3>
                          <p>Total Deposit</p>
                          <a href="transactions-student.html">View All</a>
                        </div>
                        <div className="img-deposit-ticket">
                          <img src="assets/img/students/empty-wallet-tick.svg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="settings-widget">
              <div className="settings-inner-blk p-0">
                <div className="comman-space pb-0">
                  <div className="filter-grp ticket-grp d-flex align-items-center justify-content-between">
                    <h3>Latest Transactions</h3>
                  </div>
                  <div className="settings-tickets-blk table-responsive">
                    <table className="table table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>Referred ID</th>
                          <th>Details</th>
                          <th>Amount</th>
                          <th>Post Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><a href="javascript:;">K2WX7JJ6R1UA</a></td>
                          <td>10 USD Refunded from withdrawal rejection</td>
                          <td><span className="text-success">+ $45.00</span></td>
                          <td>$45.00</td>
                        </tr>
                        {/* Add more table rows here */}
                      </tbody>
                    </table>
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

export default StudentDashboard;