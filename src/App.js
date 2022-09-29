import './App.css';
import RobotApexCharts from './components/ApexCharts.tsx';
import RobotChart from './components/Chart.tsx';
import RobotRecharts from './components/Recharts.tsx';
import RobotHighCharts from './components/HighCharts.tsx'
import RobotECharts from './components/ECharts.tsx';
import RobotFusionCharts from './components/FusionCharts.tsx'
import CustomSignIn from './SignIn/index.tsx'


function App() {

  return (
    <div className="App" 
    // style={{display: 'flex', flexWrap: 'normal', margin:'auto', padding: '20px'}}
    >
      <h1>hello world</h1> 
      <div style={{display: 'flex', gap: '10px'}}>
        {/* <RobotHighCharts/> */}
        <RobotChart />
        {/* <RobotApexCharts /> */}
        <RobotRecharts/>
        {/* <RobotECharts /> 
        <RobotFusionCharts/> */}
      </div> 
      {/* <CustomSignIn/> */}
    </div>
  );  
}

export default App;
