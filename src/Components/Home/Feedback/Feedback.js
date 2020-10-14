import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './Feedback.css';

const Feedback = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addNewReview')
        .then(res => res.json())
        .then(data => setFeedback(data))
    },[])

    return (
        <div className="feedback">
            <div className="container">
                <div className="row">
                    <h1 className="m-auto text-center"><span style={{color: '#171B4E'}}>Clients </span><span style={{color: '#7AB259'}}>Feedback</span></h1>
                </div>
                <div className="clientFeedback">
                    <div className="row">
                        {
                            feedback.map(feedback => 
                                <div className="col-md-4 col-sm-12">
                                    <Card className="card">
                                        <div className="card-title">
                                            <div className="mt-4 ml-3">
                                                <img className="reviewImg animation" src={feedback.pic} alt="service" style={{width: '50px'}} />
                                            </div>
                                            <div className='mt-3 ml-3'>
                                                <h4>{feedback.name}</h4>
                                                <p>{feedback.companyName}</p>
                                            </div>
                                        </div>
                                        <div className='ml-3 mr-3'>
                                            <span style={{color: 'gray'}}>{feedback.description}</span>
                                        </div>
                                    </Card>
                                </div>
                            )
                            .slice(0,6)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;