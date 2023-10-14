import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import NavbarAdmin from '../../Components/NavbarAdmin';


function AdminList() {

    const [admin, setAdmin] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3700/admin');
                setAdmin(response.data); // Assuming the response.data is an array of admin data
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);


    return (
        <div>
            <NavbarAdmin />
            
            <div className='min-vh-100 '>

                <table className="table" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Role</th>
                            <th scope="col">Day Of Birth</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin.map((item, index) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.Firstname}</td>
                                <td>{item.Lastname}</td>
                                <td>{item.Email}</td>
                                <td>{item.Phone}</td>
                                <td>{item.Role}</td>
                                <td>{item.Age}</td>
                                <td> <button type="button" class="btn btn-warning">Update</button> &nbsp;
                                    <button type="button" class="btn btn-danger" >Delete</button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>

    );
}

export default AdminList;
