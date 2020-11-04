import React, { Fragment, useState, useEffect, useRef } from "react"
import moment from 'moment';
import ModalSkill from './modalSkill'

function Session(props) {
    const [linkArray, setLinkArray] = useState([])
    const [linkNo, setLinkNo] = useState(1)
//display time
    const [hours, setHours] = useState("00")
    const [minutes, setMinutes] = useState("00")
    const [seconds, setSeconds] = useState("00")
//IF its paused start a timer by recording the pause time
    const [pauseState, setPauseState] = useState(false)
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

    const [showSkill, setShowSkill] = useState(false)


    const newLinkInput = (e) => {
        e.preventDefault()
        setLinkNo(linkNo + 1)
        setLinkArray([...linkArray, <input onChange={props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url" placeholder="Some text..." name={linkNo.toString()} />])
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
                elapsedTime.subtract(distractionRef.current, "ms")
                setMinutes(elapsedTime.format("mm"))
                setSeconds(elapsedTime.format("ss"))
                setHours(elapsedTime.format("HH"))
            }
        }, 1000)

        return () => clearInterval(interval);
    }, []);


    const elapsedPauseTime = () => {
        const differences = []
        let total = 0
        for (let i = 0; i < pauseStartRef.current.length; i++) {
            differences.push(moment.duration(pauseEndRef.current[i].diff(pauseStartRef.current[i])))
        }
        differences.forEach(time => { total += time })
        return total
    }

    const distractionTimer = (state) => {
        switch (state) {
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
            <ModalSkill track={props.track}/>
            <div class="uk-grid-column-large uk-child-width-1-2" data-uk-grid>
                <div><h4 class="uk-margin-right uk-background-muted uk-border-rounded uk-text-light" >Session Time:{hours} Hours {minutes} Minutes {seconds} Seconds</h4></div>
                {/* <button onClick={() => distractionTimer("start")} class="uk-button uk-button-default uk-background-muted uk-border-rounded uk-text-light" uk-leader>See Skill</button> */}  
                <div><button class="uk-button uk-button-default uk-width-1-4 uk-border-rounded" data-uk-toggle="target: #modal-full1" >See Skill !</button> </div>   
            </div>

            <hr class="uk-divider-icon" />

            <form onSubmit={() => props.sessionStop("end", distractionRef.current)} class="uk-form  uk-margin-large uk-position-large uk-width-1-1">
                <div class="uk-grid-divider uk-child-width-expand@s" data-uk-grid>
                    <div class="uk-margin ">
                        <label class="uk-form-label" htmlFor="form-horizontal-text">Notepad</label>
                        <div class="uk-form-controls">
                            <textarea onChange={props.handleChange} name="content" class="uk-textarea" rows="5" placeholder="...."></textarea>
                        </div>
                    </div>
                    <div class="uk-margin ">
                        <label class="uk-form-label" for="form-horizontal-text">Links</label>
                        <div class="uk-form-controls">
                            <input onChange={props.handleLinks} class="login uk-input" id="form-horizontal-text" type="url" size="5" placeholder="Add links you find usefull " name="0" />
                            {linkArray}
                            <span><button class="uk-button uk-button-default uk-background-muted uk-border-rounded " onClick={newLinkInput}> Add Link</button></span>
                        </div>
                    </div>
                </div>
                <button class="uk-button uk-button-default uk-width-1-2 uk-background-muted" type="submit">Stop session</button>
            </form>

            {pauseState === false ?
                <button onClick={() => distractionTimer("start")} class="uk-button uk-button-danger uk-width-1-2 ">Distracted!</button>
                :
                <button onClick={() => distractionTimer("end")} class="uk-button uk-button-primary uk-width-1-2 uk-background-muted uk-border-rounded"> Resume!</button>
            }
        </>
    );

}


export default Session 