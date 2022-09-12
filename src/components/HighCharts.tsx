
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import robots from '../mockdata/robotsData';

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
    title: {
      text: 'High Chart'
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
    title: {
      text: 'High Chart'
    },
    series:[
      {
        type: 'pie',
        name: 'total rum time',
        data: robots.map((robot) => robot.totalRuntime)
      }, 
    ]
  }

  const options4 = { 
    chart: {
      type: 'line'
    },
    title: {
      text: 'High'
    }, 
    series: [{
      type: 'bellcurve',
      xAxis: 1,
      yAxis: 1,
      baseSeries: index
  }, {
      data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4]
  }]
  }


  return (
    <div style={{display:'flex', flexDirection:'row'}}>  
        <HighchartsReact highcharts={Highcharts} options={options1} />
        <HighchartsReact highcharts={Highcharts} options={options2} />
        <HighchartsReact highcharts={Highcharts} options={options3} />
        <HighchartsReact highcharts={Highcharts} options={options4} />
    </div>
  )
}

export default RobotHighCharts
