import React, { Component, Fragment } from "react"
import { Redirect, withRouter } from "react-router-dom";
import { months } from "moment";

function SkillList(props) {

    const renderImages = () => {
        const array = ["https://images.pexels.com/photos/2097/desk-office-pen-ruler.jpg?cs=srgb&dl=desk-office-pen-ruler-2097.jpg&fm=jpg",
            "https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            "https://images.pexels.com/photos/4033706/pexels-photo-4033706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://images.pexels.com/photos/355948/pexels-photo-355948.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://static.vecteezy.com/system/resources/previews/000/165/929/non_2x/linear-education-vector-icons.jpg",
            "https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"]
        const randomImage = array[Math.floor(Math.random() * array.length)]
        return randomImage
    }

    const renderSkills = () => {
        return props.skills.map(skill => {
            const id = skill.id;
            return (
                <div key={skill.id} class="uk-margin-small uk-padding ">
                    <div onClick={() => props.history.push(`/skills/${skill.id}`)} class="uk-card uk-card-small uk-card-hover uk-card-default uk-background-muted ">
                        <div class="uk-card-body ">
                            <h3 class="uk-card-title uk-text-light">{skill.title}</h3>
                            <p class="uk-text-light">{skill.description}</p>
                        </div>
                        <div class="uk-card-media-bottom">
                            <img src={renderImages()} width="343" height="40" />
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div class="uk-child-width-1-3 uk-margin-large-left" data-uk-grid>
            {renderSkills()}
        </div>
    );


}

export default withRouter(SkillList)
