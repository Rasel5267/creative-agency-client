import React, { useState } from 'react';
import './ServiceList.css';
import { Card, Col, Row } from 'react-bootstrap';
import service1 from '../../../images/icons/service1.png';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Sidebar/Sidebar';

const ServiceList = () => {

    const [loggedInUser] = useContext(UserContext);
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('https://hidden-retreat-77167.herokuapp.com/project?email='+loggedInUser.email,{
            method: 'GET',
            headers: { 
                'authorization': `Bearer ${sessionStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => setProject(data))
    },[])
    return (
        <div className="service">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>Service List</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="row">
                        {
                            project.map(project => 
                                <div className="mt-5 col-md-4 col-sm-8">
                                    <Card className="card">
                                        <Row>
                                            <Col className="ml-3 mt-3">
                                                <img className="animation" src={service1} alt="service" style={{width: '50px'}} />
                                            </Col>
                                            <Col className='ml-auto mt-3'>
                                                <button className='statusBtn'>Pending</button>
                                            </Col>
                                        </Row>
                                        <Card.Body>
                                                <Card.Title>{project.title}</Card.Title>
                                            <Card.Text>{project.projectDtl}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;