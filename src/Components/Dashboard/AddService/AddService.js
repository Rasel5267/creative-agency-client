import React from 'react';
import './AddService.css';
import {Link} from 'react-router-dom';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AddService = () => {
    const [loggedInUser] = useContext(UserContext);
    const [addService, setAddService] = useState({
        title: '',
        description: '',
    });

    const handleAddService = () => {
        const newServiceValue = {...loggedInUser,...addService};
        fetch('http://localhost:5000/addNewService',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newServiceValue)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
      }


    const handleService = e => {
        const newServiceInfo = {...addService};
        newServiceInfo[e.target.name] = e.target.value;
        setAddService(newServiceInfo);
    }
    return (
        <div className="addService">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>Add Service</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="addService-card">
                        <div className="mt-5 col-md-8 col-sm-12">
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Service Title</Form.Label>
                                            <Form.Control onChange={handleService} type="text" name="title" placeholder="Enter Title"/>
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control onChange={handleService} name="description" placeholder="Enter Description" as="textarea" rows="3" />
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Icon</Form.Label>
                                            <Form.Control type="file" placeholder="Upload Project File" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </div>
                    <div className="d-flex">
                        <Link className="link ml-auto" to='/'>
                            <Button onClick={handleAddService} className='mb-5 mt-3' variant="success pl-4 pr-4">Submit</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;