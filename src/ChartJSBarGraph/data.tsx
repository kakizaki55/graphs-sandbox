import robots from '../mockdata/robotsData.js';

const robotsDataFormatted = {
    labels: robots.map((robot) => robot.robotName), 
    datasets: [{
        label: 'Success rate',
        data: robots.map((robot) => robot.successRate),
        borderWidth: 1,
        backgroundColor: [
            '#4CAF50',
        ],
    }, {
        label: 'Total runs',
        data: robots.map((robot) => robot.totalRuntime),
        borderWidth: 1,
        backgroundColor: [
            '#00DBDE',
        ],
    }, {
        label: 'Average coverage',
        data: robots.map((robot) => robot.avgCoverage),
        borderWidth: 1,
        backgroundColor: [
            '#4CAF50',
        ],
    }, {
        label: 'distance from home traveled',
        data: robots.map((robot) => robot.distanceFromHome),
        borderWidth: 2,
        backgroundColor: [
            '#690BB4',
        ],
    }],
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
  }

export default robotsDataFormatted