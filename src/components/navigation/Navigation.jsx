import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

const Navigation = () => {

    const token = localStorage.getItem('token');

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Navbar</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li> */}
                        {
                            token?(
                                <>
                                <li className="nav-item">
                                 <Link to='/dashboard' className="nav-link">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/account' className="nav-link">My Account</Link>
                                </li>
                                <li className="nav-item logout">
                                <Link to='/logout' className="nav-link"><i class="fas fa-sign-out-alt"></i> Logout</Link>
                                </li>
                                </>
                            ):
                            (
                                <>
                                <li className="nav-item">
                                <Link to='/Signin' className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                <Link to='/Register' className="nav-link">Register</Link>
                                </li>
                                </>
                            )
                        }
                        
                    </ul>
                    {/* <div className="cart">
                       <Link to='/Cartdetail' className="cart_sec">Cart Item ({totalitems})</Link>
                    </div>                    */}
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Navigation
