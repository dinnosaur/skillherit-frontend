import React, { useEffect, useState, useRef } from "react"
import {Chart} from "chart.js";
import moment from 'moment';


export default function PieChart(props) {

    const pieChartRef = useRef()

    useEffect(() => {
        const myChartRef = pieChartRef.current.getContext("2d")

        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: ["Distracted", "Focused"],

                datasets: [
                    {
                        label: "Time",
                        data: props.dataPie,
                        backgroundColor: [
                            "#4b77a9",
                            "#5f255f"
                        ]
                    }
                ]
            },
            options: {
                responsive: true, 
                maintainAspectRatio: true,
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
        })
    })

    return(
        <>
        <canvas id="myPie" width="600" ref={pieChartRef} />
        </>
    )

}