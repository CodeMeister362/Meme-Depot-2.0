import React from 'react';
import logo from '../assets/logo.png';
import '../App.css';

const Header = () => {
    return (
        <header className='header-content'>
            <img src={logo} alt="Meme Depot Logo" />
            <h2>2.0</h2>
        </header>
    );
}


export default Header;