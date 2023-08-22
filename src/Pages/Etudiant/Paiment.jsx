import React from 'react';
import Footer from '../../Components/Footer';
import NavbarStudent from '../../Components/NavbarStudent';



const Paiment = () => {
  return (

    <section className="course-content checkout-widget">
        <NavbarStudent/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="student-widget">
              <div className="student-widget-group add-course-info">
                <div className="cart-head" style={{textAlign:'left'}}>
                  <h4>Billing Address</h4>
                </div>
                <div className="checkout-form" style={{textAlign:'left'}}>
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
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-control-label">Phone Number (Optional)</label>
                          <input type="text" className="form-control" placeholder="Phone Number" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-control-label">Address Line 1</label>
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-control-label">Address Line 2 (Optional)</label>
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-label">State</label>
                          <select className="form-select select" name="sellist1">
                            <option>Select State</option>
                            <option>Brazil</option>
                            <option>French</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-label">Country</label>
                          <select className="form-select select" name="sellist1">
                            <option>Select country</option>
                            <option>India</option>
                            <option>America</option>
                            <option>London</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-control-label">Zip/Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-10">
                        <div className="form-group ship-check">
                          <input className="form-check-input" type="checkbox" name="remember" /> Shipping address is the same as my billing address
                        </div>
                        <div className="form-group ship-check mb-0">
                          <input className="form-check-input" type="checkbox" name="remember" /> Save this information for next time
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="student-widget pay-method">
              <div className="student-widget-group add-course-info">
                <div className="cart-head" style={{textAlign:'left'}}>
                  <h4>Payment Method</h4>
                </div>
                <div className="checkout-form">
                  <form action="https://dreamslms.dreamguystech.com/html/cart.html">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="wallet-method">
                          <label className="radio-inline custom_radio me-4">
                            <input type="radio" name="optradio" checked />
                            <span className="checkmark"></span> Credit or Debit card
                          </label>
                          <label className="radio-inline custom_radio">
                            <input type="radio" name="optradio" />
                            <span className="checkmark"></span> PayPal
                          </label>
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Card Number</label>
                          <input type="text" className="form-control" placeholder="XXXX XXXX XXXX XXXX" />
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-label">Month</label>
                          <select className="form-select select" name="sellist1">
                            <option>Month</option>
                            <option>Jun</option>
                            <option>Feb</option>
                            <option>March</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-label">Year</label>
                          <select className="form-select select" name="sellist1">
                            <option>Year</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="form-control-label">CVV Code</label>
                          <input type="text" className="form-control" placeholder="XXXX" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label className="form-control-label">Name on Card</label>
                          <input type="text" className="form-control" placeholder="Address" />
                        </div>
                      </div>
                      <div className="col-md-12 col-lg-10">
                        <div className="form-group ship-check">
                          <input className="form-check-input" type="checkbox" name="remember" /> Remember this card
                        </div>
                      </div>
                      <div className="payment-btn">
                        <button className="btn btn-primary" type="submit">Make a Payment</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 theiaStickySidebar">
            <div className="student-widget select-plan-group">
              <div className="student-widget-group">
                <div className="plan-header">
                  <h4>Selected Plan</h4>
                </div>
                <div className="basic-plan">
                  <h3>Basic</h3>
                  <p>For individuals who just need to start with the basic features</p>
                  <p>per user, per month when billed monthly</p>
                  <h2><span>$</span>10</h2>
                </div>
                <div className="benifits-feature">
                  <h3>Benefits</h3>
                  <ul>
                    <li><i className="fas fa-circle"></i> Access to slack community</li>
                    <li><i className="fas fa-circle"></i> Access to support team</li>
                    <li><i className="fas fa-circle"></i> Algorithmic bidding</li>
                    <li><i className="fas fa-circle"></i> Keyword and ASIN harvesting</li>
                  </ul>
                </div>
                <div className="benifits-feature">
                  <h3>Features</h3>
                  <ul>
                    <li><i className="fas fa-circle"></i> Search term isolation</li>
                    <li><i className="fas fa-circle"></i> Total sales analytics</li>
                    <li><i className="fas fa-circle"></i> Best seller rank</li>
                    <li><i className="fas fa-circle"></i> Placement optimization</li>
                  </ul>
                </div>
                <div className="plan-change">
                  <a href="pricing-plan.html" className="btn btn-primary">Change the Plan</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 pt-5 pb-3 bg-light"><Footer/></div>
      
    </section>
  );
};

export default Paiment;