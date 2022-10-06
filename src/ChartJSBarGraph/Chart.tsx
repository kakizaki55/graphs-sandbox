import React from 'react'
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

interface BarGraphProps {
    data: any
    size: any
}


const BarGraph = ({data , size}: BarGraphProps) => {
  
  return (  
      <div style={{ 
        width: size.width, 
        height: size.height 
        }}>
        <div>Chart.js</div>
            <Bar data={data} ></Bar>
    </div>
  )
}

export default BarGraph
