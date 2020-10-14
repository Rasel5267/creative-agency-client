import React from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({newService}) => {
    return (
        <div className="col-md-4 col-sm-12">
            <Card style={{height: '230px'}}>
                <div className="icon mt-3">
                   {
                        newService.image ? <img className="animation" style={{width: '50px',}} src={`data:image/png;base64,${newService.image.img}`} alt="icon"/>
                        :
                        <img className="animation" style={{width: '50px',}} src={`https://hidden-retreat-77167.herokuapp.com/${newService.img}`} alt="icon"/>
                   }
                </div>
                <div className="pl-2 pr-2">
                    <Link to='/orders'>
                        <h2 style={{color: '#000'}} className = "mt-2">{newService.title}</h2>
                    </Link>
                    <p>{newService.description}</p>
                </div>
            </Card>
        </div>
    );
};

export default ServiceCard;