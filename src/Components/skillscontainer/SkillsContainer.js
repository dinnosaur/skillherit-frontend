import React, { Component, Fragment } from "react"
import SkillList from "./skillsList"
import SkillFilter from "./skillFilter"
import ShowSkill from "../showSkill"


import API from "../../API.js"

class SkillsContainer extends Component {
  state = {
    skills: [],
    filterSkills: [],
    active: "All"
  }

  componentDidMount() {
    API.fetchAllSkills()
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          skills: data,
          filterSkills: data
        }))
  }


  handleTopic = ({ target: { innerText } }) => {
    const topicSkills = this.state.skills.filter(skill => skill.topics[0].name === innerText)
    console.log(topicSkills)
    this.setState({
      filterSkills: topicSkills,
      active: innerText
    })
  }

  showAll = () => {
    this.setState({
      filterSkills: this.state.skills,
      active: "All"
    })
  }

  handleLength = ({ target: { innerText } }) => {
    const state = innerText === "Short" ? true : false
    const lengthTopics = this.state.skills.filter(skill => skill.short_term === state)

    this.setState({
      filterSkills: lengthTopics,
      active: innerText
    })
  }

  render = () => {
    return (

      <div class="uk-container uk-container-expand">
        <SkillFilter active={this.state.active} showAll={this.showAll} handleLength={this.handleLength} handleTopic={this.handleTopic} />
        <SkillList skills={this.state.filterSkills} />
      </div>
    );

  }
}

export default SkillsContainer