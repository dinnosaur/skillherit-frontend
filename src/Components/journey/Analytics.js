import React, { Component, Fragment, useEffect, useState, useRef } from "react"
import { Redirect, withRouter } from "react-router-dom";
import {Chart,timeFormat} from "chart.js";
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
    let distracted = [] 
    let distraction = null
    let focus = null 
   
    let focused = [] 
    let labels = []

    props.tracks.map(track => {
        labels = [...labels,track.skill.title]
        // distraction = moment.duration(track.distraction, 'hours')
       
        console.log(distraction)
        distracted = [...distracted,  track.distraction]
        
        // focus = moment.duration(track.time, 'hours')
      
        console.log(focus)
        focused = [...focused,track.time ]
    })
    


    return {
            labels: labels, 
            distracted: distracted,
            focused: focused,
           }
}



function Analytics(props) {
    const pieChartRef = useRef()
    const barChartRef = useRef()
    dataPie = calculateTotalTime(props)
    const dataBar = trackTime(props)
    console.log(props)



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
                        stacked: true
                    }],
                    yAxes: [{
                        type: 'time',
                        time: {
                            parser: 'h.hh',
                            unit: "hours",
                        },
                        displayFormats: {
                            'seconds': 's',
                            'minutes': 'm',
                            'hours': 'h'

                        },
                        stacked: true
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