import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return  (
        <nav className='nav'>
            <div>
                <a className='item'>Profile</a>
            </div>
            <div>
                <a className='item'>Messages</a>
            </div>
            <div>
                <a className='item'>News</a>
            </div>
            <div>
                <a className='item'>Music</a>
            </div>
            <div>
                <a className='item'>Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;