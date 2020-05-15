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

   handleSubmit = (URL) => {
       console.log()
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(this.state.user)
    }

    fetch(API + "/users" + URL, configurationObject)
    .then(this.parseJson)
    .catch(err => this.setState({
        user:{ ...this.state.user
        }
    }))
    }   

    parseJson = (resp) => {
        if (resp.ok) {
            return resp.json().then(data => this.props.login(data))
        }
        else {
            throw resp.json()
        }
    }

    signup = () => {
         this.setState({
             signup: !this.state.signup
         })
    }
  
    render = () => {
    return (
      <Fragment>
          <Route exact path = "/">
            {this.state.signup? <Signup handleChange= { this.handleChange} handleSubmit ={ this.handleSubmit} />
            :<Login signup = {this.signup} handleChange= { this.handleChange} handleSubmit ={ this.handleSubmit}/>  }  
          </Route>
     </Fragment>
    );
  
    }
  }

  export default Unauthorised