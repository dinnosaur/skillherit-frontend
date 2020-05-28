import React, { Component, Fragment, useState,useEffect } from "react"
import moment from 'moment';

function Session(props) {
    const [linkArray,setLinkArray] = useState([])
    const [linkNo, setLinkNo] = useState(1)
    const [hours, setHours ] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")
   const newInput = (e) => {
        e.preventDefault()
        setLinkNo(linkNo + 1)
        setLinkArray([...linkArray,<input onChange= {props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url"  placeholder="Some text..." name={linkNo.toString()}/>])
    }

   

    useEffect(() => {
        let start = moment();
        console.log(start)
        let elapsedTime = 0
       
        
        const interval = setInterval(() => {
                            let now = moment();
                            elapsedTime = moment(now - start)
                            elapsedTime.subtract(1, "hour")
                            setMinutes(elapsedTime.format("mm"))
                            setSeconds(elapsedTime.format("ss"))
                            setHours(elapsedTime.format("HH"))
                         },1000)
            return () => clearInterval(interval);
        },[]);



            return (
             <>
             <div class="uk-grid-small" data-uk-grid>
             <h4 class="uk-margin-right uk-background-muted uk-border-rounded" uk-leader>Session Time:{hours} Hours {minutes} Minutes {seconds} Seconds</h4>
             </div>
             <hr class="uk-divider-icon"/>
             <form onSubmit= {() => props.sessionStop("end")} class="uk-form  uk-margin-large uk-position-large uk-width-1-1 ">
             <div class="uk-grid-divider uk-child-width-expand@s" data-uk-grid>
                <div class="uk-margin ">
                 <label class="uk-form-label" htmlFor="form-horizontal-text">Notepad</label>
                    <div class="uk-form-controls">
                        <textarea  onChange ={props.handleChange} name="content" class="uk-textarea" rows="5" placeholder="...."></textarea>
                </div>
                    </div>  

                <div class="uk-margin ">
                <label class="uk-form-label" for="form-horizontal-text">Links</label>
                    <div class="uk-form-controls">
                        <input onChange={props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url" size ="5" placeholder="Add links you find usefull " name="0"/>
                        {linkArray}
                    <span><button class="uk-button uk-button-default uk-background-muted" onClick = { newInput}> Add Link</button></span>
                    </div>  
                </div> 
                </div>
                <button  class="uk-button uk-button-default uk-width-1-1 uk-background-muted"type="submit">Stop session</button>
                </form>
             </>
            );
       
}

export default Session