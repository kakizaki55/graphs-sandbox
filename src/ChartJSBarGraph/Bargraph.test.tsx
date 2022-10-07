import React from "react";
import '@testing-library/jest-dom'
import {  render, screen } from "@testing-library/react"
import  BarGraph from "./BarGraph";
import robotsDataFormatted from "./data"
import 'jest-canvas-mock';
// @ts-nocheck
window.ResizeObserver =
window.ResizeObserver ||
jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
}));

describe('BarGraph', () => {
    describe('testing to make sure barGraph displays the correct values', () => {
        it.only('should sure barGraph displays the correct values', () => {
            
            const parser = new DOMParser()

            const size = {width: 1000, height: 500}

            console.log('robotsDataFormatted', robotsDataFormatted)
            

            const { container } = render(<BarGraph data={robotsDataFormatted} size={size} />)
            
            const canvasWrapper: HTMLCanvasElement = screen.getByRole('img')
            // console.log('datasetr', parser.parseFromString(canvasWrapper.dataset.toString(),"text/html"))

            const context: CanvasRenderingContext2D = canvasWrapper.getContext('2d')

            console.log('S1', context.__getEvents())

            expect(context.__getEvents()).toMatchSnapshot()
            expect(true).toBe(true)
            
            // eslint-disable-next-line testing-library/no-debugging-utils
            screen.debug()
        })
    })
})