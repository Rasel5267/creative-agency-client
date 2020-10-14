import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import {Carousel} from 'react-bootstrap';

const OurWorks = () => {
    return (
        <div className="mt-5" style={{backgroundColor: '#111430',color: '#fff'}}>
            <div className="container">
                <h2 className="text-center pt-5 pb-5">Here are some of our works</h2>
                <Carousel className="pb-5">
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img style={{width:' 500px',height:' 350px'}}  src={carousel1} alt=""/>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img style={{width:' 500px',height:' 350px'}} src={carousel2} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img style={{width:' 500px',height:' 350px'}} src={carousel3} alt=""/>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img style={{width:' 500px',height:' 350px'}} src={carousel4} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <img style={{width:' 500px',height:' 350px'}} src={carousel5} alt=""/>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <img style={{width:' 500px',height:' 350px'}} src={carousel1} alt=""/>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default OurWorks;