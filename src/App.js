import './App.css';
import RobotApexCharts from './components/ApexCharts.tsx';
import RobotChart from './components/Chart.tsx';
import RobotRecharts from './components/Recharts.tsx';
import RobotVisx from './components/Visx.tsx';
import RobotHighCharts from './components/HighCharts.tsx'
import RobotECharts from './components/ECharts.tsx';


function App() {

  return (
    <div className="App" style={{display: 'flex', flexWrap: 'normal', margin:'auto', padding: '20px'}}>
      <h1>hello world</h1>
      <div style={{display: 'flex', gap: '10px'}}>
        <RobotHighCharts/>
        <RobotChart />
        <RobotApexCharts />
        <RobotRecharts/>
        <RobotECharts /> 
        <RobotVisx/>
      </div> 
    </div>
  );  
}

export default App;
