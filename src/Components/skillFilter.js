import React, { Component, Fragment } from "react"
import API from "../API"
function SkillFilter({handleTopic,handleLength, showAll })  {

    
        return (
            <div class="uk-width-1-4@s uk-margin-left uk-position-center-left  uk-width-1-6@m data-uk-sticky">
            <ul class="uk-nav-default uk-nav-parent-icon" data-uk-nav>
                <li class="uk-active"><p>Active</p></li>
                <li class="uk-parent">
                    <a >Length</a>
                    <ul class="uk-nav-sub">
                        <li><a onClick ={handleLength} >Short</a></li>
                        <li><a onClick ={handleLength} >Long</a></li>
                    </ul>
                </li>
                <li class="uk-parent">
                    <a href="#">Topics</a>
                    <ul class="uk-nav-sub">
                    <li><a onClick = {handleTopic} >Design</a></li>
                    <li><a onClick = {handleTopic} >Photography</a></li>
                    <li><a onClick = {handleTopic} >Development</a></li>
                    <li><a onClick = {handleTopic} >Marketing</a></li>
                    <li><a onClick = {handleTopic} >Health & Fitness</a></li>
                    <li><a onClick = {handleTopic} >Music</a></li>
                    <li><a onClick = {handleTopic} >Science</a></li>
                    <li><a onClick = {handleTopic} >Lifestyle</a></li>
                    </ul>
                </li>
                <li >
                <a onClick = {showAll}>See all</a>
                </li>
            </ul>
        </div>
           );
      
       
  }

  export default SkillFilter
  