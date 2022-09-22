import ReactEChart from "echarts-for-react";
import React from "react";
import robots from "../mockdata/robotsData";
import RobotRunDetails from "../mockdata/robotRuns";

export default function RobotEChart() {
  const eChartsOption = {
    title: {
      // title of our chart
      text: "Echarts"
    },
    xAxis: {
      // name of X Axis
      name: "X Axis",
      type: "category",
      // Contains the values for XAxis
      data: robots.map(robot => robot.robotName)
    },
    yAxis: {
      // name of Y Axis
      name: "time",
      type: "value"
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {}
      }
    },

    series: [{
        label: 'average coverage',
        data: robots.map(robot => robot.avgCoverage),
        type: "bar",
    },
    {
        data: robots.map(robot => robot.successRate),
        type: "bar",
        stack: "percentage"
    },
    {
        data: robots.map(robot => robot.distanceFromHome),
        type: "bar",
    },
    {
        data: robots.map(robot => robot.totalRuntime),
        type: "bar",
        stack: "time"
    },]
  };

  const eChartsOption2 = {
    title: {
      // title of our chart
      text: "Echarts"
    },
    xAxis: {
      // name of X Axis
      name: "X Axis",
      type: "category",
      // Contains the values for XAxis
      data: robots.map(robot => robot.robotName)
    },
    yAxis: {
      // name of Y Axis
      name: "time",
      type: "value"
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {}
      }
    },

    series: [{
        label: 'average coverage',
        data: robots.map(robot => robot.avgCoverage),
        type: "pie",
    },
    {
        data: robots.map(robot => robot.successRate),
        type: "pie",
        stack: "percentage"
    },
    {
        data: robots.map(robot => robot.distanceFromHome),
        type: "line",
    },
    {
        data: robots.map(robot => robot.totalRuntime),
        type: "line",
        stack: "time"
    },]
  };

  const { runs } = RobotRunDetails

  const eChartsOption3 = {
    title: {
      // title of our chart
      text: "Echarts"
    },
    xAxis: {
      // name of X Axis
      name: "X Axis",
      type: "time",
      // Contains the values for XAxis
      data: Object.keys(runs[0].coverageAreaTimeData)
    },
    yAxis: {
      // name of Y Axis
      name: "coverage",
      type: "value"
    },
    //To enable tooltips
    tooltip: {},
    // To enable toolbox
    toolbox: {
      feature: {
        // displays a options to direct save chart as a image
        saveAsImage: {}
      }
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
        {
            type: 'line',
            name: runs[2].id,
            data: Object.values(runs[2].coverageAreaTimeData)
          }, 
      ]
  };

  return (
    <div
      style={{
          width: "600px",
          display: "flex",
          flexDirection:'column',
          border: 'grey 2px solid'
        }}
        >
        <ReactEChart
            style={{
              width: "600px",
              height: "600px",
            }}
            option={eChartsOption}
        />
        <ReactEChart
            style={{
              width: "600px",
              height: "600px",
            }}
            option={eChartsOption3}
        />
        <ReactEChart
            style={{
              width: "600px",
              height: "600px",
            }}
            option={eChartsOption2}
        />
    </div>
  );
}
