
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import robots from '../mockdata/robotsData';

const RobotHighCharts = () => {
  const options = {
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
        name: 'edges covered',
        data: robots.map((robot) => robot.edgeCoveragePct)
      }
      ,
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
  
  return (
    <div>  
        <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default RobotHighCharts
