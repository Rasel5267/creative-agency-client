import React from 'react';
import {Link, useHistory, useLocation} from "react-router-dom";
import logo from '../../images/logos/logo.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';


firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        pic: '',
    })
    
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email, photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                pic: photoURL,
            } 
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            storeAuthToken();
        }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
        }).catch(function(error) {
            //Handle error
        });
    }
    
    return (
        <div className = 'logIn'>                
            <Link to="/">
                <img src={logo} alt="logo" className="logo"/>    
            </Link>
            <div className="logInForm">
                <div className="logInMethod">
                    <h3>Login With</h3>
                    <Link to="/orders">
                        <button onClick={handleGoogleSignIn} className ='logInBtn'> <i class="fab fa-google"></i> <span>Continue with Google</span></button>
                    </Link>
                    <p className ='createAccountBtn'>Don't have an account? <Link>Creat an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;