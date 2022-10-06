import React from "react";
import '@testing-library/jest-dom'
import {  render, screen } from "@testing-library/react"
import  BarGraph from "./BarGraph";
// @ts-nocheck

const mockdata = () => [
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
  }
]


describe("Recharts", () => {
    describe("testing out Recharts BarCharts data display for 4 robots", () => {
      
      it('test to see if the component renders correctly', async () => {
        const data = mockdata()
        const size = { width: 1000, height: 500 };
            
            const { container } = render(<BarGraph data={data} size={size} />)
            
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            const svgWrapper = container.querySelector('[class="recharts-surface"]')
            const attributes = svgWrapper?.attributes

            expect(attributes?.['height'].value).toEqual("500")
            expect(attributes?.['width'].value).toEqual("1000")

            expect(screen.getByText('Success Rate')).toBeInTheDocument()
            expect(screen.getByText('don_eb2_88')).toBeInTheDocument()
            expect(screen.getByText('don_eb2_84')).toBeInTheDocument()


         // eslint-disable-next-line testing-library/no-debugging-utils
        //  screen.debug()
    })
  })
})