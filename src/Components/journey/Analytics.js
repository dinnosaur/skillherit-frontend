import React, { useEffect, useState, useRef } from "react"
import { Redirect, withRouter } from "react-router-dom";
import {Chart} from "chart.js";
import moment from 'moment';

let dataPie = []


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
            yLabel: durationFormat.format.toUpperCase(),
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



function Analytics(props) {
    const pieChartRef = useRef()
    const barChartRef = useRef()
    dataPie = calculateTotalTime(props)
    const dataBar = trackTime(props)




    useEffect(() => {
        const myChartRef = pieChartRef.current.getContext("2d")
        const myChartRef2 = barChartRef.current.getContext("2d")

        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Distracted", "Focused"],

                datasets: [
                    {
                        label: "Time",
                        data: dataPie,
                        backgroundColor: [
                            "#4b77a9",
                            "#5f255f"
                        ]
                    }
                ]
            },
            options: {
                tooltips: {
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return data['labels'][tooltipItem['index']] + ': ' + data['datasets'][0]['data'][tooltipItem['index']] + '%';
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Breakdown of your learning jouney'
                }
            }
        });

        new Chart(myChartRef2, {
            type: 'bar',
            data: {labels: dataBar.labels,
                datasets: [{
                    label: 'Focused',
                    backgroundColor: "#caf270",
                    data: dataBar.focused,
                }, {
                    label: 'Distracted',
                    backgroundColor: "#45c490",
                    data: dataBar.distracted,
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Skills',
                        }
                    }],
                    yAxes: [{
                        stacked: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Time' + `(${dataBar.yLabel})`,
                        },
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return  value + " " + `(${dataBar.yLabel[0].toLowerCase()})` ;
                            }
                        }
                    }]
                }
            }
        })
    })


    return (
        <>
            {props.tracks ?
                <>
                    <br />
                    <br />
                    <canvas id="myPie" width="400" ref={pieChartRef} />
                    <canvas id="myBar" width="400" ref={barChartRef} />
                </>
                :
                null
            }
        </>
    )
}

export default Analytics