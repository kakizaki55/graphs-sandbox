import './App.css';
import RobotChart from './ChartJSBarGraph/Chart.tsx';
import RobotRecharts from './components/Recharts.tsx';

import RechartsContainer from './RechartsBarGraph/RechartsContainer.tsx'
import ChartJSContainer from './ChartJSBarGraph/ChartJSContainer.tsx'



function App() {

  return (
    <div className="App" 
    // style={{display: 'flex', flexWrap: 'normal', margin:'auto', padding: '20px'}}
    >
      <h1>hello world</h1> 
      <div style={{display: 'flex', gap: '10px'}}>
        <RechartsContainer/>
        <ChartJSContainer/>
      </div> 
    </div>
  );  
}

export default App;
