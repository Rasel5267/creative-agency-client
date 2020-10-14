import React from 'react';
import {Link} from 'react-router-dom';
import './Review.css';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Sidebar from '../../Sidebar/Sidebar';


const Review = () => {
    const [loggedInUser ] = useContext(UserContext);
    const [newReview, setNewReview] = useState({
        name: '',
        companyName: '',
        description: ''
    });

    const handleReview = () => {
        const newReviewValue = {...loggedInUser, ...newReview};
        fetch('http://localhost:5000/addReview',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newReviewValue)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
      }


    const handleReviewChange = e => {
        const newReviewInfo = {...newReview};
        newReviewInfo[e.target.name] = e.target.value;
        setNewReview(newReviewInfo);
    }

    return (
        <div className="review">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 col-sm-12 placeOrder">
                    <div className="col title">
                        <h4>Review</h4>
                        <h4 className="ml-auto">{loggedInUser.name}</h4>
                    </div>
                    <div className="mt-5 col-md-6 col-sm-12">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onChange={handleReviewChange} name="name" type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onChange={handleReviewChange} name="companyName" type="text" placeholder="Company's Name, Designation" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control onChange={handleReviewChange} name="description" placeholder="Project Details" as="textarea" rows="3" />
                            </Form.Group>
                            <Link className="link" to='/'>
                                <Button onClick={handleReview} className='mb-5' variant="dark pl-4 pr-4">Send</Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;