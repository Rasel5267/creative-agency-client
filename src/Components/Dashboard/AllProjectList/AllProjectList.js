import React, { useEffect } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './AllProjectList.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { Table } from 'react-bootstrap';


const AllProjectList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [allProjectList, setAllProjectList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProject')
        .then(res => res.json())
        .then(data => setAllProjectList(data))
    },[])
    return (
        <div className="allProjectList">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>All Projects</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="addService-card mb-5">
                        <div className="mt-5 col-md-12 col-sm-12">
                            <Table size="lg" style={{fontSize: '12px'}}>
                                <thead>
                                    <tr>
                                        <th style={{width: '18%'}}>Name</th>
                                        <th style={{width: '20%'}}>Email</th>
                                        <th style={{width: '22%'}}>Service</th>
                                        <th style={{width: '30%'}}>Project Details</th>
                                        <th style={{width: '10%'}}>Status</th>
                                    </tr>
                                </thead>
                                    {
                                        allProjectList.map(project =>
                                            <tbody>
                                                <tr>
                                                    <td>{project.name}</td>
                                                    <td>{project.email}</td>
                                                    <td>{project.title}</td>
                                                    <td>{project.projectDtl}</td>
                                                    <td>
                                                        <select style={{border: 'none', outline: 'none'}}>
                                                            <option selected>Pending</option>
                                                            <option>On Going</option>
                                                            <option>Done</option>
                                                        </select>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjectList;