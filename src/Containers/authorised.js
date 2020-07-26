import React, { Component, Fragment } from "react"
import { Route ,Switch} from 'react-router-dom';
import SkillsContainer from "./Authorised/SkillsContainer";
import SkillFormContainer from "./Authorised/SkillFormContainer";
import ShowSkill from "../Components/showSkill";
import TrackContainer from "./Authorised/TrackContainer"
import Navbar from "../Components/navbar"
import Journey from "./Authorised/Journey";
import ShowSession from "../Components/showSession";
import moment from 'moment';
import  "moment-duration-format"

import "../css/loginStyles.css"
import "../css/skillShowStyles.css"

import API from "../API";



class Authorised extends Component {
  state = {
    track:false,
    duration:0
  }
  
  addToTrack = (skill) => {
      const data = {id:skill}
      API.createTrack(data)
      .then(API.parseJson)
      .then(data => this.activeTrack(data))
      .catch(err => {
            console.log(err)
      })
  }
  
  componentDidMount() {
    this.getTrack()
  }

  getTrack = () => {
    API.fetchTrack()
    .then(API.parseJson)
    .then(data => 
      this.activeTrack(data)
    )
    .catch(err => {
          console.log(err)
    })

  }
  activeTrack = (data) => {
    console.log(data)
   if(data!==false) { this.calculateHours(data.time)}
    this.setState({
      track:data
    })
  }

  calculateHours = (time) => {
    const duration = moment.duration(time, 'hours')
    console.log(duration)
    this.setState({
      duration: duration.format("h [hrs], m [min], s [sec]")
    })
  }

  
    render = () => {
    return (
      <Fragment>
         <Navbar  logout = {this.props.logout}/>
          <Switch> 
            <Route exact path="/skills" render={() => <SkillsContainer user={this.props.user}/>} />
            <Route exact path="/new" render= {(routerProps) => <SkillFormContainer {...routerProps}/>}/>
            <Route exact path="/skills/:id" render= {(routerProps) => <ShowSkill {...routerProps} track={this.state.track} addToTrack={this.addToTrack} user ={this.props.user}/>}/>
            <Route exact path="/track" render={() => <TrackContainer duration={this.state.duration} getTrack={this.getTrack} activeTrack={this.activeTrack} track={this.state.track}/>}/>
            <Route exact path="/journey" render={(routerProps) => <Journey {...routerProps} user={this.props.user}/> }/>
            <Route exact path="/sessions/:id" render={(routerProps) => <ShowSession {...routerProps}/>}/> 
          </Switch>
     </Fragment>
    );
  
    }
  }

  export default Authorised