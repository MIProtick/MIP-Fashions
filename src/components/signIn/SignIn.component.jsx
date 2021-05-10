import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.style.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  
  handleSubmit = async event =>{
    event.preventDefault();
    
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email:'', password:''});
    } catch (error) {
      console.log("Error occured in Sign-in process.")
    }
  }
  
  handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value});
  }
  
  render() {
    return (
      <div className='sign-in'>
        <h2 className='title'> I Already Have An Account !! </h2>
        <span> Sign In with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" label="Email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
          <FormInput type="password" label="Password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
          
          <div className="button-box">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} customStyleClass='google-signin'> Sign In  With Google</CustomButton>
          </div>
          
        </form>
      </div>
    )
  }
}

export default SignIn
