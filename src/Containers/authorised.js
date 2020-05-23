import React, { Component, Fragment } from "react"
import { Route ,Switch} from 'react-router-dom';
import SkillsContainer from "./Authorised/SkillsContainer";
import SkillFormContainer from "./Authorised/SkillFormContainer";
import Navbar from "../Components/navbar"
import "../css/loginStyles.css"
 import ShowSkill from "../Components/skillscontainer/showSkill";




class Authorised extends Component {
  
  
    render = () => {
    return (
      <Fragment>
         <Navbar  logout = {this.props.logout}/>
          <Switch> 
            <Route exact path="/skills" render ={() => <SkillsContainer user ={this.props.user}/>} />
            <Route exact path="/new" render= {() => <SkillFormContainer/>}/>
            <Route exact path="/skills/:id" render= {(routerProps) => <ShowSkill {...routerProps} user ={this.props.user}/>}/>
          </Switch>
     </Fragment>
    );
  
    }
  }

  export default Authorised