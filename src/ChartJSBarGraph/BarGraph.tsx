import React from 'react'
// import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

interface BarGraphProps {
    data: any
    size?: any
}

const styles={
  backGroudColor: '#32a0a8'
}


const BarGraph = ({data , size={width: 1000, height: 500}}: BarGraphProps) => {

  
  return (  
      <div style={{ 
        width: size.width, 
        height: size.height 
        }}>
        <div>Chart.js</div>
            <Bar data={{...data, ...styles}} ></Bar>
    </div>
  )
}

export default BarGraph
