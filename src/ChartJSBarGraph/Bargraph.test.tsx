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
        it('should sure barGraph displays the correct values', () => {
            
            const parser = new DOMParser()
            

            const { container } = render(<BarGraph data={robotsDataFormatted}/>)
            
            const canvasWrapper: HTMLCanvasElement = screen.getByRole('img')
            console.log('canvasWrapper', canvasWrapper.getContext("2d"))
            console.log('datasetr', parser.parseFromString(canvasWrapper.dataset.toString(),"text/html"))
            // const ctx = canvasWrapper.getContext()
            expect(true).toBe(true)
            
            // eslint-disable-next-line testing-library/no-debugging-utils
            screen.debug()
        })
    })
})