// // import React from 'react'
// // import { DatePicker } from 'antd'

// // import { useState } from 'react';
// // import axios from 'axios';

// // const {RangePicker} = DatePicker

// // const DateRange = () => {
// //     const [dates, setDates] = useState([]);
  
// //     return (
// //       <div style={{ margin: 20 }}>
// //         <RangePicker
// //           onChange={(values) => {
// //             if (values === null) {
// //               setDates([]);
// //             } else {
// //               setDates(values.map((item) => item.format('YYYY-MM-DD')));
// //             }
  
// //             if (values !== null) {
// //               const [from, to] = values.map((item) => item.format('YYYY-MM-DD'));
// //               axios
// //                 .post('https://socket-io-server-mc3e.onrender.com/api/v1/graph', {
// //                   from,
// //                   to,
// //                 })
// //                 .then((response) => {
// //                   console.log('api', response);  
// //                 })
// //                 .catch((error) => {
// //                   console.error('Error API:', error);
// //                 });
// //             }
// //           }}
// //         />
  
// //         <p style={{ margin: 20 }}>{dates.join(' to ')}</p> 
// //       </div>
// //     );
// //   };
  
// //   export default DateRange;
  
// import React, { useState } from 'react';
// import { DatePicker } from 'antd';
// import axios from 'axios';

// const { RangePicker } = DatePicker;

// const DateRange = ({ setChartData }) => {
//   const [dates, setDates] = useState([]);

//   return (
//     <div style={{ margin: 20 }}>
//       <RangePicker
//         onChange={(values) => {
//           if (values === null) {
//             setDates([]);
//           } else {
//             setDates(values.map((item) => item.format('YYYY-MM-DD')));
//           }

//           if (values !== null) {
//             const [from, to] = values.map((item) => item.format('YYYY-MM-DD'));
//             axios
//               .post('https://socket-io-server-mc3e.onrender.com/api/v1/graph', {
//                 from,
//                 to,
//               })
//               .then((response) => {
//                 console.log('api', response);
//                 const chartData = {
//                     uniqueVisitorsDate:response.data.response.uniqueVisitors.uniqueVisitorsDate,
//                     uniqueVisitorsCount:response.data.response.uniqueVisitors.uniqueVisitorsCount
//                 }
//                 return chartData
//                 // response.data.response.uniqueVisitors.map((item) => {
//                 //   uniqueVisitorsDate+= item.uniqueVisitorsDate,
//                 //   uniqueVisitorsCount+= item.uniqueVisitorsCount,
//               }).then(
//                 (chartData)=>{
//                   setChartData(chartData)
// console.log(chartData)
//                 }
//               )
//               .catch((error) => {
//                 console.error('Error API:', error);
//               });
//           }
//         }}
//       />

//       <p style={{ margin: 20 }}>{dates.join(' to ')}</p>
//     </div>
//   );
// };

// export default DateRange;





import React, { useState } from 'react';
import { DatePicker } from 'antd';
import axios from 'axios';

const { RangePicker } = DatePicker;

const DateRange = ({ setChartData }) => {
  const [dates, setDates] = useState([]);

  const fetchData = (from, to) => {
    axios
      .post('https://socket-io-server-mc3e.onrender.com/api/v1/graph', {
        from,
        to,
      })
      .then((response) => {
        const chartData = response.data.response.uniqueVisitors.map((item) => ({
          uniqueVisitorsDate: item.uniqueVisitorsDate,
          uniqueVisitorsCount: item.uniqueVisitorsCount,
        }));
        setChartData(chartData);
        console.log('api', chartData);
      })
      .catch((error) => {
        console.error('Error API:', error);
      });
  };

  return (
    <div style={{ margin: 20 }}>
      <RangePicker
        onChange={(values) => {
          if (values === null) {
            setDates([]);
          } else {
            setDates(values.map((item) => item.format('YYYY-MM-DD')));
          }

          if (values !== null) {
            const [from, to] = values.map((item) => item.format('YYYY-MM-DD'));
            fetchData(from, to);
          }
        }}
      />

      <p style={{ margin: 20 }}>{dates.join(' to ')}</p>
    </div>
  );
};

export default DateRange;
