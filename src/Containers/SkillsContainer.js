import React, { Component, Fragment } from "react"
import SkillList from "../Components/skillsList"
import SkillFilter from "../Components/skillFilter"
import ShowSkill from "../Components/showSkill"
import Uikit from "uikit";

import API from "../API"

class SkillsContainer extends Component {
   state = {
     skills: [],
     filterSkills: [],
     skill: false 
   }
  
    componentDidMount() {
      API.fetchAllSkills()
      .then(resp => resp.json())
      .then(data =>this.setState({
        skills: data,
        filterSkills: data
      }))
    }
  

    handleTopic = ({target: {innerText}}) => {
      const topicSkills = this.state.skills.filter(skill => skill.topics[0].name === innerText)
      console.log(topicSkills)
      this.setState({
        filterSkills: topicSkills
      })
    }

    showAll = () => {
      this.setState({
          filterSkills: this.state.skills 
       })
    }

    handleLength = ({target: {innerText}}) => {
     const state = innerText === "Short"? true :false 
     const lengthTopics = this.state.skills.filter(skill => skill.short_term === state)
     console.log(lengthTopics)
      this.setState({
        filterSkills: lengthTopics
      })
    }

    showSkill = (skill) => {

      this.setState({
        skill:skill 
      })
    }
  
    render = () => {
    return (
      
      <div class= "uk-container ">
          {!this.state.skill ? 
          <>
          <SkillFilter showAll = {this.showAll} handleLength = {this.handleLength} handleTopic = {this.handleTopic}/> 
           <SkillList renderSkill ={this.showSkill} skills = {this.state.filterSkills}/></>:   
           <ShowSkill skill ={this.state.skill}/>}
      </div>
      
    );
  
    }
  }

  export default SkillsContainer