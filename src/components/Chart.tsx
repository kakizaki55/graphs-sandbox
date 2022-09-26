import React from 'react'
import 'chart.js/auto';
import { Bar, Line, Doughnut, PolarArea, Radar } from 'react-chartjs-2';
import robots from '../mockdata/robotsData.js';
import RobotRunDetails from '../mockdata/robotRuns.js'



const RobotChart = () => {

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
        borderWidth: 2,
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

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  

const robotsRunData = {
    labels: RobotRunDetails.runs.map((run) => Object.keys(run.coverageAreaTimeData)).filter(onlyUnique), 
    datasets: RobotRunDetails.runs.map((run) => {
        return {
            label: run.id,
            data: run.coverageAreaTimeData, 
            backgroundColor: [
                '#690BB4',
            ],
        }
     })
}


  return (  
      <div style={{width: '600px'}}>
        <div>Chart.js</div>
            <Bar data={robotsData} ></Bar>
            <Line data={robotsRunData}></Line>
            <Line data={robotsData}></Line>
            <Doughnut data={robotsData}></Doughnut>
            <PolarArea data={robotsData}></PolarArea>
            <Radar data={robotsData}></Radar>
    </div>
  )
}

export default RobotChart
