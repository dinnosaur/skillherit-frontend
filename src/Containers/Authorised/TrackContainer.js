import React, { Component } from "react"
import Session from "../../Components/TrackContainer/session"
import moment from 'moment';


import API from "../../API.js"

class TrackContainer extends Component {
  state = {
      session:false,
      endTime:"",
      startTime:"",
      sessionForm: {
        links: {},
      },
      content: "",
  }

  sessionStart = (state, distractionTime) => { 
      console.log(distractionTime)
    this.timeSetter(state, distractionTime)
        this.setState({
            session: !this.state.session
        })   
  }


  timeSetter = (state, distractionTime) => {
    switch(state) {
    case "start":
        console.log("start")
    this.setState({
        startTime: moment()
    })
    break;
    case "end":
        console.log("end")
        this.setState({
            endTime: moment()
        },() => this.calculateTimeDifference(distractionTime))
    break;
    default: 
     console.log("nothing")
    }
    
  }

  calculateTimeDifference = (distractionTime) => {
    const difference = moment.duration(this.state.endTime.diff(this.state.startTime))
    const distractionDuration = moment.duration(distractionTime).asHours()
    const duration = difference.asHours()
    const date = moment().format("YYYY-MM-DD")
    
    this.submitSession(duration, date, distractionDuration)
  }

  submitSession = (duration, date, distractionDuration) => {
      console.log(distractionDuration)
    const data = {
        session: {
            track_id: this.props.track.id,
            date: date
        },
        notes: {
            content: this.state.content,
        },
        links: this.state.sessionForm.links,
        time: duration,
        distraction: distractionDuration
    }
    API.postSession(data)
    .then(API.parseJson)
    .then(data => this.props.getTrack())
    .catch(error => console.log(error))
  }

  handleLinks = ({target:{value,name}}) => {
    this.setState({
        sessionForm: {
        links: {
        ...this.state.sessionForm.links,[name]:value}
         }
    })
  }

  handleChange = ({target:{value,name}}) => {
    this.setState({
        [name]:value
            
        })
   }

   trackCompleted = () => {
    API.updateTrack(this.props.track.id)
    .then(API.parseJson)
    .then(data => this.props.activeTrack(false))
    .catch(error => console.log(error))
    }

   render = () => {
    const {track,duration} = this.props
    return (
      <div class= "uk-container uk-margin uk-padding-large uk-box-shadow-small ">
          {track ?
           <>
            <div className ="uk-margin-large-top uk-position-top-center uk-padding">
                <h3 class ="uk-heading-divider uk-text-light"> Current Track: {track.skill.title }</h3> 
            </div> 
                {!this.state.session?
                <>  
                    <div className ="uk-margin-large-top">
                        <h4 class="uk-text-lighter" >Time spend learning this track: {duration} </h4>
                    </div>
                        <hr class="uk-divider-icon"/>
                    <br></br>
                    <div class="uk-grid-divider uk-child-width-expand@s" data-uk-grid>
                        <div>
                            <button class="uk-position-relative uk-position-center uk-margin-large uk-button uk-button-default uk-background-muted" onClick= {() => this.sessionStart("start", 0)}>Start Learning</button> 
                        </div>
                        <div>
                            <button  class="uk-position-relative uk-position-center uk-margin-large uk-button uk-button-default uk-background-muted" onClick={this.trackCompleted}>Finish Track</button> 
                        </div>
                     </div>      
                </>
                : 
                <Session handleChange={this.handleChange} handleLinks={this.handleLinks} track={track} sessionStop={this.sessionStart}/> }   
           </>
           :
           <h2 class="uk-position-relative uk-position-center uk-text-light">Browse through skills to start learning </h2>
           }  
      </div>
           
    );
    }
}

  export default TrackContainer