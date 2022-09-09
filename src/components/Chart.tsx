import React from 'react'
import 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import robots from '../mockdata/robotsData.js';


const RobotChart = () => {
    // console.log('RobotRunDetails', RobotRunDetails)


  const robotsData = {
    labels: robots.map((robot) => robot.robotName), 
    datasets: [{
        label: 'Success rate',
        data: robots.map((robot) => robot.successRate),
        borderWidth: 1,
        backgroundColor: [
            '#4CAF50',
        ],
    }, {
        label: 'Total runs',
        data: robots.map((robot) => robot.totalRuntime),
        borderWidth: 1,
        backgroundColor: [
            '#00DBDE',
        ],
    }, {
        label: 'Average coverage',
        data: robots.map((robot) => robot.avgCoverage),
        borderWidth: 1,
        backgroundColor: [
            '#4CAF50',
        ],
    }, {
        label: 'distance from home traveled',
        data: robots.map((robot) => robot.distanceFromHome),
        borderWidth: 1,
        backgroundColor: [
            '#690BB4',
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

  return (  
      <div style={{width: '40vw', height: '40vh'}}>
        <div>Chart</div>
        <Bar data={{...robotsData}}></Bar>
    </div>
  )
}

export default RobotChart
