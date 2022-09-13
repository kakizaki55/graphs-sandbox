import React from 'react';
import { letterFrequency } from '@visx/mock-data';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';
import { BarGroup } from '@visx/shape';
import { AxisBottom } from '@visx/axis';
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale';
import { timeParse, timeFormat } from 'd3-time-format';

// We'll use some mock data from `@visx/mock-data` for this.
const data = letterFrequency;

// Define the graph dimensions and margins
const width = 500;
const height = 500;
const margin = { top: 20, bottom: 20, left: 20, right: 20 };

// Then we'll create some bounds
const xMax = width - margin.left - margin.right;
const yMax = height - margin.top - margin.bottom;

// We'll make some helpers to get at the data we want
const x = d => d.letter;
const y = d => +d.frequency * 100;

// And then scale the graph by our data
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(x),
  padding: .1,
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

const blue = '#aeeef8';
export const green = '#e5fd3d';
const purple = '#9caff6';
export const background = '#612efb';

const barData = cityTemperature.slice(0, 8);
const keys = Object.keys(data[0]).filter((d) => d !== 'date');
const defaultMargin = { top: 40, right: 0, bottom: 40, left: 0 };

const parseDate = timeParse('%Y-%m-%d');
const format = timeFormat('%b %d');
const formatDate = (date: string) => format(parseDate(date) as Date);

// accessors
const getDate = (d) => d.date;

// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2,
});
const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1,
});
const tempScale = scaleLinear<number>({
  domain: [0, Math.max(...data.map((d) => Math.max(...keys.map((key) => Number(d[key])))))],
});
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [blue, green, purple],
});

const RobotVisx = () => {
  return (
    <>
    <div>Visx</div>
    <div>
    {/* <svg width={width} height={height}>
      <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
      <Group top={margin.top} left={margin.left}>
        <BarGroup
          data={barData}
          keys={keys}
          height={yMax}
          x0={getDate}
          x0Scale={dateScale}
          x1Scale={cityScale}
          yScale={tempScale}
          color={colorScale}
        >
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
                {barGroup.bars.map((bar) => (
                  <rect
                    key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
      </Group> */}
      {/* <AxisBottom
        top={yMax + margin.top}
        tickFormat={formatDate}
        scale={dateScale}
        stroke={green}
        tickStroke={green}
        hideAxisLine
        tickLabelProps={() => ({
          fill: green,
          fontSize: 11,
          textAnchor: 'middle',
        })}
      />
    </svg> */}
    </div>
    <div style={{border: '2px solid grey'}}>
        <svg width={width} height={height}>
        {data.map((letter, frequency) => {
            const barHeight = yMax - yPoint(letter);
            return (
                <Group key={`bar-${frequency}`}>
                    <Bar 
                        x={xPoint(letter)}
                        y={yMax - barHeight}
                        height={barHeight}
                        width={xScale.bandwidth()}
                        fill="#fc2e1c"
                        />
                        <Bar 
                        x={xPoint(letter) + 20}
                        y={yMax - barHeight}
                        height={barHeight}
                        width={xScale.bandwidth()}
                        fill="blue"
                        />
                                             <Bar 
                        x={xPoint(letter) - 20}
                        y={yMax - barHeight}
                        height={barHeight}
                        width={xScale.bandwidth()}
                        fill="purple"
                        />
                </Group>
        );
    })}
        </svg>
    </div>
    </>
  )
}

export default RobotVisx
