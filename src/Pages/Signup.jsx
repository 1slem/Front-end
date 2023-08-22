import React from 'react';

class Signup extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <div className="loginbox">
          <div className="img-logo">
            <img src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
            <div className="back-home">
              <a href="index.html">Back to Home</a>
            </div>
          </div>
          <h1>Sign up</h1>
          <form action="#" style={{textAlign:'left'}}>
            <div className="form-group">
              <label className="form-control-label">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter your Full Name" />
            </div>
            <div className="form-group">
              <label className="form-control-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label className="form-control-label">Password</label>
              <div className="pass-group" id="passwordInput">
                <input type="password" className="form-control pass-input" placeholder="Enter your password" />
                <span className="toggle-password feather-eye"></span>
                <span className="pass-checked"><i className="feather-check"></i></span>
              </div>
              <div className="password-strength" id="passwordStrength">
                <span id="poor"></span>
                <span id="weak"></span>
                <span id="strong"></span>
                <span id="heavy"></span>
              </div>
              <div id="passwordInfo"></div>
            </div>
            <div className="form-check remember-me">
              <label className="form-check-label mb-0">
                <input className="form-check-input" type="checkbox" name="remember" /> I agree to the <a href="term-condition.html">Terms of Service</a> and <a href="privacy-policy.html">Privacy Policy.</a>
              </label>
            </div>
            <div className="d-grid">
              <button className="btn btn-primary btn-start" type="submit">Create Account</button>
            </div>
          </form>
        </div>
        <div className="google-bg text-center">
          <span><a href="#">Or sign in with</a></span>
          <div className="sign-google">
            <ul>
              <li><a href="#"><img src="assets/img/net-icon-01.png" className="img-fluid" alt="Logo" /> Sign In using Google</a></li>
              <li><a href="#"><img src="assets/img/net-icon-02.png" className="img-fluid" alt="Logo" />Sign In using Facebook</a></li>
            </ul>
          </div>
          <p className="mb-0">Already have an account? <a href="login.html">Sign in</a></p>
        </div>
      </div>
    );
  }
}

export default Signup;