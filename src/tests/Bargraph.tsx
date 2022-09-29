import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';


export const Bargraph = (data) => {
  return (
  <>
    <div>Bargraph</div>
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
