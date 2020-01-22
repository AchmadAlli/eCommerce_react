import React, { Component } from 'react'
import {auth, initProfile} from '../../firebase/firebase.utils'
import FormInput from '../Form-input/form-input.component'
import CustomButton from '../Custom-button/custom-button.component'
import './sign-up.style.scss'

class SignUp extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  submitHandler = async event => {
    event.preventDefault()

    const {displayName, email, password} = this.state

    if(this.isUnequalPassword(event)){
      alert('Password is Not Same')
      return;
    }

    try {
      const {user}  = await auth.createUserWithEmailAndPassword(email, password)
      const userObj = {
        ...user, 
        displayName
      }

      await initProfile(userObj)
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })      
    } catch (error) {
     console.log('Error create user' + error.message) 
    }
  }

  changeHandler = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  isUnequalPassword(data){
    return data.target.password === data.target.confirmPassword
  }

  render() {
    let {displayName, email, password, confirmPassword} = this.state

    return (
      <div className="sign-up">
        <h2 className="title"> I dont have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.submitHandler}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.changeHandler}
            label="Display Name"
            required
          />

          <FormInput 
            type="email"
            name="email"
            value={email}
            onChange={this.changeHandler}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.changeHandler}
            label="Password"
            required
          />

          <FormInput 
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.changeHandler}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit"> Sign Up</CustomButton>
        </form>
        
      </div>
    )
  }
}

export default SignUp