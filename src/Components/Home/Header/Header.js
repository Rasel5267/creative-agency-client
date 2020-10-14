import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HeaderContainer from '../HeaderContainer/HeaderContainer';

const Header = () => {
    return (
        <div className="header">
            <Navigation />
            <HeaderContainer />
        </div>
    );
};

export default Header;