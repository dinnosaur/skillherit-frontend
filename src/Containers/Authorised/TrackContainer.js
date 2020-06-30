import React, { Component, Fragment } from "react"
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
      content: ""
  }

  sessionStart = (state) => { 
      this.timeSetter(state)
      this.setState({
          session: !this.state.session
      })
    
  }


  timeSetter = (state) => {
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
        },() => this.calculateTimeDifference())
    break;
    default: 
     console.log("nothing")
    }
    
  }

  calculateTimeDifference = () => {
    const difference = moment.duration(this.state.endTime.diff(this.state.startTime))
    const duration = difference.asHours()
    console.log(duration)
    const date = moment().format("YYYY-MM-DD")
    this.submitSession(duration, date)

  }

  submitSession = (duration, date) => {
    const data = {
        session: {
            track_id: this.props.track.id,
            date: date
        },
        notes: {
            content: this.state.content,
        },
        links: this.state.sessionForm.links,
        time: duration
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



//   time = () => {
//     let today = new Date();
//     let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     let dateTime = date+' '+time;
//     return dateTime
//   }[;]


    render = () => {

    const {track,duration} = this.props
    return (
      <div class= "uk-container ">
          {track ?
           <>
            <h3> Current Track: {track.skill.title }</h3> 
                {!this.state.session?
                <>
                    <button onClick= {() => this.sessionStart("start")}>Start Learning</button> 
                    <h4>Time spend learning this track: {duration} </h4>
                    <button onClick={this.trackCompleted}>Finish Track</button> 
                </>
                : 
                null}
                {this.state.session? <Session handleChange={this.handleChange} handleLinks={this.handleLinks} track={track} sessionStop={this.sessionStart}/> : null }
           </>
           :
           <h4>browse through skills and add to track </h4>}  
      </div>
      
      
    );
    }
}

  export default TrackContainer