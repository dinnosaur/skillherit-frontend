import React, { Component } from "react"
import SkillForm from '../../Components/skillsformcontainer/skillForm';
import API from "../../API"

export default class SkillFormContainer extends Component {

    state = {
        links: {},
        title: "",
        description: "",
        achievements: "", 
        difficulty: "Easy",
        duration: {years:"0" ,months: "0" },
        advice: "",
        topic: "Design" ,
        methodology: ""
        
    }
   
    handleLinks = ({target:{value,name}}) => {
        this.setState({
            links: {...this.state.links,[name]:value}
        } )
    }

    handleChange = ({target:{value,name}}) => {
        this.setState({
            [name]:value
        })
    }

    handleDuration = ({target:{value,name}}) => {
       let valueToInt = ""
        if (value === "Less than a month" ){
                 valueToInt = "0"
       }
       else 
       {
            valueToInt = value.split(" ")[0]
       }
        this.setState({
            duration:{...this.state.duration, [name]:valueToInt}
        })
    }

    handleTopics = ({target:{value}}) => {
        this.setState({
            topic: value
        })
    }

    handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        API.postSkill(this.state)
        .then(API.parseJson)
        .then(data => this.props.history.push(`/skills`))
        .catch(err => console.log(err))
    }

    render = () => {  
        return (
            <SkillForm handleSubmit = {this.handleSubmit} handleDuration = {this.handleDuration} handleChange = {this.handleChange} handleLinks = {this.handleLinks}/>
        )
    }
  }