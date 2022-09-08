import './App.css';
import RobotApexCharts from './components/ApexCharts.tsx';
import RobotRunDetailsChart from './components/Chart.tsx';
import RobotsAmCharts from './components/AmCharts.tsx';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <h1>hello world</h1>
      <RobotRunDetailsChart/>
      <div style={{width: '800px'}}>
      <RobotApexCharts/>
      </div>
      {/* <RobotsAmCharts/> */}
    </div>
  );
}

export default App;
