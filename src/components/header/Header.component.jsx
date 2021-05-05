import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './Header.style.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo/>
            </Link>
            <div className="menu-options">
                <Link className='option' to='/shop'> Shop </Link>
                <Link className='option' to=''> Contact </Link>
                <Link className='option' to='/authentication'> Sign In </Link>
            </div>
        </div>
    )
}

export default Header
