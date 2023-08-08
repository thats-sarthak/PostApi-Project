import React from 'react';
import { Bar,Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const BarChart = ({ data }) => {
  // Extracting the x and y-axis data from the response
  const visitorsCount = data?.Visitors?.visitorsCount 
  const visitorsDate = data?.Visitors?.visitorsDate

  // Chart.js configuration
  const chartData = {
    labels: visitorsDate,
    datasets: [
      {
        label: 'Visitors Count',
        data: visitorsCount,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

// const config = {
//     type: 'bar',
//     data: data,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true
//         }
//       }
//     },
//   };

//   const chartOptions = {
//     scales: {
//       x: {
//         type: "bar", // Use 'time' type for the x-axis since it contains dates
//         time: {
//           unit: 'day', // Display data per day
//         },
//       },
//       y: {
//         beginAtZero: true, // Start y-axis from zero
//       },
//     },
//   };

const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (<>
  {console.log(chartData)}
  <Line data={chartData} options={chartOptions} />
  </>)
};

export default BarChart;
