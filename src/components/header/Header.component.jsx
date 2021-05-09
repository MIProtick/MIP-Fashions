import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import CartIcon from '../cart/CartIcon.component';
import CartDropdown from '../cart/CartDropdown.component';
import './Header.style.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className='logo-container' to='/'>
        <Logo />
      </Link>
      <div className="menu-options">
        <Link className='option' to='/shop'> Shop </Link>
        <Link className='option' to=''> Contact </Link>
        {currentUser ?
          <div className='option' onClick={() => auth.signOut()}> Sign Out</div>
          :
          <Link className='option' to='/authentication'> Sign In </Link>
        }
        <CartIcon/>
      </div>
      {
        hidden ? null : <CartDropdown/>
      }
    </div>
  )
}

const mapStateToProps = ({ user:{currentUser}, cart:{hidden} }) => ({
  currentUser: currentUser,
  hidden: hidden,
});

export default connect(mapStateToProps)(Header);
