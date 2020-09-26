import React, { useEffect, useState, useRef } from "react"
import {Chart} from "chart.js";
import moment from 'moment';


export default function BarChart({dataBar}) {

    const barChartRef = useRef()

    useEffect(() => {
        const myChartRef2 = barChartRef.current.getContext("2d")

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

    });

    return(
        <>
            <canvas id="myBar" width="400" ref={barChartRef} />
        </>
    )

}