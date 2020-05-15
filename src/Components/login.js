import React, { Component } from "react"
import { Button, Form, Grid, Container } from 'semantic-ui-react'


export default class Login extends Component {
   
    render = () => {
        const {handleSubmit, handleChange, signup} = this.props 
    return (
            <Container middle aligned>
                <Grid centered>
                    <Form onSubmit = {() => handleSubmit("sign-in")}>
                        <Form.Input     
                            onChange = {handleChange}
                            label="Username:"       
                            placeholder="Username"
                            name="username"/>
                        <Form.Input   
                            onChange = {handleChange}
                            label="Password:"           
                            placeholder="Password"
                            name="password"
                            type="password"/>
                        <Button>Login</Button>
                    </Form>
                    <Button onClick = {signup}>Signup</Button>
                </Grid>
             </Container>
             )
    
  
    }
  }