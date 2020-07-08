import React, {Fragment, useState,useEffect, useRef } from "react"
import moment from 'moment';

function Session(props) {
    const [linkArray,setLinkArray] = useState([])
    const [linkNo, setLinkNo] = useState(1)
    const [hours, setHours ] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")
    const [pauseState,setPauseState] = useState(false)
    const [pauseStart, setPauseStart] = useState([])
    const [pauseEnd, setPauseEnd] = useState([])
    const [distraction, setDistraction] = useState(0)
    const [start, setStart] = useState(0)
    const pauseStateRef = useRef()
    const pauseStartRef = useRef()
    const pauseEndRef = useRef()
    const StartRef = useRef()
    const distractionRef = useRef()
    pauseStateRef.current = pauseState; 
    pauseStartRef.current = pauseStart;
    StartRef.current = start 
    distractionRef.current = distraction 
    pauseEndRef.current = pauseEnd
    
    
    const newLinkInput = (e) => {
            e.preventDefault()
            setLinkNo(linkNo + 1)
            setLinkArray([...linkArray,<input onChange= {props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url"  placeholder="Some text..." name={linkNo.toString()}/>])
    }

    useEffect(() => {
        setStart(moment());
        let elapsedTime = 0
         
        const interval = setInterval(() => {
                      let now = moment();
                        if (pauseStateRef.current === false) {
                            elapsedTime = moment(now - StartRef.current)
                            elapsedTime.subtract(1, "hour")
                            if (pauseEndRef.current.length > 0) {
                              setDistraction(elapsedPauseTime())
                               
                            }
                            console.log(distraction)
                            console.log(distractionRef.current)
                            elapsedTime.subtract(distractionRef.current, "ms")
                            setMinutes(elapsedTime.format("mm"))
                            setSeconds(elapsedTime.format("ss"))
                            setHours(elapsedTime.format("HH"))
                        }
                         },1000)
            
    return () => clearInterval(interval);
    },[]);


    const elapsedPauseTime = () => {
        const differences = []
        let total = 0 
        for(let i=0; i < pauseStartRef.current.length; i++ ) {
            differences.push(moment.duration(pauseEndRef.current[i].diff(pauseStartRef.current[i])))
        }
        differences.forEach(time => {total += time })
        return total
    }

    const distractionTimer = (state) => {
         switch(state) {
            case "start":
                setPauseStart([...pauseStart, moment()])
                setPauseState(true)
            break
            case "end":
                setPauseEnd([...pauseEnd, moment()]);
                setPauseState(false)
            break;
         }
    }
     
            return (
             <>
             <div class="uk-grid-small" data-uk-grid>
             <h4 class="uk-margin-right uk-background-muted uk-border-rounded uk-text-light" uk-leader>Session Time:{hours} Hours {minutes} Minutes {seconds} Seconds</h4>
             </div>
             
             <hr class="uk-divider-icon"/>
             
             <form onSubmit= {() => props.sessionStop("end",distractionRef.current)} class="uk-form  uk-margin-large uk-position-large uk-width-1-1">
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
                    <span><button class="uk-button uk-button-default uk-background-muted" onClick = { newLinkInput}> Add Link</button></span>
                    </div>  
                </div>
             </div>
                <button  class="uk-button uk-button-default uk-width-1-1 uk-background-muted" type="submit">Stop session</button>
                </form>
                
                {pauseState === false ?  
                    <button onClick ={() => distractionTimer("start")} class="uk-button uk-button-default uk-width-1-1 uk-background-muted"> Distracted!</button>
                  :
                    <button onClick ={() => distractionTimer("end")} class="uk-button uk-button-default uk-width-1-1 uk-background-muted"> Resume!</button>
                }
             </>
            );
       
}


export default Session 