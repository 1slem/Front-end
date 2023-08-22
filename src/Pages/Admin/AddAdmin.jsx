import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import NavbarAdmin from '../../Components/NavbarAdmin';

const AddAdmin = () => {

    const [adminData, setAdminData] = useState({
        Firstname: '',
        Lastname: '',
        Email: '',
        Password: '',
        Phone: '',
        Age: '',
        Role: 'Admin'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminData((currData) => (
            { ...currData, [name]: value }
        ));
    };

    const postAdmin = (data) => {
       
        console.log('Admin data posted:', data);
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify(adminData))
        try {
            const response = await axios.post('http://localhost:3700/admin',adminData);
            postAdmin(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        <div>
            <NavbarAdmin />
            <section className="page-content course-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="add-course-header">
                                <h2>Add New Admin</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="widget-set">
                                    <div className="widget-content multistep-form" style={{ textAlign: 'left' }}>
                                        <fieldset id="first">
                                            <div className="add-course-info">
                                                <div className="add-course-inner-header" style={{ marginTop: '20' }}>
                                                    <h4>Basic Information</h4>
                                                </div>
                                                <div className="add-course-form">
                                                    <form>
                                                        <div className="form-group">
                                                            <label className="add-course-label">First Name</label>
                                                            <input type="text" className="form-control"
                                                                name="Firstname" value={adminData.Firstname}
                                                                onChange={handleInputChange}
                                                                placeholder="First Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Last Name</label>
                                                            <input type="text" className="form-control"
                                                                name="Lastname" value={adminData.Lastname}
                                                                onChange={handleInputChange}
                                                                placeholder="Last Name" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Email</label>
                                                            <input type="email" className="form-control"
                                                                name="Email" value={adminData.Email}
                                                                onChange={handleInputChange}
                                                                placeholder="Email" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Password</label>
                                                            <input type="password" className="form-control"
                                                                name="Password" value={adminData.Password}
                                                                onChange={handleInputChange}
                                                                placeholder="Admin Password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Phone</label>
                                                            <input type="tel" className="form-control"
                                                                name="Phone" value={adminData.Phone}
                                                                onChange={handleInputChange}
                                                                placeholder="Phone Number" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Date of birth</label>
                                                            <input type="date" className="form-control"
                                                                name="Age" value={adminData.Age}
                                                                onChange={handleInputChange}
                                                                placeholder="Date of birth" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="add-course-label">Role</label>
                                                            <select className="form-control select"
                                                                name="Role" value={adminData.Role}
                                                                onChange={handleInputChange}>
                                                                <option value="Admin">Admin</option>
                                                                <option value="Teacher">Teacher</option>
                                                                <option value="Student">Student</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group mb-0">
                                                            <label className="add-course-label">Course Description</label>
                                                            <div id="editor"></div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="add-course-btns">
                                                    <ul className="nav">
                                                        <li>
                                                            <a href="dashboard-instructor.html" className="btn btn-black">Cancel</a>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="btn btn-success-dark" onClick={handleSubmit}>Add</button>
                                                        </li>
                                                    </ul>
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

export default AddAdmin;
