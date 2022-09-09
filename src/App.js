import './App.css';
import RobotApexCharts from './components/ApexCharts.tsx';
import RobotChart from './components/Chart.tsx';
import RobotRecharts from './components/Recharts.tsx';
import RobotVisx from './components/Visx.tsx';

function App() {
  return (
    <div className="App" style={{display: 'flex', overflowWrap: 'normal', justifyContent: 'center', margin:'auto', padding: '20px'}}>
      <h1>hello world</h1>
      <div style={{display: 'flex', flexDirection:'column', gap: '10px', alignItems:'center'}}>
      <RobotChart style={{width: '800px'}}/>
      <div style={{width: '800px'}}>
        <RobotApexCharts style={{width: '800px'}} />
      </div>
      <RobotRecharts/>0
      <RobotVisx/>
      </div>
    </div>
  );
}

export default App;
