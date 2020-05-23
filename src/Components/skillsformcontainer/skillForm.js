import React, { useState, Fragment } from 'react';
import Input from "./input"



function SkillForm(props) {

  const [linkArray,setLinkArray] = useState([])
  const [linkNo, setLinkNo] = useState(1)
    
  const newInput = (e) => {
        e.preventDefault()
        setLinkNo(linkNo + 1)
        setLinkArray([...linkArray,<input onChange= {props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url"  placeholder="Some text..." name={linkNo.toString()}/>])
  }


  const renderMonths = () => {
                
    return (    
         <Fragment>
            <option>Less than a month</option>
            <option>1 Month</option>
            <option>2 Months</option>
            <option>3 Months</option>
            <option>4 Months</option>
            <option>5 Months</option>
            <option>6 Months</option>
            <option>7 Months</option>
            <option>8 Months</option>
            <option>9 Months</option>
            <option>10 Months</option>
            <option>11 Months</option>
         </Fragment>)
    }


 

    return (
        <div className = "uk-container">
        <form onSubmit = {props.handleSubmit} class="uk-form-horizontal  uk-margin-large uk-position-large uk-width-1-2 ">

        <Input handleChange={props.handleChange} name={"title"} text={"Title"}  />
        <Input handleChange={props.handleChange} name={"description"} text={"Summary of your journey"} rows="2" />
        <Input handleChange={props.handleChange} name={"methodology"} text={"Methodologies"} rows="5"/>
        <Input handleChange={props.handleChange} name={"achievements"} text={"Achievements"} rows="3"/>
        {/* <div class="uk-margin ">
            <label class="uk-form-label" for="form-horizontal-text">Title</label>
            <div class="uk-form-controls">
                <input onChange ={props.handleChange} name="title" class="login uk-input" id="form-horizontal-text" type="text" placeholder="Some text..." required/>
            </div>
        </div>

        <div class="uk-margin ">
            <label class="uk-form-label" for="form-horizontal-text">Summary of your journey</label>
            <div class="uk-form-controls">
                <input onChange ={props.handleChange} name="description" class=" login uk-input" id="form-horizontal-text" type="text" placeholder="Some text..."/>
            </div>
        </div>

        <div class="uk-margin ">
            <label class="uk-form-label" for="form-horizontal-text">Methodologies</label>
            <div class="uk-form-controls">
            <textarea required onChange ={props.handleChange} name="methodology" class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
            </div>
        </div>

        <div class="uk-margin ">
            <label class="uk-form-label" for="form-horizontal-text">Achievements</label>
            <div class="uk-form-controls">
                <textarea onChange ={props.handleChange} name="achievements" class="uk-textarea" rows="3" placeholder="Textarea"></textarea>
            </div>
        </div>

        <div class="uk-margin ">
            <label class="uk-form-label" for="form-horizontal-text">Links</label>
            <div class="uk-form-controls">
                <input onChange = {props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url" size ="5" placeholder="Some text..." name="0"/>
                {linkArray}
                <span><button class="uk-button uk-button-default" onClick = { newInput}> Add Link</button></span>

            </div>  
        </div> */}
        
        
        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-select">Difficulty</label>
            <div class="uk-form-controls">
                <select  onChange ={props.handleChange} name="difficulty"  class="uk-select" id="form-horizontal-select">
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                    <option>Super Hard</option>
                </select>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-select">Duration</label>
            <div class="uk-form-controls">
                <span><select onChange ={props.handleDuration} name = "years" placeholder = "Years" class="uk-select" id="form-horizontal-select">
                    <option>0 years</option>
                    <option>1 year</option>
                    <option>3 years</option>
                    <option>4 years</option>
                    <option>5 years</option>
                    <option>6 years</option>
                </select></span>
                <select onChange ={props.handleDuration} name = "months" class="uk-select" id="form-horizontal-select">
                    {renderMonths()}
                </select>
            </div>
        </div>

        
        <div class="uk-margin ">
            <label class="uk-form-label" for="form-horizontal-text">Advice</label>
            <div class="uk-form-controls">
                <input onChange ={props.handleChange} name="advice"  class="uk-input" id="form-horizontal-text" type="text" placeholder="Some text..."/>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" for="form-horizontal-select">Topic</label>
            <div class="uk-form-controls">
                <select onChange ={props.handleChange} name="topic"  class="uk-select" id="form-horizontal-select">
                    <option>Design</option>
                    <option>Photography</option>
                    <option>Development</option>
                    <option>Marketing</option>
                    <option>Health & Fitness</option>
                    <option>Music</option>
                    <option>Science</option>
                    <option>Lifestyle</option>
                </select>
            </div>
        </div>
        <button   type= "submit" class="uk-button uk-button-default">Post Skill</button>
    </form>
    </div>
    );
}

export default SkillForm;
