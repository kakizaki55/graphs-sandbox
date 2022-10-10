import React from 'react'
import 'chart.js/auto';
import robots from '../mockdata/robotsData.js';

import BarGraph from './BarGraph';
import CustomBarGraph from './CustomBarChart';
import  {robotsDataFormatted, customRobotsDataFormatted} from './data';




const ChartJSContainer = () => {

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  

// const robotsRunData = {
//     labels: RobotRunDetails.runs.map((run) => Object.keys(run.coverageAreaTimeData)).filter(onlyUnique), 
//     datasets: RobotRunDetails.runs.map((run) => {
//         return {
//             label: run.id,
//             data: run.coverageAreaTimeData, 
//             backgroundColor: [
//                 '#690BB4',
//             ],
//         }
//      })
// }
  return (  
      <div style={{width: '600px', display: 'flex',flexDirection: 'column'}}>
        <div>Chart.js</div>
            <BarGraph data={robotsDataFormatted} size={{width: 1000, height: 500}} ></BarGraph>
            <CustomBarGraph data={customRobotsDataFormatted} size={{width: 1000, height: 500}} ></CustomBarGraph>
            {/* <Line data={robotsRunData}></Line>
            <Line data={robotsData}></Line>
            <Doughnut data={robotsData}></Doughnut>
            <PolarArea data={robotsData}></PolarArea>
            <Radar data={robotsData}></Radar> */}
    </div>
  )
}

export default ChartJSContainer
