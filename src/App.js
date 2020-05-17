import React, {Component, Fragment} from 'react'
import { Route, withRouter, Switch} from 'react-router-dom';
import './App.css';
import Unauthorised from "./Containers/unauthorised"
import SkillsContainer from "./Containers/SkillsContainer"
import Navbar from "./Components/navbar"

import API from "./API"
class App extends Component {
  state = {
    user: false
  }



   login = (data) => {
    localStorage.token = data.token 
    this.setState({
      user: data
    })
     
  }


  componentDidMount() {
    if (localStorage.token) {
     this.validate()
    }   
    
    // fetch(`${API}/discover`)
    // .then(res => res.json())
    // .then(data => this.setState({discoverVideos: data}))
   }

   logout = () => {
    localStorage.removeItem("token")
    this.setState({
      user: false
    })
    }


  validate = () => {
    fetch(API + "validate", {headers: {AUTHORIZATION: localStorage.token}})
     .then(resp => resp.json())
     .then(data => {this.login(data);
    })
  }

  render = () => {
  return (
    <Fragment>
   { this.state.user? 
   <Fragment>
   <Navbar logout = {this.logout}/>
   <SkillsContainer/>
   </Fragment>
   :<Unauthorised login = {this.login}/>  }  
   </Fragment>
  );

  }
}

export default App;
