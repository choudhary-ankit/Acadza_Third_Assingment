import React, { Component } from 'react'
import Style from './AccuracyUp.module.css'
import { Line } from 'react-chartjs-2';
import { ChartData } from 'react-chartjs-2';
import Axios from 'axios';

var mychart ={
    labels:['Day-1', 'Day-2', 'Day-3', 'Day-4', 'Day-5', 'Day-6', 'Day-7', 'Day-8', 'Day-9', 'Day-10'],
    datasets: [
        {
            label:'Data Set 1',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#F0F0F0',
            borderColor: '#C30F70',
            borderCapStyle: 'butt',
            borderDashOffset: 0.5,
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
            label:'Data set 2',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#F0F0F0',
            borderColor: '#5843BE',
            borderCapStyle: 'butt',
            borderDashOffset: 0.5,
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
    
}

export default class AccuracyUp extends Component {
    constructor(props){
        super(props)
        this.state={
            time: null,
        }
    }
componentDidMount=()=>{
    let xstart=Math.floor(Math.random() * 10)
    Axios.get(`https://canvasjs.com/services/data/datapoints.php?xstart=${xstart}&ystart=10&length=10&type=json%22`)
        .then((res)=>{
                let apidata=res.data
                apidata.forEach(element=>{
                        element.map((e, i)=>{
                            if(i===0){  
                                mychart.datasets[0].data.push(e)
                                
                            }
                            else if(i===1){ 
                                mychart.datasets[1].data.push(e)
                                
                            }
                        })
                })
            this.forceUpdate();
        })
        .catch(err=>{
            alert("error")
        })
        
        setTimeout(()=>{
            window.location.reload()
        },10000) 
    }
    render() {
        console.log(mychart.datasets[1].data)
        console.log(mychart.datasets[0].data)
        return (
            <div className={Style.body}>     
                <Line ref="chart" data={mychart} className={Style.chart} />  
            </div>
        )
    }
}
