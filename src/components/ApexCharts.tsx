import React from 'react'
import ReactApexChart from "react-apexcharts";
import robots from '../mockdata/robotsData';

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
        // position: '',
        width: 400
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


  return (
  <div>
    <div>ApexChart</div>
      <ReactApexChart 
        options={chartData.options} 
        series={chartData.series} 
        type="line" />
      <ReactApexChart 
        options={chartData.options} 
        series={chartData.series} 
        type="bar" />
  </div>
  )
}

export default RobotApexCharts