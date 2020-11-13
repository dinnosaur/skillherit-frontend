import React, { Component, Fragment } from "react"
import { Route ,Switch, Redirect} from 'react-router-dom';

import SkillsContainer from "../Components/skillscontainer/SkillsContainer";
import SkillFormContainer from "../Components/skillsformcontainer/SkillFormContainer";
import ShowSkill from "../Components/showSkill";
import TrackContainer from "../Components/TrackContainer/TrackContainer"
import Navbar from "../Components/navbar"
import Journey from "../Components/journey/Journey";
import ShowSession from "../Components/showSession";

import moment from 'moment';
import  "moment-duration-format"

import "../css/loginStyles.css"
import "../css/textFormatting.css"
import "../css/chartStyles.css"
import "../css/buttonStyles.css"

import API from "../API";



class Authorised extends Component {
  state = {
    track:false,
    duration:0,
    statistics: false
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

  showStatistics = (state) => {
    this.setState({
      statistics: state
    })
  }

  render = () => {
    return (
      <Fragment>
          <Navbar statistics={this.state.statistics} logout={this.props.logout}/>
            <Switch> 
              <Route exact path="/skills" render={() => <SkillsContainer user={this.props.user}/>} />
              <Route exact path="/new" render={(routerProps) => <SkillFormContainer {...routerProps}/>}/>
              <Route exact path="/skills/:id" render= {(routerProps) => <ShowSkill {...routerProps} track={this.state.track}  addToTrack={this.addToTrack} user ={this.props.user}/>}/>
              <Route exact path="/track" render={() => <TrackContainer duration={this.state.duration} getTrack={this.getTrack} activeTrack={this.activeTrack} track={this.state.track}/>}/>
              <Route exact path="/journey" render={(routerProps) => <Journey {...routerProps} showStatistics={this.showStatistics} user={this.props.user}/> }/>
              <Route exact path="/sessions/:id" render={(routerProps) => <ShowSession {...routerProps}/>}/> 
              <Route path="/">
                <Redirect to="/skills" />
              </Route>
            </Switch>
      </Fragment>
      );
    }
  }

  export default Authorised