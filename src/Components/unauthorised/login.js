import React, { Component } from "react"
import { Link } from "react-router-dom"



export default class Login extends Component {

    render = () => {
        const { handlesubmit, handlechange } = this.props
        return (
            <div class="uk-container uk-position-center ">
                <form onSubmit={(e) => { e.preventDefault(); handlesubmit() }}>
                    <div class="uk-flex uk-flex-center uk-vertical-align-middle">
                        <div class="uk-inline">
                            <span className="uk-form-icon" uk-icon="icon: user"></span>
                            <input name="username" onChange={handlechange} className="login uk-input" type="text" />
                        </div>
                    </div>
                    <div class="uk-flex uk-flex-center uk-flex-middle">
                        <div class="uk-inline">
                            <span class="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                            <input name="password" onChange={handlechange} class="login uk-input" type="password" />
                        </div>
                    </div>
                    <button onClick={handlesubmit} type="submit" class="uk-button uk-button-default">Login</button>
                    <span><Link to="/signup"><button class="uk-button uk-button-default">Signup</button></Link> </span>
                </form>
            </div>
        )
    }
}