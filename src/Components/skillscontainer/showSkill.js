import React, { Component, Fragment, useEffect, useState } from "react"
import {Link} from "react-router-dom"

import API from "../../API.js"

function ShowSkill(props)  {
        // calculateDuration
    const [skill, setSkill] = useState(false)

        useEffect(() => {
            API.fetchSkill(props.match.params.id)
            .then(resp => resp.json())
            .then(data => setSkill(data))
        }, [])
       
        const createLinks = () => {
          if (skill !==false){
            console.log(skill.links)
              return skill.links.map(link => {return <li><a  class="uk-link-muted" href={link.url} target="_blank">{link.url}</a></li> })
          }
        }

        

        return (
            <Fragment>
                <div className ="uk-margin-large-top uk-position-top-center">
                    <h2 >{skill.title}</h2>
                </div>
                <div className ="uk-margin-large-top uk-grid ">
                <h4>Summary of Journey:</h4>
                <p>{skill.description}</p>
                </div>
                <h4 >Difficulty: {skill.difficulty}</h4>

                <hr/>
                <div class="uk-child-width-1-2@s" uk-grid>
                    <div>
                <div class="uk-panel uk-panel-box uk-text-truncate">{skill.methodology}</div>
                    </div>
                </div>
                <hr/>
                <ul class="uk-list ">
                    {createLinks()}
                </ul>
                {props.user.id === skill.user_id ? 
                <button>Edit Post</button>:null}
                
                {!props.track?
                <button onClick={()=> props.addToTrack(skill.id)}>  Add to track</button>
                :null}    
            </Fragment>
            );
      
       
  }

  export default ShowSkill