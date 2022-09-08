import React from 'react'
import 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';
import RobotRunDetails from '../mockdata/robotRuns.tsx';

const RobotRunDetailsChart = () => {
    console.log('RobotRunDetails', RobotRunDetails)

   const data = {
    labels: ['Successful runs', 'Failed Runs', ''],
    datasets: [
      {
        id: 'robotID',
        label: 'what does it mean?',
        data: [22, 6, 10 ],
        backgroundColor: [
            'rgba(255, 99, 132, 1.0)',
            'rgba(54, 162, 235, 0.8)',
            'grey',
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(54, 162, 235, 1)',
      ]
    }
    ],
  }

  return (  
      <div style={{width: '40vw', height: '40vh'}}>
        <div>Chart</div>
        <Doughnut data={{...data}} />
        <Line data={data}></Line>
    </div>
  )
}

export default RobotRunDetailsChart
