import React from 'react'
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, Brush, BrushProps, Label, LabelList } from 'recharts';

interface BarGraphProps {
  data?: any,
  size?: any
}

const CustomBarGraph = ({ data, size }:BarGraphProps) => {


  console.log('data', data)
  return (
  <>
    <div>Custom Bargraph</div>
    <BarChart width={size.width} height={size.height} data={data} >
      <CartesianGrid horizontal={false} vertical={false} />
      <XAxis dataKey="name" />
      <YAxis dataKey= "Total run time"/>
      <Tooltip cursor={{ stroke: '#430098', strokeWidth: 1  }}  />
      <Legend />
      <Bar dataKey="Success Rate" fill="#ba58e3" fillOpacity={.2} />
      <Bar dataKey="distance from home traveled" fill="#430098"fillOpacity={.8} background={false} >
        <LabelList  dataKey="distance from home traveled" position="top"></LabelList>
      </Bar>
      <Bar dataKey="Total run time" fill="#00dbde" fillOpacity={.5}  />
      <Brush dataKey="Total run time"></Brush>
    </BarChart>
  </>
  )}

  export default CustomBarGraph