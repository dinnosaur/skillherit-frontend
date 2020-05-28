import React, {useState} from "react"
import { Link } from "react-router-dom"


function SkillFilter({handleTopic,handleLength, showAll, active })  {
   
    
        return (
            <div class="uk-position-fixed uk-width-1-6 uk-margin-left uk-margin-large-right uk-position-center-left  uk-width-1-6" >
            <ul class=" uk-nav-default uk-nav-parent-icon " data-uk-nav data-uk-sticky="offset:35">
                <li class="uk-active"><p>{active}</p></li>
                <li class="uk-parent">
                    <a>Length</a>
                    <ul class="uk-nav-sub">
                        <li><Link onClick ={handleLength}>Short</Link></li>
                        <li><Link onClick ={handleLength}>Long</Link></li>
                    </ul>
                </li>
                <li class="uk-parent">
                    <a href="#">Topics</a>
                    <ul class="uk-nav-sub">
                    <li><Link onClick ={handleTopic}>Design</Link></li>
                    <li><Link onClick ={handleTopic}>Photography</Link></li>
                    <li><Link onClick ={handleTopic}>Development</Link></li>
                    <li><Link onClick ={handleTopic}>Marketing</Link></li>
                    <li><Link onClick ={handleTopic}>Health & Fitness</Link></li>
                    <li><Link onClick ={handleTopic}>Music</Link></li>
                    <li><Link onClick ={handleTopic}>Science</Link></li>
                    <li><Link onClick ={handleTopic}>Lifestyle</Link></li>
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
  