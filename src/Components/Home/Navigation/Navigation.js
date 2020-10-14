import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { UserContext } from '../../../App';

const Navigation = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: ''
    })

    let buttons;

    const handleSignOut = () => {
        firebase.auth().signOut()
        .then(res => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: ''
            }
            setUser(signOutUser);
            setLoggedInUser(signOutUser);
          }).catch(function(error) {
            // An error happened.
          });
    }

    if(loggedInUser.email){
        buttons = (
            <NavDropdown title={loggedInUser.name} id="basic-nav-dropdown" >
                <NavDropdown.Item><Link to="/orders" className = "link">Dashboard</Link></NavDropdown.Item>
                <NavDropdown.Item onClick={handleSignOut}>Log Out</NavDropdown.Item>
            </NavDropdown>
        )
    }
    else{
        buttons = (
            <Link to="/login">
                <Button variant="dark pl-4 pr-4">Login</Button>
            </Link>
        )
    }
    return (
        <div class="container">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <Link to="/">
                        <img style={{width: '150px'}} src={logo} alt="logo"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto pl-5">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Our Portfolio</Nav.Link>
                        <Nav.Link href="#home">Our Team</Nav.Link>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        {buttons}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Navigation;