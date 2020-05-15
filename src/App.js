import React, {Component} from 'react'
import { Route, withRouter, Switch} from 'react-router-dom';
import './App.css';
import Unauthorised from "./Containers/unauthorised"
import SkillsContainer from "./Containers/SkillsContainer"

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


  validate = () => {
    fetch(API + "validate", {headers: {AUTHORIZATION: localStorage.token}})
     .then(resp => resp.json())
     .then(data => {this.login(data);
    })
  }

  render = () => {
  return (
    <div>
   { this.state.user? <SkillsContainer/>:<Unauthorised login = {this.login}/>  }
   </div>
  );

  }
}

export default App;
