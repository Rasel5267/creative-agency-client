import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import './MakeAdmin.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { Button, Form } from 'react-bootstrap';


const MakeAdmin = () => {
    const [loggedInUser] = useContext(UserContext);
    const [newAdmin, setNewAdmin] = useState({email: ''})

    const handleNewAdmin = () => {
        const newAdminValue = {...newAdmin};
        fetch('https://hidden-retreat-77167.herokuapp.com/addAAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newAdminValue)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
      }

    const handleAdmin = (e) => {
        const newAdminEmail = {...newAdmin};
        newAdminEmail[e.target.name] = e.target.value;
        setNewAdmin(newAdminEmail);
    }

    return (
        <div className="makeAdmin">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>Make Admin</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="addService-card">
                        <div className="row">
                            <div className="mt-5 mb-5 col-md-8 col-sm-12">
                                <div className="container">
                                    <Form.Label>Email address</Form.Label>
                                    <div className="d-flex">
                                        <Form.Control type="email" name="email" onChange={handleAdmin} placeholder="Enter email" />
                                        <Button onClick={handleNewAdmin} className="ml-3 mr-3" variant="success pl-4 pr-4">Submit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;