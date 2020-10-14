import React from 'react';
import './Sidebar.css';
import logo from '../../images/logos/logo.png';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin , setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://hidden-retreat-77167.herokuapp.com/isAdmin',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})            
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])



    return (
        <div className="col-md-2 col-sm-12">
            <Link to="/">
                <img style={{width: '150px'}} src={logo} alt="logo"/>
            </Link>
            <div className="links mt-5">
            {isAdmin ?
                <div>
                    <p>
                        <Link className="link" to='/projectList'><i class="fas fa-cog"></i> All service List</Link>
                    </p>
                    <p>
                        <Link className="link" to='/addService'><i class="fas fa-plus"></i> Add Service</Link>
                    </p>
                    <p>
                        <Link className="link" to='/makeAdmin'><i class="fas fa-user-plus"></i> Make Admin</Link>
                    </p>
                </div>
                :
                <div>
                    <p>
                        <Link className="link active" to='/orders'><i class="fas fa-shopping-cart"></i> Order</Link>
                    </p>
                    <p>
                        <Link className="link" to='/serviceList'><i class="fas fa-cog"></i> Service List</Link>
                    </p>
                    <p>
                        <Link className="link" to='/review'><i class="fas fa-comment-alt"></i> Review</Link>
                    </p>
                </div>
            }
            </div>
        </div>
    );
};

export default Sidebar;