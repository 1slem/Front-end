import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import NavbarAdmin from '../../Components/NavbarAdmin';
const AdminAddCourse = () => {
    const [step, setStep] = useState(1)

    const nextStep = () => {
        setStep(step + 1);
    }
    const prevStep = () => {
        setStep(step - 1);
    }


    return (

        <div>

            <NavbarAdmin />
            <section className="page-content course-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="add-course-header">
                                <h2>Add New Course</h2>
                                <div className="add-course-btns">
                                    <ul className="nav">
                                        <li>
                                            <a href="dashboard-instructor.html" className="btn btn-black">Back to Course</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" className="btn btn-success-dark">Save</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">



                                <div className="widget-set">
                                    <div className="widget-setcount">
                                        <ul id="progressbar">
                                            <li className={step >= 1 ? 'progress-active' : ''}>
                                                <p><span></span> Basic Information</p>
                                            </li>
                                            <li className={step >= 2 ? 'progress-active' : ''}>
                                                <p><span ></span> Courses Media</p>
                                            </li>
                                            <li className={step >= 3 ? 'progress-active' : ''}>
                                                <p><span></span> Curriculum</p>
                                            </li>
                                            <li className={step >= 4 ? 'progress-active' : ''}>
                                                <p><span></span> Settings</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget-content multistep-form" style={{textAlign:'left'}}>
                                        
                                        <fieldset id="first" style={{ display: step === 1 ? 'block' : 'none' }}>
                                            <div className="add-course-info">

                                                <div className="add-course-inner-header">
                                                    <h4>Basic Information</h4>
                                                </div>
                                                <div className="add-course-form">
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <label className="add-course-label">Course Title</label>
                                                            <input type="text" className="form-control"
                                                                placeholder="Course Title" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Courses Category</label>
                                                            <select className="form-control select">
                                                                <option>Category 01</option>
                                                                <option>Category 02</option>
                                                                <option>Category 03</option>
                                                                <option>Category 04</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Courses Level</label>
                                                            <select className="form-control select">
                                                                <option>Level 01</option>
                                                                <option>Level 02</option>
                                                                <option>Level 03</option>
                                                                <option>Level 04</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <label className="add-course-label">Course Description</label>
                                                            <div id="editor"></div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="widget-btn">
                                                    <a className="btn btn-black" onClick={prevStep}>Back</a>
                                                    <a className="btn btn-info-light next_btn" onClick={nextStep} >Continue</a>
                                                </div>
                                            </div>
                                        </fieldset>
                                        
                                        <fieldset className="field-card" style={{ display: step === 2 ? 'block' : 'none' }}>
                                            <div className="add-course-info">
                                                <div className="add-course-inner-header">
                                                    <h4>Courses Media</h4>
                                                </div>
                                                <div className="add-course-form">
                                                    <form action="#">
                                                        <div className="form-group">
                                                            <label className="add-course-label">Course cover image</label>
                                                            <div className="relative-form">
                                                                <span>No File Selected</span>
                                                                <label className="relative-file-upload">
                                                                    Upload File <input type="file" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="add-image-box">
                                                                <a href="javascript:void(0);">
                                                                    <i className="far fa-image"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Video URL" />
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="add-image-box add-video-box">
                                                                <a href="javascript:void(0);">
                                                                    <i className="fas fa-circle-play"></i>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="widget-btn">
                                                    <a className="btn btn-black prev_btn" onClick={prevStep}>Previous</a>
                                                    <a className="btn btn-info-light next_btn" onClick={nextStep}>Continue</a>
                                                </div>
                                            </div>
                                        </fieldset>

                                        <fieldset className="field-card" style={{ display: step === 3 ? 'block' : 'none' }}>
                                            <div className="add-course-info">
                                                <div className="add-course-inner-header">
                                                    <h4>Curriculum</h4>
                                                </div>
                                                <div className="add-course-section">
                                                    <a href="javascript:void(0);" className="btn">Add Section</a>
                                                </div>
                                                <div className="add-course-form">
                                                    <div className="curriculum-grid">
                                                        <div className="curriculum-head">
                                                            <p>Section 1: Introduction</p>
                                                            <a href="javascript:void(0);" className="btn">Add Lecture</a>
                                                        </div>
                                                        <div className="curriculum-info">
                                                            <div id="accordion">
                                                                <div className="faq-grid">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseOne">
                                                                            <i className="fas fa-align-justify"></i>
                                                                            Introduction
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseOne" className="collapse"
                                                                        data-bs-parent="#accordion">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="faq-grid">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseTwo">
                                                                            <i className="fas fa-align-justify"></i> Installing
                                                                            Development Software
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseTwo" className="collapse"
                                                                        data-bs-parent="#accordion">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="faq-grid mb-0">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseThree">
                                                                            <i className="fas fa-align-justify"></i> Hello World
                                                                            Project from GitHub
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseThree" className="collapse"
                                                                        data-bs-parent="#accordion">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="curriculum-grid mb-0">
                                                        <div className="curriculum-head">
                                                            <p>Section 1: JavaScript Beginnings</p>
                                                            <a href="javascript:void(0);" className="btn">Add Lecture</a>
                                                        </div>
                                                        <div className="curriculum-info">
                                                            <div id="accordion-one">
                                                                <div className="faq-grid">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseFour">
                                                                            <i className="fas fa-align-justify"></i>
                                                                            Introduction
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseFour" className="collapse"
                                                                        data-bs-parent="#accordion-one">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="faq-grid">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseFive">
                                                                            <i className="fas fa-align-justify"></i> Installing
                                                                            Development Software
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseFive" className="collapse"
                                                                        data-bs-parent="#accordion-one">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="faq-grid">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseSix">
                                                                            <i className="fas fa-align-justify"></i> Hello World
                                                                            Project from GitHub
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseSix" className="collapse"
                                                                        data-bs-parent="#accordion-one">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="faq-grid mb-0">
                                                                    <div className="faq-header">
                                                                        <a className="collapsed faq-collapse"
                                                                            data-bs-toggle="collapse" href="#collapseSeven">
                                                                            <i className="fas fa-align-justify"></i> Our Sample
                                                                            Website
                                                                        </a>
                                                                        <div className="faq-right">
                                                                            <a href="javascript:void(0);">
                                                                                <i className="far fa-pen-to-square me-1"></i>
                                                                            </a>
                                                                            <a href="javascript:void(0);" className="me-0">
                                                                                <i className="far fa-trash-can"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                    <div id="collapseSeven" className="collapse"
                                                                        data-bs-parent="#accordion-one">
                                                                        <div className="faq-body">
                                                                            <div className="add-article-btns">
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn">Add Article</a>
                                                                                <a href="javascript:void(0);"
                                                                                    className="btn me-0">Add Description</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-btn">
                                                    <a className="btn btn-black prev_btn" onClick={prevStep}>Previous</a>
                                                    <a className="btn btn-info-light next_btn" onClick={nextStep}>Continue</a>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="field-card" style={{ display: step === 4 ? 'block' : 'none' }}>
                                            <div className="add-course-info">
                                                <div className="add-course-inner-header">
                                                    <h4>Requirements</h4>
                                                </div>
                                                <div className="add-course-form">
                                                    <form action="#">
                                                        <div className="form-group form-group-tagsinput">
                                                            <input type="text" data-role="tagsinput"
                                                                className="input-tags form-control" name="html"
                                                                value="jquery, bootstrap" id="html" />
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <label className="add-course-label">Price</label>
                                                            <input type="text" className="form-control" placeholder="10.00" />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="widget-btn">
                                                    <a className="btn btn-black prev_btn" onClick={prevStep}>Previous</a>
                                                    <a className="btn btn-info-light next_btn" onClick={nextStep}>Continue</a>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className="field-card">
                                            <div className="add-course-info">
                                                <div className="add-course-msg">
                                                    <i className="fas fa-circle-check"></i>
                                                    <h4>The Course Added Succesfully</h4>
                                                    <p>Admin will be Approve soon.</p>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AdminAddCourse;