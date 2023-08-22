import React from 'react';
import Footer from '../../Components/Footer';
import NavbarStudentD from '../../Components/NavbarStudentD';
import NavbarStudent from '../../Components/NavbarStudent';


const StudentCourse = () => {
  return (
    <section className="course-content">
        <NavbarStudent/>
        <NavbarStudentD/>
        
      <div className="container">
        <div className="student-widget">
          <div className="student-widget-group">
            <div className="row">
              <div className="col-lg-12">
                <div className="showing-list">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="show-filter choose-search-blk">
                        <form action="#">
                          <div className="mycourse-student align-items-center">
                            <div className="student-search">
                              <div className="search-group">
                                <i className="feather-search"></i>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search our courses"
                                />
                              </div>
                            </div>
                            <div className="student-filter">
                              <div className="form-group select-form mb-0">
                                <select
                                  className="form-select select"
                                  name="sellist1"
                                >
                                  <option>Newly published</option>
                                  <option>Angular</option>
                                  <option>React</option>
                                  <option>Node</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img
                          className="img-fluid"
                          alt=""
                          src="assets/img/course/course-10.jpg"
                        />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">
                          Information About UI/UX Design Degree
                        </a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">
                            <span>4.0</span>
                          </span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">
                          Start Lesson
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 d-flex">
                <div className="course-box course-design d-flex ">
                  <div className="product">
                    <div className="product-img">
                      <a href="course-details.html">
                        <img className="img-fluid" alt="" src="assets/img/course/course-10.jpg" />
                      </a>
                    </div>
                    <div className="product-content">
                      <h3 className="title">
                        <a href="course-details.html">Information About UI/UX Design Degree</a>
                      </h3>
                      <div className="rating-student">
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating"><span>4.0</span></span>
                        </div>
                        <div className="edit-rate">
                          <a href="javascript:;">Edit rating</a>
                        </div>
                      </div>
                      <div className="progress-stip">
                        <div className="progress-bar bg-success progress-bar-striped active-stip"></div>
                      </div>
                      <div className="student-percent">
                        <p>35% Completed</p>
                      </div>
                      <div className="start-leason d-flex align-items-center">
                        <a href="course-lesson.html" className="btn btn-primary">Start Lesson</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repeat the above code for other course boxes */}
              
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
    
  );
};

export default StudentCourse;