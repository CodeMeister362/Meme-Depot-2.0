import React from 'react';
import logo from '../assets/logo.png';
import '../App.css';

const Header = () => {
    return (
        <header className='header-content'>
            <img src={logo} alt="Meme Depot Logo" />
            <h1>2.0</h1>
        </header>
    );
}


export default Header;