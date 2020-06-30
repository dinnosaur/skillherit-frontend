import React, { Component, Fragment, useEffect, useState } from "react"
import {Link} from "react-router-dom"

import API from "../API.js"

function ShowSession(props)  {
    const [session, setSession] = useState(false)

    useEffect(() => { 
        API.fetchSession(props.match.params.id)
        .then(resp => resp.json())
        .then(data => setSession(data))
    }, [])
   
   const renderLinks = () => {
    if (session !==false){
        console.log(session.urls)
          return session.urls.map(url => {return <li key={url.id}><a class="uk-link-muted" href={url.link} rel='noopener noreferrer' target="_blank">{url.link}</a></li> })
      }
    }


       
    
    return (
         <>
            <div class= "uk-container uk-margin-large-top uk-box-shadow-small ">
             <h3 class="uk-text-light">Skill: {session? session.track.skill.title :null}</h3>
             <h3 className="uk-position-relative uk-position-top-right">{session?session.date:null}</h3>
             <hr class="uk-divider-icon"/>
            <div class="uk-grid-divider uk-child-width-expand@s" data-uk-grid>
                <div class="uk-text-lighter">
                    <h4 class="uk-text-light">Notes:</h4>
                    {session?session.notes[0].content:null}
                </div>
                <div>
                    <h4 class="uk-text-light">Links:</h4>
                    <ul className="uk-list uk-list-striped">
                        {renderLinks()}
                    </ul>
                    </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <button class="uk-position-relative uk-position-center uk-button uk-button-default uk-background-muted " onClick={() => props.history.push(`/journey`)}>Back</button>
            </div>
         </>
    );
      
       
  }

  export default ShowSession