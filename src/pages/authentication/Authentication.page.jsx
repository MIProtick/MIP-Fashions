import React from 'react';

import SignIn from '../../components/signIn/SignIn.component';
import SignUp from '../../components/signUp/SignUp.component';

import './Authentication.style.scss';

const Authentication = () => {
    return (
        <div className='authentication'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Authentication
