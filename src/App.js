
import React, {Component, Fragment} from 'react'
import { Route, Switch} from 'react-router-dom';
import Unauthorised from "./Containers/unauthorised"
import SkillsContainer from "./Containers/SkillsContainer"
import SkillFormContainer from './Containers/SkillFormContainer';


import Navbar from "./Components/navbar"



import API from "./API"

class App extends Component {
  state = {
    user: false,
    createSkill: false
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
   }

   logout = () => {
    localStorage.removeItem("token")
    this.setState({
      user: false
    })
    }


  validate = () => {
    if (localStorage.token != "undefined")
    {  API.validation()
     .then(resp => resp.json())
     .then(data => {this.login(data);
    })
    }
  }

  createSkill = () => {
      this.setState({
        createSkill: !this.state.createSkill
      })
  }


  render = () => {
  return (
    <Fragment>
   { this.state.user? 
   <Fragment>
   <Navbar logout = {this.logout} createSkill = {this.createSkill}/>
   {this.state.createSkill?<SkillFormContainer createSkill = {this.createSkill}/>:
    <SkillsContainer/> }
   </Fragment>
   :<Unauthorised login = {this.login}/>  }  
   </Fragment>
  
  );

  }
}

export default App;
