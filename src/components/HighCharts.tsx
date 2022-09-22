
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import robots from '../mockdata/robotsData';
import RobotRunDetails from '../mockdata/robotRuns';

const RobotHighCharts = () => {
  const options1 = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'High Chart'
    },
    series: [
      {
        type: 'column',
        name: 'total rum time',
        data: robots.map((robot) => robot.totalRuntime)
      }, 
      {
        type: 'column',
        name: 'Distance from home traveled',
        data: robots.map((robot) => robot.distanceFromHome)
      },
      {
        type: 'line',
        name: 'average coverage',
        data: robots.map((robot) => robot.avgCoverage)
      },
      {
        type: 'line',
        name: 'success rate',
        data: robots.map((robot) => robot.successRate)
      },
    ]
  };

  const options2= {
    chart: {
      type: 'area'
    },
    series: [
      {
        type: 'area',
        name: 'total rum time',
        data: robots.map((robot) => { 
          return { name: robot.robotName, y: robot.totalRuntime }
    })
    },
    {
      type: 'area',
      name: 'Distance from home traveled',
      data: robots.map((robot) => robot.distanceFromHome)
    },
    {
      type: 'area',
      name: 'average coverage',
      data: robots.map((robot) => robot.avgCoverage)
    },
    {
      type: 'area',
      name: 'success rate',
      data: robots.map((robot) => robot.successRate)
    }]
  };

  const options3 = {
    chart: {
      type: 'pie'
    },
    series:[
      {
        type: 'pie',
        name: 'total rum time',
        data: robots.map((robot) => robot.totalRuntime)
      }, 
    ]
  } 
  const { runs } = RobotRunDetails
  const options4 = {
    chart: {
      type: 'line'
    },
    series:[
      {
        type: 'line',
        name: runs[0].id,
        data: Object.values(runs[0].coverageAreaTimeData)
      }, 
      {
        type: 'line',
        name: runs[1].id,
        data: Object.values(runs[1].coverageAreaTimeData)
      }, 
    ]
  }

  
  return (
    <div style={{display:'flex', flexDirection:'column', border:'grey 2px solid'}}>  
        <HighchartsReact highcharts={Highcharts} options={options1} />
        <HighchartsReact highcharts={Highcharts} options={options4} />
        <HighchartsReact highcharts={Highcharts} options={options2} />
        <HighchartsReact highcharts={Highcharts} options={options3} />
    </div>
  )
}

export default RobotHighCharts
