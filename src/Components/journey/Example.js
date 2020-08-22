import React, { Component, Fragment, useEffect, useState, useRef } from "react"
import { Redirect, withRouter } from "react-router-dom";
import Chart from "chart.js";
import { months } from "moment";

let dataPie = []
let dataBar = []
let labels = []

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
    
    props.tracks.map(track => {
        labels = [...labels,track.skill.title]
        
    })
    console.log(labels)
}

 


function Example(props) {
    const pieChartRef = useRef()
    const barChartRef = useRef()
    dataPie = calculateTotalTime(props)
    dataBar = trackTime(props)
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
            data: {labels: labels,
                datasets: [{
                    label: 'Focused',
                    backgroundColor: "#caf270",
                    data: [12, 59, 5, 56, 58,12, 59, 87, 45],
                }, {
                    label: 'Distracted',
                    backgroundColor: "#45c490",
                    data: [18, 59, 5, 56, 58,12, 59, 85, 23],
                }],
            },
            options: {
                // Elements options apply to all of the options unless overridden in a dataset
                // In this case, we are setting the border of each bar to be 2px wide and green
                elements: {
                    rectangle: {
                        borderWidth: 2,
                        borderColor: 'rgb(0, 255, 0)',
                        borderSkipped: 'bottom'
                    }
                },
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Bar Chart'
                },
                pan: {
                    enabled: true,
                    mode: 'xy' // is panning about the y axis neccessary for bar charts?
                },
                zoom: {
                    enabled: true,
                    mode: 'x',
                    sensitivity: 3,
                    limits: {
                        max: 10,
                        min: 0.5
                    }
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            min: 'February-16',
                            max: 'June-16'
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

export default Example