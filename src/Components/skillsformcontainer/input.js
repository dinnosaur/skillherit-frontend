import React from "react"


function Input(props)  {

  
    if (props.name === "methodology"||props.name === 'description'||props.name === "achievements") {
        debugger
        return (
             <div class="uk-margin ">
                <label class="uk-form-label" for="form-horizontal-text">{props.text}</label>
                <div class="uk-form-controls">
                    <textarea onChange={props.handleChange} name={props.name} class="uk-textarea" rows={props.rows} placeholder="Textarea"></textarea>
                </div>
            </div>
         )
        
    }
    else {
        return (
            <div class="uk-margin ">
                <label class="uk-form-label" for="form-horizontal-text">{props.text}</label>
                <div class="uk-form-controls">
                    <input onChange={props.handleChange} name={props.name} class="login uk-input" id="form-horizontal-text" type="text" placeholder="Some text..."/>
                </div>
            </div>
        )
    }    

}

  export default Input
  