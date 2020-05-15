import React, { Component, Fragment } from "react"
import { Button, Form, Grid, Container } from 'semantic-ui-react'

export default class Signup extends Component {
   
  
  
    render = () => {
        const {handleSubmit, handleChange, signup} = this.props 
    return (
        <Container>
        <Grid centered>
            <Form onSubmit={() => handleSubmit("")}>
                <Form.Input   
                    required 
                    onChange={handleChange} 
                    label="Username:"         
                    placeholder="Username"
                    name="username"/>
                <Form.Input
                    required
                    onChange={handleChange}   
                    label="Email:"               
                    placeholder="Email"
                    name="email"/>            
                <Form.Input
                    onChange={handleChange} 
                    label="Motto:" 
                    name="motto"
                    type="text area"/>
                <Form.Input
                    required
                    onChange={handleChange} 
                    label="Password:"             
                    placeholder="Password"
                    name="password"
                    type="password"/>
                <Form.Input
                    required
                    onChange={handleChange} 
                    label="Confirm Password:"               
                    placeholder="Confirm Password"
                    name="password_confirmation"
                    type="password"/>
                <Button >Signup</Button>
             </Form>
        </Grid>
    </Container>)
    }
  }