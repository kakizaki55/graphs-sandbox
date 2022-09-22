import React from 'react'
import ReactApexChart from "react-apexcharts";
import robots from '../mockdata/robotsData';
import RobotRunDetails from '../mockdata/robotRuns';
const RobotApexCharts = () => {

  const chartData = {
    options: {
      chart: {
        // type: 'Line',
        id: 'apexchart-example',
      },
      xaxis: {
        categories: robots.map((robot) => robot.robotName)
      },
      fill: {
        gradient: {
          shade: 'light',
          type: "horizontal",
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
      legend: {
        // position: '',
        width: 600
        // position: 'top',
      },
    },
    series: [{
      name: 'Average coverage ',
      type: 'column',
      data: robots.map((robot) => robot.avgCoverage)
    }, {
      name: 'Success rate',
      type: 'column',
      data: robots.map((robot) => robot.successRate)
    }, {
      name: 'distance from home',
      type: 'column',
      data: robots.map((robot) => robot.distanceFromHome)
    }, {
      name: 'total runtime',
      type: 'column',
      data: robots.map((robot) => robot.totalRuntime)
    }],
  }

  const chartData2 = {
    options: {
      chart: {
        // type: 'Line',
        id: 'apexchart-example',
      },
      xaxis: {
        categories: Object.keys(RobotRunDetails.runs[0].coverageAreaTimeData)
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
      legend: {
        width: 600
      },
    },
    series: [{
      name: 'Average coverage ',
      type: 'line',
      data: Object.values(RobotRunDetails.runs[0].coverageAreaTimeData)
    }]
  }



  return (
  <div style={{width: '600px', border:'grey 2px solid'}}>
    <div>ApexChart</div>
      <ReactApexChart 
        options={chartData.options} 
        series={chartData.series} 
        type="line" />
      <ReactApexChart 
        options={chartData2.options} 
        series={chartData2.series} 
        type="line" />
  </div>
  )
}

export default RobotApexCharts