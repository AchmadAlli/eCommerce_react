import React, { Component } from 'react'
import './sign-in.style.scss'
import FormInput from '../Form-input/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'
import {SignInWithGoogle} from '../Firebase/firebase.utils'

export class SignIn extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }
  
  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span> Sign with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange = {this.handleChange}
            value= {this.state.email}
            label= "email"
            required
          />

          <FormInput
            name="password"
            type="password"
            handleChange = {this.handleChange}
            value= {this.state.password}
            label= "Password"
            required
          />

          <CustomButton type="submit"> SIGN IN </CustomButton>
          <CustomButton onClick={SignInWithGoogle} > SIGN IN WITH GOOGLE </CustomButton>
          
        </form>
        
      </div>
    )
  }
}

export default SignIn;
