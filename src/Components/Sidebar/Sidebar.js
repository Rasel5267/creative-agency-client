import React from 'react';
import './Sidebar.css';
import logo from '../../images/logos/logo.png';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="col-md-2 col-sm-12">
            <Link to="/">
                <img style={{width: '150px'}} src={logo} alt="logo"/>
            </Link>
            <div className="links mt-5">
                <p>
                    <Link className="link active" to='/orders'><i class="fas fa-shopping-cart"></i> Order</Link>
                </p>
                <p>
                    <Link className="link" to='/serviceList'><i class="fas fa-cog"></i> Service List</Link>
                </p>
                <p>
                    <Link className="link" to='/review'><i class="fas fa-comment-alt"></i> Review</Link>
                </p>
                <p>
                    <Link className="link" to='/projectList'><i class="fas fa-cog"></i> service List</Link>
                </p>
                <p>
                    <Link className="link" to='/addService'><i class="fas fa-plus"></i> Add Service</Link>
                </p>
                <p>
                    <Link className="link" to='/makeAdmin'><i class="fas fa-user-plus"></i> Make Admin</Link>
                </p>
            </div>
        </div>
    );
};

export default Sidebar;