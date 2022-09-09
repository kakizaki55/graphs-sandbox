import './App.css';
import RobotApexCharts from './components/ApexCharts.tsx';
import RobotRunDetailsChart from './components/Chart.tsx';
import RobotRecharts from './components/Recharts.tsx';

function App() {
  return (
    <div className="App" style={{display: 'flex', overflowWrap: 'normal'}}>
      <h1>hello world</h1>
      <RobotRunDetailsChart/>
      <div style={{width: '800px'}}>
        <RobotApexCharts/>
      </div>
      <RobotRecharts/>
    </div>
  );
}

export default App;
