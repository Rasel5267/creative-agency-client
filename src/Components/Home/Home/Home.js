import React from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Partners from '../Partners/Partners';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Partners />
            <Service />
            <OurWorks />
            <Feedback />
            <Footer />
        </div>
    );
};

export default Home;