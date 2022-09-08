import React from 'react'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

const RobotRunDetailsChart = () => {

   const data = {
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }

  return (  
    <>
        <div>Chart</div>
        <Chart type='line' data={{...data}} />
    </>
  )
}

export default RobotRunDetailsChart
