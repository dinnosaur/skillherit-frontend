import React from "react"


function Input(props)  {

  
    if (props.name === "methodology"||props.name === 'description'||props.name === "achievements") {
        return (
             <div class="uk-margin ">
                <label class="uk-form-label" for="form-horizontal-text">{props.text}</label>
                <div class="uk-form-controls">
                    <textarea onChange={props.handleChange} name={props.name} class="login uk-textarea" rows={props.rows} placeholder="..."></textarea>
                </div>
            </div>
         )
        
    }
    else {
        return (
            <div class="uk-margin ">
                <label class="uk-form-label" for="form-horizontal-text">{props.text}</label>
                <div class="uk-form-controls">
                    <input onChange={props.handleChange} name={props.name} class="login uk-input" id="form-horizontal-text" type="text" placeholder="..."/>
                </div>
            </div>
        )
    }    

}

  export default Input
  