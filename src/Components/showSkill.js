import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import API from "../API.js"

function ShowSkill(props) {
    // calculateDuration
    const [skill, setSkill] = useState(false)

    useEffect(() => {
       
        if (props.skillId === undefined) {
            API.fetchSkill(props.match.params.id)
                .then(resp => resp.json())
                .then(data => setSkill(data))
        }
        else {
            
            API.fetchSkill(props.skillId.toString())
                .then(resp => resp.json())
                .then(data => setSkill(data))
        }
    }, [])

    const createLinks = () => {
        if (skill !== false) {
            return skill.links.map(link => { return <li key={link.id}><a class="uk-link-muted" href={link.url} rel='noopener noreferrer' target="_blank">{link.url}</a></li> })
        }
    }

    return (
        <>
            
            <div className="uk-container uk-padding-remove-left  uk-padding-remove-right uk-width-1-2 uk-margin-large-top">
                <h2 class="uk-position-relative uk-heading-divider uk-position-top-center" >{skill.title}</h2>
                <h4 class="uk-position-relative  uk-position-top-center"> Difficulty:{skill.difficulty} </h4>
                <hr class="uk-divider-icon" />
                <div className="uk-margin-large-top" data-uk-grid>
                    <div>
                        <h4>Summary of Journey:</h4>
                        <p class="uk-text-lighter">{skill.description}</p>
                    </div>
                </div>

                <hr />

                <div class="uk-child-width-1-1@s" data-uk-grid>
                    <div>
                        <p class="formatting uk-text-lighter">{skill.methodology}</p>
                    </div>
                </div>
                <hr />
                <ul class="uk-list uk-list-striped">
                    {createLinks()}
                </ul>
                <hr />
                <div class="uk-child-width-1-1@s" data-uk-grid>
                    <div>
                        <h4>Achievements:</h4> <p class="formatting uk-text-lighter">{skill.achievements}</p> 
                    </div>
                </div>
                <div class="uk-child-width-1-1@s" data-uk-grid>
                    <div>
                        <h4>Advice:</h4> <p class="formatting uk-text-lighter">{skill.advice}</p> 
                    </div>
                </div>
                <br />

                {
                    !props.skillId ?
                        <>
                            <button class="uk-position-relative uk-position-center uk-button uk-button-default uk-background-muted " onClick={() => props.history.push(`/skills`)}>Back</button>
                            {
                                !props.track ?
                                    <>
                                        <br />
                                        <br />
                                        <button class="uk-position-relative uk-position-center uk-button uk-button-default" onClick={() => props.addToTrack(skill.id)}> Add to track</button>
                                    </>
                                :
                                null
                            }
                        </> 
                    :
                    null
               }

            </div>
        </>
    );


}

export default ShowSkill