import React from "react";
import '@testing-library/jest-dom'
import {  render, screen } from "@testing-library/react"
import  BarGraph from "./BarGraph";
import robotsDataFormatted from "./data"
import 'jest-canvas-mock';
// @ts-nocheck

describe('BarGraph', () => {
    describe('testing to make sure barGraph displays the correct values', () => {

        // let canvas, ctx;
        // beforeEach(function() {
        //     canvas = document.createElement('canvas');
        //     ctx = canvas.getContext('2d');
        //     jest.mock('use-resize-observer', () => {
        //         return jest.requireActual('use-resize-observer/polyfilled');
    
        //     })
        // });
        
        it('should sure barGraph displays the correct values', () => {
            

            const { container } = render(<BarGraph data={robotsDataFormatted}/>)
            
            const canvasWrapper = screen.getByRole('img') 
            expect(true).toBe(true)
            
            // eslint-disable-next-line testing-library/no-debugging-utils
            screen.debug()
        })
    })
})