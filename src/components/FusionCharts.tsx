// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import robots from '../mockdata/robotsData'
import RobotRunDetails from '../mockdata/robotRuns'

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const RobotFusionCharts = () => {

    const chartData = robots.map(robot => {
        return { 
            label: robot.robotName, 
            value: robot.avgRunTime
        }
    })
    const chartData2 = robots.map(robot => {
        return { 
            label: robot.robotName, 
            value: robot.successRate
        }
    })
      const chartConfigs = {
        type: "column2d", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
            subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
            xAxisName: "Country",           //Set the x-axis name
            yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
            numberSuffix: "meters",
            theme: "fusion"                 //Set the theme for your chart
          },
          // Chart Data - from step 2
          data: [...chartData, ...chartData2]
        }
      };

      const run1 = RobotRunDetails.runs[0].coverageAreaTimeData 
      console.log('run1', run1)
      
      const chartConfigs2 = {
        type: "line", // The chart type
        width: "700", // Width of the chart
        height: "400", // Height of the chart
        dataFormat: "json", // Data type
        dataSource: {
          // Chart Configuration
          chart: {
            caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
            subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
            xAxisName: "Country",           //Set the x-axis name
            yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
            numberSuffix: "meters",
            theme: "fusion"                 //Set the theme for your chart
          },
          // Chart Data - from step 2
          data:  [...chartData, ...chartData2]
        }
      };

      
  return (
    <div style={{ width: '600px'}}>
        <div>FusionCharts</div>
        <ReactFC {...chartConfigs} />
        <ReactFC {...chartConfigs2}/>
    </div>
  )
}

export default RobotFusionCharts