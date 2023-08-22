import React from 'react';
import Navbar from '../Components/Navbar';

const ContactUs = () => {
    return (
        <div>
            <Navbar/>
            <div className="breadcrumb-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-12">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index-2.html">Home</a></li>
                                        <li className="breadcrumb-item">Pages</li>
                                        <li className="breadcrumb-item">Support</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        <div class="page-banner student-bg-blk d-flex align-items-center" style={{height:'200px'}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-12">
                        <div class="profile-info-blk " >
                            <h1 className="mb-0 ">Support</h1> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

          

            <div className="page-content" style={{textAlign:'left'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <div className="support-wrap">
                                <h5>Submit a Request</h5>
                                <form action="#">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your first Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" className="form-control" placeholder="Enter your email address" />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" className="form-control" placeholder="Enter your Subject" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea className="form-control" placeholder="Write down here" rows="4"></textarea>
                                    </div>
                                    <div className="text-center">
                                    <button className="btn btn-submit ">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;