
import React, {Component, Fragment} from 'react'
import { Route, Redirect, withRouter} from 'react-router-dom';
import Unauthorised from "./Containers/unauthorised"
import Authorised from "./Containers/authorised"




import API from "./API"

class App extends Component {
  state = {
      user: false,
      createSkill: false,
      journey: false,
      page: "home",
    }

   login = (data) => {
    localStorage.token = data.token 
    this.setState({
      user: data
    },() =>  this.props.history.push(`/skills`))
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
     .then(data => {this.setState({
       user:data
     },() =>  this.props.history.push(`/skills`));
     localStorage.token = data.token 
    })
    }
  }

  createSkill = () => {
      this.setState({
        createSkill: !this.state.createSkill
      })
  }

  
  // navigateTo = (pageName) => {
  //   this.setState({ page: pageName })
  // }

   render = ()  => {
  return (
    <>
    {this.state.user? <Authorised user={this.state.user} logout={this.logout}/>:<Unauthorised login ={this.login}/>}
    </>
  );
 }

}

export default withRouter(App);

