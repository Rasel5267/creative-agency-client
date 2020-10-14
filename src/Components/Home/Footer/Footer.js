import React from 'react';
import { Button, Form} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer mt-5" style={{backgroundColor: '#fbd062'}}>
            <div className="container">
                <div className="pt-5">
                    <div className="row">
                            <div className="col-md-5 mr-5 col-ms-12">
                                <h2>Let us handle your project, professionally.</h2>
                                <p>With well written coders. We build amazing apps for all platforms,mobiles and web apps in general.</p>
                            </div>
                            <div className="col-md-5 ml-5 col-ms-12">
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows="8" />
                                    </Form.Group>
                                    <Button className='mb-5' variant="dark pl-4 pr-4">Send</Button>
                                </Form>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center mb-3">
                        <p>copyright @ 2020 All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;