import React, { Component } from "react"
import  "../css/loginStyles.css"


export default class Login extends Component {
   
    render = () => {
        
        const {handlesubmit, handlechange, signup} = this.props 
    return (
        <div class="uk-container uk-position-center ">
        <form onSubmit = {(e)=>{e.preventDefault(); handlesubmit("sign-in")}}>
            <div class="uk-flex uk-flex-center uk-vertical-align-middle">
                <div class="uk-inline">
                    <span class="uk-form-icon" uk-icon="icon: user"></span>
                    <input name ="username" onChange = {handlechange} class= " login uk-input" type="text"/>
                </div>
            </div>
            <div class="uk-flex uk-flex-center uk-flex-middle">
                <div class="uk-inline">
                    <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                    <input name = "password"  onChange = {handlechange} class="login uk-input" type="password"/>
                </div>
            </div>
            <button type= "submit" class="uk-button uk-button-default">Login</button>
            <span><button onClick = {signup} class="uk-button uk-button-default">Signup</button> </span>
        </form>
        </div>
             )
    }
  }