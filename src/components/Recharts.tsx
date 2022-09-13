import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, AreaChart, Area, PieChart, Pie, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadialBarChart, RadialBar } from 'recharts';
import robots from '../mockdata/robotsData';

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
        <div>
          <div>Recharts</div>
          <div style={{display: 'flex', flexDirection:'row'}}>
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
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
              >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="Success Rate" stackId="1" stroke="#8884d8" fill="#8884d8" />
              <Area type="monotone" dataKey="distance from home traveled" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              <Area type="monotone" dataKey="Total run time" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
            <PieChart width={400} height={400}>
              <Pie data={data} dataKey="Success Rate" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
              <Pie data={data} dataKey="Total run time" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
             <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
              <RadialBar
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                dataKey="Success Rate"
              />
              <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
            </RadialBarChart>
          </div>
        </div>
    </>
  )
}
