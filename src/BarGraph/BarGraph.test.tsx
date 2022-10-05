import React from "react";
import '@testing-library/jest-dom'
import { waitFor, render, screen } from "@testing-library/react"
import  BarGraph from "./BarGraph";
import { wait } from "@testing-library/user-event/dist/utils";

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
  },
  {
      "name": "don_eb2_87",
      "Success Rate": 95,
      "distance from home traveled": 100.2,
      "Total run time": 58.4
  },

]

describe("Recharts", () => {
    describe("testing out Recharts BarCharts data display for 3 robots", () => {
      
      it('test to see if the component renders correctly', async () => {
        const data = mockdata()
        const size = { width: 500, height: 1000 };

        const { container } = render(<BarGraph data={data} />)
        

        // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
        const svgEl = container.querySelector('[class="recharts-cartesian-grid-horizontal"]') as HTMLImageElement

        expect(svgEl).toBeInTheDocument()
        // eslint-disable-next-line testing-library/no-node-access
        console.log('svgEl', svgEl)
        

        expect(screen.getByText('don_eb2_83')).toBeInTheDocument()
        expect(screen.getByText('don_eb2_87')).toBeInTheDocument()
        expect(screen.getByText('Success Rate')).toBeInTheDocument()

        // eslint-disable-next-line testing-library/no-debugging-utils
        screen.debug()





    })
  })
})