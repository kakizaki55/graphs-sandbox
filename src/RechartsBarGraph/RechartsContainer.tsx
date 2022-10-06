import React from 'react'
import robots from '../mockdata/robotsData';
import BarGraph from './BarGraph.tsx'

const data = robots.map((robot) => { 
  return {
    "name": robot.robotName,
    "Success Rate": robot.successRate,
    "distance from home traveled": robot.distanceFromHome,
    "Total run time": robot.totalRuntime,
  }
}) 

console.log('data', data)

const mockdata = [
  {
      "name": "don_eb2_83",
      "Success Rate": 100,
      "distance from home traveled": 86.2,
      "Total run time": 58.4
  },
  {
      "name": "don_eb2_82",
      "Success Rate": 95,
      "distance from home traveled": 100.2,
      "Total run time": 58.4
  },
  {
      "name": "don_eb2_84",
      "Success Rate": 100,
      "distance from home traveled": 200.2,
      "Total run time": 120.4
  },
  {
      "name": "don_eb2_88",
      "Success Rate": 100,
      "distance from home traveled": 86.2,
      "Total run time": 58.4
  },
  {
      "name": "don_eb2_87",
      "Success Rate": 95,
      "distance from home traveled": 100.2,
      "Total run time": 58.4
  },
  {
      "name": "don_eb2_86",
      "Success Rate": 100,
      "distance from home traveled": 200.2,
      "Total run time": 120.4
  }
]

export default function RobotRecharts() {
  return (
    <>
        <div style={{display:'flex' , flexDirection:'column', width: '800px'}}>
          <BarGraph data={mockdata} size={{ width:1000, height: 500}}></BarGraph>
        </div>
    </>
  )
}
