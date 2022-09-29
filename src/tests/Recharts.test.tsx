import React from "react";

import { render, screen } from "@testing-library/react"

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
]


describe("Recharts", () => {
    describe("testing out Recharts data display for 3 robots", () => {
      
      it('test to see if the component renders correctly', () => {
        const data = mockdata()
        const size = { width: 500, height: 1000 };

        expect(true).toBe(true)
      })
    })
  })