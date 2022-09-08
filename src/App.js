import './App.css';
import RobotApexCharts from './components/ApexCharts.tsx';
import RobotRunDetailsChart from './components/Chart.tsx';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <h1>hello world</h1>
      <RobotRunDetailsChart/>
      <div style={{width: '800px'}}>
      <RobotApexCharts/>
      </div>
    </div>
  );
}

export default App;
