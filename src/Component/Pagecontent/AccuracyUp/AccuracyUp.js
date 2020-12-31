import React, { Component } from 'react'
import Style from './AccuracyUp.module.css'
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";
import Axios from 'axios';
const data = {
    
    datasets: [
      {
        label:'Rupees',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#F0F0F0',
        borderColor: '#C30F70',
        borderCapStyle: 'butt',
        borderDashOffset: 0.1,
        borderJoinStyle: 'miter',
        pointBorderColor: '#C30F70',
        pointBackgroundColor: '#C30F70',    
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#C30F70',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data:[],
      },
      {
        label:'Doller',
        fill: false,
        lineTension: 0.5,
        backgroundColor: '#F0F0F0',
        borderColor: '#5843BE',
        borderCapStyle: 'butt',
        borderDashOffset: 0.1,
        borderJoinStyle: 'miter',
        pointBorderColor: '#5843BE',
        pointBackgroundColor: '#5843BE',    
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#5843BE',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data:[],
    }
    ]
  };
  
  const options = {
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function() {
                let xstart=Math.floor(Math.random() * 10)
                Axios.get(`https://canvasjs.com/services/data/datapoints.php?xstart=${xstart}&ystart=10&length=1&type=json%22`)
                    .then((res)=>{
                        let apidata=res.data
                            data.datasets[0].data.push({
                                x: Date.now(),
                                y: apidata[0][0]
                            })
                            data.datasets[1].data.push({
                                x: Date.now(),
                                y: apidata[0][1]
                            })        
                    })
                    .catch(err=>{
                        alert("error")
                    })
            },
            delay: 2000
          }
        }
      ]
    }
  };

export default class AccuracyUp extends Component {
    render() {
        return (
            <div className={Style.body}>     
                <Line
                    data={data}
                    options={options}
                /> 
            </div>
        )
    }
}
