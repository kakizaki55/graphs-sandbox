import './App.css';
import RobotChart from './components/Chart.tsx';
import RobotRecharts from './components/Recharts.tsx';

import RechartsContainer from './BarGraph/RechartsContainer.tsx'



function App() {

  return (
    <div className="App" 
    // style={{display: 'flex', flexWrap: 'normal', margin:'auto', padding: '20px'}}
    >
      <h1>hello world</h1> 
      <div style={{display: 'flex', gap: '10px'}}>
        <RechartsContainer/>
      </div> 
    </div>
  );  
}

export default App;
