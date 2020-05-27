import React, { Component, Fragment, useState,useEffect } from "react"
import moment from 'moment';

function Session(props) {
    const [linkArray,setLinkArray] = useState([])
    const [linkNo, setLinkNo] = useState(1)
    const [hours, setHours ] = useState(0)
    const [minutes, setMinutes] = useState(0)

   const newInput = (e) => {
        e.preventDefault()
        setLinkNo(linkNo + 1)
        setLinkArray([...linkArray,<input onChange= {props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url"  placeholder="Some text..." name={linkNo.toString()}/>])
    }

   

    useEffect(() => {
        let start = moment();
        console.log(start)
        let elapsedTime = 0
        let minute = 0  
        
        const interval = setInterval(() => {
            let now = moment();
             elapsedTime = moment(now - start)
             minute = elapsedTime.format("mm")
                if (minute === "00"){
                    setHours(hours => hours +1)
                }
            setMinutes(minute)
        },60000)
            return () => clearInterval(interval);
      },[]);



            return (
             <>
             <h2>Session Time:{hours} Hours {minutes} Minutes</h2>
             <form onSubmit= {() => props.sessionStop("end")} class="uk-form-horizontal  uk-margin-large uk-position-large uk-width-1-2 ">
                <div class="uk-margin ">
                 <label class="uk-form-label" htmlFor="form-horizontal-text">Notepad</label>
                    <div class="uk-form-controls">
                        <textarea  onChange ={props.handleChange} name="content" class="uk-textarea" rows="5" placeholder="Textarea"></textarea>
                </div>
                    </div>  

                <div class="uk-margin ">
                <label class="uk-form-label" for="form-horizontal-text">Links</label>
                    <div class="uk-form-controls">
                        <input onChange={props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url" size ="5" placeholder="Add Link you find usefull " name="0"/>
                        {linkArray}
                    <span><button class="uk-button uk-button-default" onClick = { newInput}> Add Link</button></span>
                    </div>  
                </div> 
                
                <button type="submit">Stop session</button>
                </form>
             </>
            );
       
}

export default Session