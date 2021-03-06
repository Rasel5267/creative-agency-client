import React from 'react';
import {Link} from 'react-router-dom';
import './Orders.css';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const Orders = () => {
    const [loggedInUser] = useContext(UserContext);
    const [userValue, setUserValue] = useState({
        title: '',
        projectDtl: '',
        price: ''
    });
    const [userPhoto , setUserPhoto] = useState(null);

    const handleChangeUserValue = () => {
        const formData = new FormData()
        formData.append('file', userPhoto);
        formData.append('title', userValue.title);
        formData.append('projectDtl', userValue.projectDtl);
        formData.append('name', loggedInUser.name);
        formData.append('email', loggedInUser.email);
        fetch('https://hidden-retreat-77167.herokuapp.com/addProject',{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
      }

    const handleChange = e => {
        const newUserValue = {...userValue};
        newUserValue[e.target.name] = e.target.value;
        setUserValue(newUserValue);
    }
    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setUserPhoto(newFile);
    }
    return (
        <div className="orders">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>Order</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="mt-5 col-md-6 col-sm-12">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" value={loggedInUser.name} />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" value={loggedInUser.email} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control onChange={handleChange} name="title" type="text" placeholder='Service Title' />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control onChange={handleChange} name="projectDtl" placeholder="Project Details" as="textarea" rows="3" />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control onChange={handleChange} name="price" type="number" placeholder="Price" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control onChange={handleFile} type="file" placeholder="Upload Project File" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Link className="link" to='/serviceList'>
                                <Button onClick={handleChangeUserValue} className='mb-5' variant="dark pl-4 pr-4">Send</Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;