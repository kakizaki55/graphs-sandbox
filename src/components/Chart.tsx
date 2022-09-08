import React from 'react'
import 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import RobotRunDetails from '../mockdata/robotRuns.js';
import robots from '../mockdata/robotsData.js';


const RobotRunDetailsChart = () => {
    // console.log('RobotRunDetails', RobotRunDetails)


  const robotsData = {
    labels: robots.map((robot) => robot.robotName), 
    datasets: [{
        label: 'Success rate',
        data: robots.map((robot) => robot.successRate),
        borderWidth: 1,
        backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
        ],
    }, {
        label: 'Total runs',
        data: robots.map((robot) => robot.totalRuntime),
        borderWidth: 1,
        backgroundColor: [
            'rgba(120, 10, 23, 0.9)',
        ],
    }, {
        label: 'Average coverage',
        data: robots.map((robot) => robot.avgCoverage),
        borderWidth: 1,
        backgroundColor: [
            'rgba(10, 10, 256, 0.9)',
        ],
    }, {
        label: 'distance from home traveled',
        data: robots.map((robot) => robot.distanceFromHome),
        borderWidth: 1,
        backgroundColor: [
            'rgba(10, 120, 50, 0.9)',
        ],
    }],
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  }


console.log('robotsData', robotsData)
  return (  
      <div style={{width: '40vw', height: '40vh'}}>
        <div>Chart</div>
        <Bar data={{...robotsData}}></Bar>
    </div>
  )
}

export default RobotRunDetailsChart
