import React, { Component } from 'react';
import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';
import './SignIn.style.scss';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }
  
  handleSubmit = event =>{
    event.preventDefault();
    this.setState({email:'', password:''});
  }
  
  handleChange = event =>{
    const {value, name} = event.target;
    this.setState({[name]:value});
  }
  
  render() {
    return (
      <div className='sign-in'>
        <h1> I Already Have A Account !! </h1>
        <span> Sign In with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput type="email" label="Email" name="email" value={this.state.email} handleChange={this.handleChange} required/>
          <FormInput type="password" label="Password" name="password" value={this.state.password} handleChange={this.handleChange} required/>
          
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn
