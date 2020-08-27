import React from 'react';
import logo from '../../images/mydemy-removebg.png';
import './Header.css'


const Header = () => {
    return (
        <div className= "header">
            <img src={logo} alt="Website Logo"/>
            <nav>
                <a href="/account">Profile</a>
                <a href="/active-course">  Active Course</a>
                <a href="/wish-list">  Wish List</a>
                
            </nav>
        </div>
    );
};

export default Header;