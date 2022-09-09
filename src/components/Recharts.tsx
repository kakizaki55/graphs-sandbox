import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';
import robots from '../mockdata/robotsData';

const data = robots.map((robot) => { 

 return {
    "name": robot.robotName,
    "Success Rate": robot.successRate,
    "distance from home traveled": robot.distanceFromHome,
    "Total run time": robot.totalRuntime,
  }
})
const runtime = data[0]['Total run time']
console.log('data',typeof runtime , data)


export default function RobotRecharts() {
  return (
    <>
        <div>Recharts</div>
        <BarChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Success Rate" fill="#8884d8" />
            <Bar dataKey="distance from home traveled" fill="#82ca9d" />
            <Bar dataKey="Total run time" fill="#8f22dd" />
        </BarChart>
    </>
  )
}
