import React, { Component, Fragment } from "react"

function ShowSkill(props)  {
        // calculateDuration
    
       const createLinks = () => {
          if (props.skill !==false){
            console.log(props.skill.links)
              return props.skill.links.map(link => {return <li><a class="uk-link-muted" >{link.url}</a></li> })
          }
        }
        return (
            <Fragment>
                <div className ="uk-margin-large-top uk-position-top-center">
                    <h2 >{props.skill.title}</h2>
                </div>
                <div className ="uk-margin-large-top uk-grid ">
                <h4>Summary of Journey:</h4>
                <p>{props.skill.description}</p>
                </div>
                <h4 >Difficulty: {props.skill.difficulty}</h4>

                <hr/>
                <div class="uk-child-width-1-2@s" uk-grid>
                    <div>
                <div class="uk-panel uk-panel-box uk-text-truncate">{props.skill.methodology}</div>
                    </div>
                </div>
                <hr/>
                <ul class="uk-list ">
                    {createLinks()}
                </ul>
            
                
            </Fragment>
            );
      
       
  }

  export default ShowSkill