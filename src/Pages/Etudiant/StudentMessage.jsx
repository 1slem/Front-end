import React from 'react';
import Footer from '../../Components/Footer';

import NavbarStudentD from '../../Components/NavbarStudentD';
import NavbarStudent from '../../Components/NavbarStudent';




function StudentMessage() {
  return (
    <section className="page-content course-sec course-message">
        <NavbarStudent/>
        <NavbarStudentD/>
      <div className="container">
        <div className="student-widget message-student-widget">
          <div className="student-widget-group">
            <div className="col-md-12">
              <div className="add-compose" style={{textAlign:'left'}}>
                <a href="javascript:;" className="btn btn-primary"><i className="fa-solid fa-plus"></i> Compose</a>
              </div>
            </div>
            <div className="col-md-12">
              <div className="chat-window">

                <div className="chat-cont-left">
                  <div className="chat-users-list">
                    <div className="chat-scroll">
                      <a href="javascript:void(0);" className="media d-flex">
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <img src="assets/img/user/user1.jpg" alt="User Image" className="avatar-img rounded-circle" />
                          </div>
                        </div>
                        <div className="media-body flex-grow-1">
                          <div>
                            <div className="user-name">Rolands R</div>
                            <div className="user-last-chat">how are you?</div>
                          </div>
                        </div>
                        
                      </a>
                      
                      {/* Repeat the above code block for other chat users */}
                    </div>
                  </div>
                </div>
                

                <div className="chat-cont-right">
                  <div className="chat-header">
                    <a id="back_user_list" href="javascript:void(0)" className="back-user-list">
                      <i className="material-icons">chevron_left</i>
                    </a>
                    <div className="media d-flex">
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-online">
                          <img src="assets/img/user/user2.jpg" alt="User Image" className="avatar-img rounded-circle" />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">Doris Brown </div>
                        <div className="user-status" style={{textAlign:'left'}}>online</div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-body" style={{textAlign:'left'}}>
                    <div className="chat-scroll">
                      <ul className="list-unstyled">
                        <li className="media received d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div className="msg-bg" >
                                <p>Hey There!</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* Repeat the above code block for other received and sent messages */}
                      </ul>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="btn-file btn">
                        <i className="fa fa-paperclip"></i>
                        <input type="file" />
                      </div>
                      <input type="text" className="input-msg-send form-control" placeholder="Type your message here..." />
                      <button type="button" className="btn btn-primary msg-send-btn rounded-pill">
                        <img src="assets/img/send-icon.svg" alt="" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default StudentMessage;