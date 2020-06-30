import React, { Component, Fragment } from "react"
import { Redirect, withRouter } from "react-router-dom";

function SkillList(props)  {

    
    const renderSkills = () => {
       return props.skills.map(skill =>{ const id = skill.id;
       return ( 
       <div key = {skill.id}   class = "uk-margin-small">
           <div  onClick = {() => props.history.push(`/skills/${skill.id}`)} class="uk-card uk-card-medium uk-card-hover  uk-card-default ">
               <div class="uk-card-body ">
               <h3 class="uk-card-title">{skill.title}</h3>
                   <p>{skill.description}</p>
               </div>
               <div class="uk-card-media-bottom ">
                <img   src="http://www.simpleimageresizer.com/_uploads/photos/66091a6a/pencils-1280558_1920_6_373x205.jpg" alt=""/>
               </div>
           </div> 
       
       </div>)} )
    }
        return (
            <div class="uk-child-width-1-3 uk-grid-match  uk-grid" >
            {renderSkills()}
           </div>

            );
      
       
  }

  export default withRouter(SkillList)
  