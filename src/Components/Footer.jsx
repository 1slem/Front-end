import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <div className="footer-top aos" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">

                                <div className="footer-widget footer-about">
                                    <div className="footer-logo">
                                        <img src="assets/img/logo.svg" alt="logo" />
                                    </div>
                                    <div className="footer-about-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-2 col-md-6">

                                <div className="footer-widget footer-menu">
                                    <h2 className="footer-title">For Instructor</h2>
                                    <ul>
                                        <li><a href="#"> Home</a></li>
                                        <li><a href="register.html">About Us</a></li>
                                        <li><a href="instructor-profile.html">Contact Us</a></li>
                                        
                                        <li><a href="EnseignantGrid">Instructor</a></li>
                                        <li><a href="instructor-list.html">Studient</a></li>

                                    </ul>
                                </div>

                            </div>

                            <div className="col-lg-6 col-md-6">

                                <div className="footer-widget footer-contact">
                                    <h2 className="footer-title">News letter</h2>
                                    <div className="news-letter">
                                        <form>
                                            <input type="text" className="form-control" placeholder="Enter your email address"
                                                name="email" />
                                        </form>
                                    </div>
                                    <div className="footer-contact-info">
                                        <div className="footer-address">
                                            <img src="assets/img/icon/icon-20.svg" alt className="img-fluid" />
                                            <p> 3556 Beech Street, San Francisco,<br /> California, CA 94108 </p>
                                        </div>
                                        <p>
                                            <img src="assets/img/icon/icon-19.svg" alt className="img-fluid" />
                                            <a href="https://dreamslms.dreamguystech.com/cdn-cgi/l/email-protection"
                                                className="__cf_email__"
                                                data-cfemail="20445245414d534c4d53604558414d504c450e434f4d">[email&#160;protected]</a>
                                        </p>
                                        <p className="mb-0">
                                            <img src="assets/img/icon/icon-21.svg" alt className="img-fluid" />
                                            +19 123-456-7890
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-bottom">
                    <div className="container">

                        <div className="copyright">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="privacy-policy">
                                        <ul>
                                            <li><a href="term-condition.html">Terms</a></li>
                                            <li><a href="privacy-policy.html">Privacy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="copyright-text">
                                        <p className="mb-0">&copy; 2023 DreamsLMS. All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Footer;