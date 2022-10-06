import './App.css';

import RechartsContainer from './RechartsBarGraph/RechartsContainer.tsx'
import ChartJSContainer from './ChartJSBarGraph/ChartJSContainer.tsx'



function App() {

  return (
    <div className="App" 
    // style={{display: 'flex', flexWrap: 'normal', margin:'auto', padding: '20px'}}
    >
      <h1>hello world</h1> 
      <div style={{display: 'flex', gap: '10px', flexDirection:'column'}}>
        <div>
          <ChartJSContainer/>
        </div>
        <div>
          <RechartsContainer/>
        </div>
      </div> 
    </div>
  );  
}

export default App;
