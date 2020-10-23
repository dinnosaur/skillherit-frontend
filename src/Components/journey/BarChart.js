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
                    backgroundColor: "#5f255f",
                    data: dataBar.focused,
                }, {
                    label: 'Distracted',
                    backgroundColor: "#4b77a9",
                    data: dataBar.distracted,
                }],
            },
            options: {
                responsive: true, 
                maintainAspectRatio: true,
                    tooltips: {
                        callbacks: {
                            label: function(t, d) {
                                let dstLabel = d.datasets[t.datasetIndex].label
                                let yLabel = moment.duration(t.yLabel, dataBar.formatLabel[0].toLowerCase());
                                return dstLabel + ': ' + yLabel.format("h [hrs], m [min], s [sec]") ;
                             }
                        }
                    },
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
                            labelString: 'Time' + `(${dataBar.formatLabel})`,
                        },
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, values) {
                                return  value + " " + `(${dataBar.formatLabel[0].toLowerCase()})` ;
                            }
                        }
                    }]
                }
            }
    })

    });

    return(
        <>
            <canvas id="myBar" width="600" ref={barChartRef} />
        </>
    )

}