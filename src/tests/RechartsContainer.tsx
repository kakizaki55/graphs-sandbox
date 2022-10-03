import React from 'react'
import robots from '../mockdata/robotsData';
import BarGraph from './BarGraph';

const data = robots.map((robot) => { 
  return {
    "name": robot.robotName,
    "Success Rate": robot.successRate,
    "distance from home traveled": robot.distanceFromHome,
    "Total run time": robot.totalRuntime,
  }
}) 

export default function RobotRecharts() {
  return (
    <>
        <div style={{display:'flex' , flexDirection:'column', width: '600px'}}>
          <BarGraph data={data}></BarGraph>
        </div>
    </>
  )
}
