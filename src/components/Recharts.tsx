import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];


export default function RobotRecharts() {
  return (
    <>
        <div>Recharts</div>
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
        </LineChart>
    </>
  )
}
