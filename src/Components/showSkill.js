import React, { Component, Fragment, useEffect, useState } from "react"
import {Link} from "react-router-dom"

import API from "../API.js"

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
              return skill.links.map(link => {return <li key={link.id}><a class="uk-link-muted" href={link.url} rel='noopener noreferrer' target="_blank">{link.url}</a></li> })
          }
        }

        

        return (
            <Fragment>
                <div className ="uk-container uk-width-1-2 uk-margin-large-top u">
                    <h2 class="uk-position-relative uk-heading-divider uk-position-top-center" >{skill.title}</h2>
                    <h4 class="uk-position-relative  uk-position-top-right" >Difficulty: {skill.difficulty}</h4>
                    <hr class="uk-divider-icon"/>
                
                <div className ="uk-margin-large-top" data-uk-grid>
                    <div>
                <h4>Summary of Journey:</h4>
                    <p>{skill.description}</p>
                </div>
                </div>
               

                <hr/>
                <div class="uk-child-width-1-2@s" data-uk-grid>
                    <div>
                <div class="uk-panel uk-panel-box uk-text-truncate">{skill.methodology}</div>
                    </div>
                </div>
                <hr/>
                <ul class="uk-list uk-list-striped">
                    {createLinks()}
                </ul>
                <hr/>
                <div class="uk-child-width-1-2@s" data-uk-grid>
                    <div>
                <div class="uk-panel uk-panel-box uk-text-truncate"><h4>Advice:</h4> <p>{skill.advice}</p> </div>
                    </div>
                </div>
                <br/>
                {props.user.id === skill.user_id ?   
                <button class="uk-position-relative uk-position-center uk-button uk-button-default uk-background-muted " onClick={() => props.history.push(`/skills`)}>Back</button>:null}
                {!props.track?
                <>
                <br/>
                <br/>
                <button  class="uk-position-relative uk-position-center uk-button uk-button-default " onClick={()=> props.addToTrack(skill.id)}>  Add to track</button>
                </>
                :null}
                </div>    
            </Fragment>
            );
      
       
  }

  export default ShowSkill