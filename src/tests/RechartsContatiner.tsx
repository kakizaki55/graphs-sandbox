import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, AreaChart, Area, PieChart, Pie, RadialBarChart, RadialBar } from 'recharts';
import robots from '../mockdata/robotsData';
import RobotRunDetails from '../mockdata/robotRuns';

const data = robots.map((robot) => { 
  return {
    "name": robot.robotName,
    "Success Rate": robot.successRate,
    "distance from home traveled": robot.distanceFromHome,
    "Total run time": robot.totalRuntime,
  }
})

const { runs } = RobotRunDetails 


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}




export default function RobotRecharts() {
  return (
    <>
        <div style={{display:'flex' , flexDirection:'column', width: '600px'}}>
          <div>Recharts</div>
          <div>
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
        </div>
        </div>
    </>
  )
}
