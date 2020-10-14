import React, {useState, useEffect} from 'react';
import './Service.css';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [newService, setNewService] = useState([]);
    useEffect( () => {
        fetch('https://hidden-retreat-77167.herokuapp.com/newService')
        .then(res => res.json())
        .then(data => setNewService(data))
    }, [])

    return (
        <div className="service mt-5 mb-5">
            <h1 className="mt-5 mb-3 text-center"><span style={{color: '#171B4E'}}>Provide awesome </span><span style={{color: '#7AB259'}}>services</span></h1>
            <div className="serviceCard text-center">
                <div className="row">
                    {
                        newService.map(newService => <ServiceCard newService={newService}></ServiceCard>).slice(0,6)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;