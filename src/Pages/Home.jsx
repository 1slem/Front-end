import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const Home = () => {
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('Category');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform action on form submission
    };
    
     
    return (
        <div>
            <Navbar />
            <section className="home-slide d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="home-slide-face aos" data-aos="fade-up">
                                <div className="home-slide-text">
                                    <h5>The Leader in Online Learning</h5>
                                    <h1>Engaging & Accessible Online Courses For All</h1>
                                    <p>Own your future learning new skills online</p>
                                </div>
                                <div className="banner-content">
                                    <form className="form" onSubmit={handleSubmit}>
                                        <div className="form-inner">
                                            <div className="input-group">
                                                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Search School, Online educational centers, etc"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                <span className="drop-detail">
                                                    <select
                                                        className="form-select select"
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                    >
                                                        <option>Category</option>
                                                        <option>Angular</option>
                                                        <option>Node Js</option>
                                                        <option>React</option>
                                                        <option>Python</option>
                                                    </select>
                                                </span>
                                                <button className="btn btn-primary sub-btn" type="submit">
                                                    <i className="fas fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="trust-user">
                                    <p>Trusted by over 15K Users <br /> worldwide since 2022</p>
                                    <div className="trust-rating d-flex align-items-center">
                                        <div className="rate-head">
                                            <h2>
                                                <span>1000</span>+
                                            </h2>
                                        </div>
                                        <div className="rating d-flex align-items-center">
                                            <h2 className="d-inline-block average-rating">4.4</h2>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 d-flex align-items-center">
                            <div className="girl-slide-img aos" data-aos="fade-up">
                                <img src="./assets/img/object.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section student-course">
                <div className="container">
                    <div className="course-widget">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="course-full-width">
                                    <div
                                        className="blur-border course-radius align-items-center aos"
                                        data-aos="fade-up"
                                    >
                                        <div className="online-course d-flex align-items-center">
                                            <div className="course-img">
                                                <img src="assets/img/pencil-icon.svg" alt="" />
                                            </div>
                                            <div className="course-inner-content">
                                                <h4>
                                                    <span>10</span>K
                                                </h4>
                                                <p>Online Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="course-full-width">
                                    <div
                                        className="blur-border course-radius aos"
                                        data-aos="fade-up"
                                    >
                                        <div className="online-course d-flex align-items-center">
                                            <div className="course-img">
                                                <img src="assets/img/cources-icon.svg" alt="" />
                                            </div>
                                            <div className="course-inner-content">
                                                <h4>
                                                    <span>200</span>+
                                                </h4>
                                                <p>Expert Tutors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="course-full-width">
                                    <div
                                        className="blur-border course-radius aos"
                                        data-aos="fade-up"
                                    >
                                        <div className="online-course d-flex align-items-center">
                                            <div className="course-img">
                                                <img src="assets/img/certificate-icon.svg" alt="" />
                                            </div>
                                            <div className="course-inner-content">
                                                <h4>
                                                    <span>6</span>K+
                                                </h4>
                                                <p>Certified Courses</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 d-flex">
                                <div className="course-full-width">
                                    <div
                                        className="blur-border course-radius aos"
                                        data-aos="fade-up"
                                    >
                                        <div className="online-course d-flex align-items-center">
                                            <div className="course-img">
                                                <img src="assets/img/gratuate-icon.svg" alt="" />
                                            </div>
                                            <div className="course-inner-content">
                                                <h4>
                                                    <span>60</span>K +
                                                </h4>
                                                <p>Online Students</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
            {/* <section className="topcategory-sec">
            <div className="container">
                <div className="header-two-title text-center" data-aos="fade-up">
                    <p className="tagline">Favorite Course</p>
                    <h2>Top Category</h2>
                    <div className="header-two-text">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
                            bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                    </div>
                </div>
                <div className="top-category-group">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
                            <div className="categories-item flex-fill">
                                <div className="categories-icon">
                                    <img src="assets/img/category/category-1.svg" alt="Angular Development"/>
                                </div>
                                <div className="categories-content">
                                    <h3>Angular Development</h3>
                                    <p>40 Instructors</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
                            <div className="categories-item flex-fill">
                                <div className="categories-icon">
                                    <img src="assets/img/category/category-2.svg" alt="Python Development"/>
                                </div>
                                <div className="categories-content">
                                    <h3>Python Development</h3>
                                    <p>20 Instructors</p>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex" data-aos="fade-down">
                            <div className="categories-item flex-fill">
                                <div className="categories-icon">
                                    <img src="assets/img/category/category-4.svg" alt="PHP Development"/>
                                </div>
                                <div className="categories-content">
                                    <h3>PHP Development</h3>
                                    <p>40 Instructors</p>
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex">
                            <div className="categories-item  flex-fill" data-aos="fade-up">
                                <div className="categories-icon">
                                    <img src="assets/img/category/category-8.svg" alt="Business"/>
                                </div>
                                <div className="categories-content">
                                    <h3>Business</h3>
                                    <p>40 Instructors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="more-details text-center" data-aos="fade-down">
                        <a href="job-category.html" className="discover-btn">View all Category <i
                                className="fas fa-arrow-right ms-2"></i></a>
                    </div>
                </div>

            </div>
        </section> */}



            <section className="section new-course">
            <div className="container">
                <div className="section-header aos" data-aos="fade-up">
                    <div className="section-sub-head">
                        <span>What’s New</span>
                        <h2>Featured Courses</h2>
                    </div>
                    <div className="all-btn all-category d-flex align-items-center">
                        <a href="course-list.html" className="btn btn-primary">All Courses</a>
                    </div>
                </div>
                <div className="section-text aos" data-aos="fade-up">
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan
                        bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                </div>
                <div className="course-feature">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="course-box d-flex aos" data-aos="fade-up">
                                <div className="product">
                                    <div className="product-img">
                                        <a href="course-details.html">
                                            <img className="img-fluid" alt src="assets/img/course/course-01.jpg"/>
                                        </a>
                                        <div className="price">
                                            <h3>$300 <span>$99.00</span></h3>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user1.jpg"
                                                        alt className="img-fluid"/></a>
                                                <div className="course-name">
                                                    <h4><a href="instructor-profile.html">Nicole Brown</a></h4>
                                                    <p>Instructor</p>
                                                </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <h3 className="title instructor-text"><a href="course-details.html">Information
                                                About UI/UX Design Degree</a></h3>
                                        <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                                <img src="assets/img/icon/icon-01.svg" alt/>
                                                <p>12+ Lesson</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                                <img src="assets/img/icon/icon-02.svg" alt/>
                                                <p>9hr 30min</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                                        </div>
                                        <div className="all-btn all-category d-flex align-items-center">
                                            
                                            <Link to="/Payment" className="btn btn-primary">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="course-box d-flex aos" data-aos="fade-up">
                                <div className="product">
                                    <div className="product-img">
                                        <a href="course-details.html">
                                            <img className="img-fluid" alt src="assets/img/course/course-02.jpg"/>
                                        </a>
                                        <div className="price">
                                            <h3>$400 <span>$99.00</span></h3>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user2.jpg"
                                                        alt className="img-fluid"/></a>
                                                <div className="course-name">
                                                    <h4><a href="instructor-profile.html">Jenis R.</a></h4>
                                                    <p>Instructor</p>
                                                </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <h3 className="title instructor-text"><a href="course-details.html">Wordpress for
                                                Beginners - Master Wordpress Quickly</a></h3>
                                        <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                                <img src="assets/img/icon/icon-01.svg" alt/>
                                                <p>11+ Lesson</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                                <img src="assets/img/icon/icon-02.svg" alt/>
                                                <p>6hr 30min</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating"><span>4.3</span> (15)</span>
                                        </div>
                                        <div className="all-btn all-category d-flex align-items-center">
                                        <Link to="/Payment" className="btn btn-primary">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="course-box d-flex aos" data-aos="fade-up">
                                <div className="product">
                                    <div className="product-img">
                                        <a href="course-details.html">
                                            <img className="img-fluid" alt src="assets/img/course/course-03.jpg"/>
                                        </a>
                                        <div className="price combo">
                                            <h3>FREE</h3>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user5.jpg"
                                                        alt className="img-fluid"/></a>
                                                <div className="course-name">
                                                    <h4><a href="instructor-profile.html">Jesse Stevens</a></h4>
                                                    <p>Instructor</p>
                                                </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <h3 className="title instructor-text"><a href="course-details.html">Sketch from A to
                                                Z (2022): Become an app designer</a></h3>
                                        <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                                <img src="assets/img/icon/icon-01.svg" alt/>
                                                <p>16+ Lesson</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                                <img src="assets/img/icon/icon-02.svg" alt/>
                                                <p>12hr 30min</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating"><span>4.5</span> (15)</span>
                                        </div>
                                        <div className="all-btn all-category d-flex align-items-center">
                                        <Link to="/Payment" className="btn btn-primary">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="course-box d-flex aos" data-aos="fade-up">
                                <div className="product">
                                    <div className="product-img">
                                        <a href="course-details.html">
                                            <img className="img-fluid" alt src="assets/img/course/course-04.jpg"/>
                                        </a>
                                        <div className="price">
                                            <h3>$500 <span>$99.00</span></h3>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user4.jpg"
                                                        alt className="img-fluid"/></a>
                                                <div className="course-name">
                                                    <h4><a href="instructor-profile.html">Nicole Brown</a></h4>
                                                    <p>Instructor</p>
                                                </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <h3 className="title instructor-text"><a href="course-details.html">Learn Angular
                                                Fundamentals From beginning to advance lavel</a></h3>
                                        <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                                <img src="assets/img/icon/icon-01.svg" alt/>
                                                <p>10+ Lesson</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                                <img src="assets/img/icon/icon-02.svg" alt/>
                                                <p>8hr 30min</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating"><span>4.2</span> (15)</span>
                                        </div>
                                        <div className="all-btn all-category d-flex align-items-center">
                                        <Link to="/Payment" className="btn btn-primary">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="course-box d-flex aos" data-aos="fade-up">
                                <div className="product">
                                    <div className="product-img">
                                        <a href="course-details.html">
                                            <img className="img-fluid" alt src="assets/img/course/course-05.jpg"/>
                                        </a>
                                        <div className="price">
                                            <h3>$300 <span>$99.00</span></h3>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user3.jpg"
                                                        alt className="img-fluid"/></a>
                                                <div className="course-name">
                                                    <h4><a href="instructor-profile.html">John Smith</a></h4>
                                                    <p>Instructor</p>
                                                </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <h3 className="title instructor-text"><a href="course-details.html">Build Responsive
                                                Real World Websites with HTML5 and CSS3</a></h3>
                                        <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                                <img src="assets/img/icon/icon-01.svg" alt/>
                                                <p>13+ Lesson</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                                <img src="assets/img/icon/icon-02.svg" alt/>
                                                <p>10hr 30min</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating"><span>4.0</span> (15)</span>
                                        </div>
                                        <div className="all-btn all-category d-flex align-items-center">
                                        <Link to="/Payment" className="btn btn-primary">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex">
                            <div className="course-box d-flex aos" data-aos="fade-up">
                                <div className="product">
                                    <div className="product-img">
                                        <a href="course-details.html">
                                            <img className="img-fluid" alt src="assets/img/course/course-06.jpg"/>
                                        </a>
                                        <div className="price combo">
                                            <h3>FREE</h3>
                                        </div>
                                    </div>
                                    <div className="product-content">
                                        <div className="course-group d-flex">
                                            <div className="course-group-img d-flex">
                                                <a href="instructor-profile.html"><img src="assets/img/user/user6.jpg"
                                                        alt className="img-fluid"/></a>
                                                <div className="course-name">
                                                    <h4><a href="instructor-profile.html">Stella Johnson</a></h4>
                                                    <p>Instructor</p>
                                                </div>
                                            </div>
                                            <div className="course-share d-flex align-items-center justify-content-center">
                                                <a href="#"><i className="fa-regular fa-heart"></i></a>
                                            </div>
                                        </div>
                                        <h3 className="title instructor-text"><a href="course-details.html">C# Developers
                                                Double Your Coding Speed with Visual Studio</a></h3>
                                        <div className="course-info d-flex align-items-center">
                                            <div className="rating-img d-flex align-items-center">
                                                <img src="assets/img/icon/icon-01.svg" alt/>
                                                <p>7+ Lesson</p>
                                            </div>
                                            <div className="course-view d-flex align-items-center">
                                                <img src="assets/img/icon/icon-02.svg" alt/>
                                                <p>7hr 30min</p>
                                            </div>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating"><span>4.6</span> (15)</span>
                                        </div>
                                        <div className="all-btn all-category d-flex align-items-center">
                                        <Link to="/Payment" className="btn btn-primary">BUY NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="section master-skill">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="section-header aos" data-aos="fade-up">
                            <div className="section-sub-head">
                                <span>What’s New</span>
                                <h2>Master the skills to drive your career</h2>
                            </div>
                        </div>
                        <div className="section-text aos" data-aos="fade-up">
                            <p>Get certified, master modern tech skills, and level up your career — whether you’re
                                starting out or a seasoned pro. 95% of eLearning learners report our hands-on content
                                directly helped their careers.</p>
                        </div>
                        <div className="career-group aos" data-aos="fade-up">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                        <div className="get-certified d-flex align-items-center">
                                            <div className="blur-box">
                                                <div className="certified-img ">
                                                    <img src="assets/img/icon/icon-1.svg" alt className="img-fluid"/>
                                                </div>
                                            </div>
                                            <p>Stay motivated with engaging instructors</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                        <div className="get-certified d-flex align-items-center">
                                            <div className="blur-box">
                                                <div className="certified-img ">
                                                    <img src="assets/img/icon/icon-2.svg" alt className="img-fluid"/>
                                                </div>
                                            </div>
                                            <p>Keep up with in the latest in cloud</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                        <div className="get-certified d-flex align-items-center">
                                            <div className="blur-box">
                                                <div className="certified-img ">
                                                    <img src="assets/img/icon/icon-3.svg" alt className="img-fluid"/>
                                                </div>
                                            </div>
                                            <p>Get certified with 100+ certification courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex">
                                    <div className="certified-group blur-border d-flex">
                                        <div className="get-certified d-flex align-items-center">
                                            <div className="blur-box">
                                                <div className="certified-img ">
                                                    <img src="assets/img/icon/icon-4.svg" alt className="img-fluid"/>
                                                </div>
                                            </div>
                                            <p>Build skills your way, from labs to courses</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 d-flex align-items-end">
                        <div className="career-img aos" data-aos="fade-up">
                            <img src="assets/img/join.png" alt className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  


        <section className="section become-instructors aos" data-aos="fade-up">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 d-flex">
                        <div className="student-mentor cube-instuctor ">
                            <h4>Become An Instructor</h4>
                            <div className="row">
                                <div className="col-lg-7 col-md-12">
                                    <div className="top-instructors">
                                        <p>Top instructors from around the world teach millions of students on
                                            Mentoring.</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12">
                                    <div className="mentor-img">
                                        <img className="img-fluid" alt src="assets/img/become-02.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 d-flex">
                        <div className="student-mentor yellow-mentor">
                            <h4>Transform Access To Education</h4>
                            <div className="row">
                                <div className="col-lg-8 col-md-12">
                                    <div className="top-instructors">
                                        <p>Create an account to receive our newsletter, course recommendations and
                                            promotions.</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="mentor-img">
                                        <img className="img-fluid" alt src="assets/img/become-01.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        


        <section className="section latest-blog">
            <div className="container">
                <div className="section-header aos" data-aos="fade-up">
                    <div className="section-sub-head feature-head text-center mb-0">
                        <h2>Latest Blogs</h2>
                        <div className="section-text aos" data-aos="fade-up">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean
                                accumsan bibendum gravida maecenas augue elementum et neque. Suspendisse imperdiet.</p>
                        </div>
                    </div>
                </div>
                <div className="owl-carousel blogs-slide owl-theme aos" data-aos="fade-up">
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-01.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">Attract More Attention Sales And Profits</a></h5>
                            <p>Marketing</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>Jun 15, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-02.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">11 Tips to Help You Get New Clients</a></h5>
                            <p>Sales Order</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>May 20, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-03.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">An Overworked Newspaper Editor</a></h5>
                            <p>Design</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>May 25, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-04.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">A Solution Built for Teachers</a></h5>
                            <p>Seo</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>Jul 15, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-02.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">Attract More Attention Sales And Profits</a></h5>
                            <p>Marketing</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>Sep 25, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-03.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">An Overworked Newspaper Editor</a></h5>
                            <p>Marketing</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>May 25, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-04.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">A Solution Built for Teachers</a></h5>
                            <p>Analysis</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>May 15, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-02.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">11 Tips to Help You Get New Clients</a></h5>
                            <p>Development</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>Jun 20, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-03.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">An Overworked Newspaper Editor</a></h5>
                            <p>Sales</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>May 25, 2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="instructors-widget blog-widget">
                        <div className="instructors-img">
                            <a href="blog-list.html">
                                <img className="img-fluid" alt src="assets/img/blog/blog-04.jpg"/>
                            </a>
                        </div>
                        <div className="instructors-content text-center">
                            <h5><a href="blog-list.html">A Solution Built for Teachers</a></h5>
                            <p>Marketing</p>
                            <div className="student-count d-flex justify-content-center">
                                <i className="fa-solid fa-calendar-days"></i>
                                <span>April 15, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="enroll-group aos" data-aos="fade-up">
                    <div className="row ">
                        <div className="col-lg-4 col-md-6">
                            <div className="total-course d-flex align-items-center">
                                <div className="blur-border">
                                    <div className="enroll-img ">
                                        <img src="assets/img/icon/icon-07.svg" alt className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="course-count">
                                    <h3><span className="counterUp">253,085</span></h3>
                                    <p>STUDENTS ENROLLED</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="total-course d-flex align-items-center">
                                <div className="blur-border">
                                    <div className="enroll-img ">
                                        <img src="assets/img/icon/icon-08.svg" alt className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="course-count">
                                    <h3><span className="counterUp">1,205</span></h3>
                                    <p>TOTAL COURSES</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="total-course d-flex align-items-center">
                                <div className="blur-border">
                                    <div className="enroll-img ">
                                        <img src="assets/img/icon/icon-09.svg" alt className="img-fluid"/>
                                    </div>
                                </div>
                                <div className="course-count">
                                    <h3><span className="counterUp">127</span></h3>
                                    <p>COUNTRIES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lab-course">
                    <div className="section-header aos" data-aos="fade-up">
                        <div className="section-sub-head feature-head text-center">
                            <h2>Unlimited access to 360+ courses <br/>and 1,600+ hands-on labs</h2>
                        </div>
                    </div>
                    <div className="icon-group aos" data-aos="fade-up">
                        <div className="offset-lg-1 col-lg-12">
                            <div className="row">
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-09.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-10.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-16.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-12.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-13.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-14.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-15.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-16.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-17.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-1 col-3">
                                    <div className="total-course d-flex align-items-center">
                                        <div className="blur-border">
                                            <div className="enroll-img ">
                                                <img src="assets/img/icon/icon-18.svg" alt className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



      <Footer/>
        </div>
    );
};

export default Home;
