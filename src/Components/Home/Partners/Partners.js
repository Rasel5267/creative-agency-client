import React from 'react';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const Partners = () => {
    return (
        <div className="container mt-5">
            <div className="row d-flex justify-content-center">
                <div className="col-md-2 mb-5 mr-5 col-sm-6">
                    <img src={slack} style={{height: '50px'}} class="img-fluid" alt="slack"/>
                </div>
                <div className="col-md-2 mb-5 mr-5 col-sm-6">
                    <img src={google} style={{height: '50px'}} class="img-fluid" alt="google"/>
                </div>
                <div className="col-md-2 mb-5 col-sm-6">
                    <img src={uber} style={{height: '50px'}} class="img-fluid" alt="uber"/>
                </div>
                <div className="col-md-2 mb-5 col-sm-6">
                    <img src={netflix} style={{height: '55px'}} class="img-fluid" alt="netflix"/>
                </div>
                <div className="col-md-2 mb-5 col-sm-6">
                    <img src={airbnb} style={{height: '50px'}} class="img-fluid" alt="airbnb"/>
                </div>
            </div>
        </div>
    );
};

export default Partners;