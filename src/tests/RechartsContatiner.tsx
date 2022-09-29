import React from 'react'
import robots from '../mockdata/robotsData';
import { Bargraph } from './Bargraph';

const data = robots.map((robot) => { 
  return {
    "name": robot.robotName,
    "Success Rate": robot.successRate,
    "distance from home traveled": robot.distanceFromHome,
    "Total run time": robot.totalRuntime,
  }
}) 

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

export default function RobotRecharts() {
  return (
    <>
        <div style={{display:'flex' , flexDirection:'column', width: '600px'}}>
          <Bargraph data={data}></Bargraph>
        </div>
    </>
  )
}
