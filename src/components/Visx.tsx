import React from 'react';
import robots from '../mockdata/robotsData';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { BarGroup } from '@visx/shape';
import { AxisBottom } from '@visx/axis';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeParse, timeFormat } from 'd3-time-format';

console.log('robots', robots)
const data = robots.map((robot) => { 
   return { 
    name: robot.robotName, 
    avgCoverage: robot.avgCoverage, 
    successRate: robot.successRate,
    distanceFromHome: robot.distanceFromHome,
    totalRunTime: robot.totalRuntime,

  } 
})
console.log('data', data)
// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.name;
const y = d => +d.avgCoverage * 100;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: .6,
});
const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(y))],
});

// Compose together the scale and accessor functions to get point functions
const compose = (scale, accessor) => data => scale(accessor(data));
const xPoint = compose(xScale, x);
const yPoint = compose(yScale, y);

// Finally we'll embed it all in an SVG


//-----------------//

const RobotVisx = () => {
  return (
    <>
    <div>Visx</div>
    <div style={{border: '2px solid grey'}}>
        <svg width={width} height={height}>
        {data.map((name, avgCoverage, successRate) => {
            const barHeight = yMax - yPoint(name);
            return (
              <div key={`bar-${avgCoverage}`}>
                <Group >
                    <Bar 
                        x={xPoint(name)}
                        y={yMax - barHeight}
                        height={barHeight}
                        width={xScale.bandwidth()}
                        fill="#fc2e1c"
                        />
                </Group>
                <Group key={`bar-${successRate}`}>
                    <Bar 
                        x={xPoint(name) - 20}
                        y={yMax - barHeight}
                        height={barHeight}
                        width={xScale.bandwidth()}
                        fill="pink"
                        />
                </Group>
              </div >
        );
    })}
        </svg>
    </div>
    </>
  )
}

export default RobotVisx
