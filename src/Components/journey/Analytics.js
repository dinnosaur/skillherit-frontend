import React, { Component, Fragment, useEffect, useState, useRef } from "react"
import { Redirect, withRouter } from "react-router-dom";
import Chart from "chart.js";
import { months } from "moment";

let data = []

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


function Analytics(props) {
    const pieChartRef = useRef()
    const barChartRef = useRef()
    data = calculateTotalTime(props)
    console.log(data)



    useEffect(() => {
        const myChartRef = pieChartRef.current.getContext("2d")
        const myChartRef2 = pieChartRef.current.getContext("2d")

        new Chart(pieChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Distracted", "Focused"],

                datasets: [
                    {
                        label: "Time",
                        data: data,
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

        new Chart(myChartRef, {
            type: 'bar',
            data: data,
            options: {
                title: {
                    display: true,
                    text: 'Breakdown of your learning jouney'
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
                    <canvas id="myChart" width="400" ref={pieChartRef} />
                </>
                :
                null}
        </>
    )
}

export default Analytics