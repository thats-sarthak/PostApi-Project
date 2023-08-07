import React, { useState } from 'react';
import BarChart from './components/BarChart';
import DateRange from './components/DateRange';

function App() {
  const [chartData, setChartData] = useState([]);

  return (
    <div className="App">
      <DateRange setChartData={setChartData} />
      <BarChart chartData={chartData} />
    </div>
  );
}

export default App;
