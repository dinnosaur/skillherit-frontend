import React, { Component } from "react"


export default class Signup extends Component {
   
  
  
    render = () => {
        const {handlesubmit, handlechange, signup} = this.props 
    return (
    <form  onSubmit={(e) =>{e.preventDefault(); handlesubmit("")}} class="uk-position-center uk-form-stacked uk-form-width-medium">

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Username</label>
        <div class="uk-form-controls">
            <input  onChange={handlechange}         
                     placeholder="Username"
                     name="username" class="uk-input" id="form-stacked-text" type="text" required />
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">E-mail</label>
        <div class="uk-form-controls">
            <input 
              onChange={handlechange}                 
              placeholder="E-mail"
              name="email" class="uk-input" id="form-stacked-text" type="text" required/>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Password</label>
        <div class="uk-form-controls">
            <input 
            onChange={handlechange}             
            placeholder="Password"
            name="password"
            type="password" class="uk-input" id="form-stacked-text" required/>
        </div>
    </div>

    <div class="uk-margin">
        <label class="uk-form-label" for="form-stacked-text">Confirm Password</label>
        <div class="uk-form-controls">
            <input 
            onChange={handlechange}         
                            placeholder="Confirm Password"
                            name="password_confirmation"
                            type="password"
            class="uk-input" id="form-stacked-text" required />
        </div>
    </div>

    <div class="uk-margin uk-large">
        <label class="uk-form-label" for="form-stacked-text">Motto</label>
        <div class="uk-form-controls uk-textarea" >
            <input class=" " id="form-stacked-text" type="textarea" placeholder="Please enter your Motto here"
            onChange={handlechange} 
                            name="motto"
                            type="textarea"/>
        </div>
    </div>
    <button type= "submit" class="uk-button uk-button-default">Signup</button>
</form>
    
        )
    }
  }