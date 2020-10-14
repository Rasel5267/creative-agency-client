import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import service1 from '../../../images/icons/service2.png';

const Service = () => {
    const [newService, setNewService] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/newService')
        .then(res => res.json())
        .then(data => setNewService(data))
    }, [])

    return (
        <div className="service mt-5 mb-5">
            <h1 className="mt-5 mb-3 text-center"><span style={{color: '#171B4E'}}>Provide awesome </span><span style={{color: '#7AB259'}}>services</span></h1>
            <div className="serviceCard text-center">
                <div className="row">
                    {
                        newService.map(newService =>
                            <div className="col-md-4 col-sm-12">
                                <Card style={{height: '230px'}}>
                                    <div className="icon mt-3">
                                        <img style={{width: '50px',}} src={service1} alt="icon"/>
                                    </div>
                                    <div className="pl-2 pr-2">
                                        <Link to='/orders'>
                                            <h2 style={{color: '#000'}} className = "mt-2">{newService.title}</h2>
                                        </Link>
                                        <p>{newService.description}</p>
                                    </div>
                                </Card>
                            </div>
                        )
                        .slice(0,6)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;