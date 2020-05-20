import React, { Component, Fragment } from "react"
import { Route} from 'react-router-dom';
import Login from "../Components/login"
import Signup from "../Components/signup"

import API from "../API"

class Unauthorised extends Component {
   state = {
       signup:false, 
       user: {
                username:"",
                password: "",
                motto: "",
                email: "",
                password_confirmation:""
       }
   }


   handleChange = ({target: {name, value}}) => {
    this.setState({
        user:{ ...this.state.user,[name]:value
        }
     })
   }

    handleSignUp = () => {
        API.signUpUser(this.state.user)
        .then(API.parseJson)
        .then(data => this.props.login(data))
        .catch(err => {
            console.log(err)
        })
    }   

    handleLogin = () => {
        API.logInUser(this.state.user)
        .then(API.parseJson)
        .then(data => this.props.login(data))
        .catch(err => {
            console.log(err)
        })
    }

    signup = () => {
         this.setState({
             signup: !this.state.signup
         })
    }
  
    render = () => {
    return (
      <Fragment>
         
            {this.state.signup? <Signup handlechange= { this.handleChange} handlesubmit ={ this.handleSignUp} />
            :<Login signup = {this.signup} handlechange= { this.handleChange} handlesubmit ={ this.handleLogin}/>  }  
          
     </Fragment>
    );
  
    }
  }

  export default Unauthorised