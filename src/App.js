// import React from 'react';
// import BarChart from './components/BarChart';
// import DateRange from './components/DateRange';

// function App() {
  
//   return (
//     <div className="App">
//       <DateRange />
//       <BarChart />
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';
// import BarChart from './components/BarChart';
// import DateRange from './components/DateRange';

// function App() {
//   const [chartData, setChartData] = useState([]);

//   return (
//     <div className="App">
//       <DateRange setChartData={setChartData} />
//       {chartData.length > 0 && <BarChart chartData={chartData} />}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import DateRange from './components/DateRange';

function App() {
  const [chartData, setChartData] = useState(undefined);
  const [show, setShow] = useState(false);

  // Function to receive the data from DateRange component
  const handleChartData = (data) => {
    setChartData(data);
  };

// useEffect(()=>{
//   console.log(chartData);
//   chartData!==undefined && setShow(true);
//   console.log(show)
// },[chartData,setChartData,show])

  return (
    <div className="App">
      <DateRange onChartData={handleChartData} />
      {chartData!==undefined && <BarChart data={chartData}  /> }
      {/* <BarChart data={chartData}  />  */}
    </div>
  );
}

export default App;



