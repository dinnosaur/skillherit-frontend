import React, { useEffect, useState, useRef } from "react"
import PieChart from "./PieChart"
import BarChart from "./BarChart"
import {Chart} from "chart.js";
import moment from 'moment';


function Analytics(props) {

    let dataPie = []
    let dataBar = []


    const calculateTotalTime = (props) => {
        let totalFocused = 0
        let totalDistracted = 0

        props.tracks.map(track => {
            totalDistracted += track.distraction;
            totalFocused += track.time
        })
        const percentageDistracted = ((totalDistracted / (totalDistracted + totalFocused)) * 100).toFixed(2)
        const percentageFocused = ((totalFocused / (totalDistracted + totalFocused)) * 100).toFixed(2)
        
        return [percentageDistracted, percentageFocused]
    }


    const trackTime = (props) => {
        let distractions = [] 
        let focused = [] 
        let labels = []

        const durationFormat =  findLongestTime(props) 
    
        props.tracks.map(track => {
            labels = [...labels,track.skill.title]
            distractions = [...distractions,  track.distraction * durationFormat.convertor]
            focused = [...focused, track.time * durationFormat.convertor]
        })
        
        return {
                formatLabel: durationFormat.format.toUpperCase(),
                labels: labels, 
                distracted: distractions,
                focused: focused,
            }
    }


    const findLongestTime = (props) =>  {
        let highestTime = 0

        props.tracks.map(track => { 
            if (highestTime < track.time) {
                highestTime = track.time
            }   
        })

        const duration =  durationIdentifier(highestTime)
    
        return duration
    }

    const durationIdentifier = (highestTime) => { 
        let convertor = 0

        highestTime = moment.duration(highestTime, 'hours')
        const durationFormat = highestTime.format("h [hrs], m [min], s [sec]").split(/,| /)[1]
        
        if (durationFormat === "min" || durationFormat === "mins") {
            convertor = 60 
        } 
        else if (durationFormat === "sec" || durationFormat === "secs" ) {
            convertor = 120
        }
        else {
            convertor = 1
        }
        return {format: durationFormat, convertor: convertor}     
    }   

    dataBar = trackTime(props)
    dataPie = calculateTotalTime(props)

  
        
        return (
            <>
                {props.tracks ?
                    <div class="uk-grid-small uk-grid-divider uk-child-width-1-2@m" data-uk-grid>
                        <div class="uk-position-center-left  chart-pie">
                        <PieChart dataPie={dataPie} />
                        </div>
                        
                        <div class="uk-position-center-right  chart-bar">
                        <BarChart dataBar={dataBar} />
                        </div>
                    </div>
                    :
                    null
                }
            </>
        )    
}

export default Analytics