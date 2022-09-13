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
console.log('runs', runs[0])

const runsData = Object.entries(runs[0].coverageAreaTimeData).map(obj => {
   return {
    'time': obj[0],
    'area': obj[1]
   }

  
})

console.log('runsdata', runsData)




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
            <div>
            <AreaChart width={730} height={250} data={runsData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="time" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area type="monotone" dataKey="area" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            </div>
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
