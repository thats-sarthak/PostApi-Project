// import React from 'react';
// import { Bar,Line } from 'react-chartjs-2';
// import Chart from 'chart.js/auto';

// const BarChart = ({ data }) => {
//   // Extracting the x and y-axis data from the response
//   const visitorsCount = data?.Visitors?.visitorsCount 
//   const visitorsDate = data?.Visitors?.visitorsDate

//   // Chart.js configuration
//   const chartData = {
//     labels: visitorsDate,
//     datasets: [
//       {
//         label: 'Visitors Count',
//         data: visitorsCount,
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 1,
//       },
//     ],
//   };


// const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' ,
//       },
//       title: {
//         display: true,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };

//   return (<>
//   {console.log(chartData)}
//   <Line data={chartData} options={chartOptions} />
//   </>)
// };

// export default BarChart;



import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import '../App.css'




const BarChart = ({ data }) => {
  // Extracting the x and y-axis data from the response
  const visitorsCount = data?.Visitors?.visitorsCount ;
  console.log("data", visitorsCount)
  const visitorsDate = data?.Visitors?.visitorsDate;

  const uniqueVisitorsCount = data?.uniqueVisitors?.uniqueVisitorsCount 
  const uniqueVisitorsDate = data?.uniqueVisitors?.uniqueVisitorsDate;


  // ApexCharts configuration
  const chartOptions = {
    chart: {    
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: visitorsDate,
    },
    title: {
    //   text: 'ApexCharts Line Chart For Total Visitors',
      text: 'Line Chart For Total Visitors',
    },
    tooltip: {
        enabled: true,
        y: {
          formatter: (value) => value,
        },
      },
      markers: {
        size: 10,
        hover: {
          size: 15,
          sizeOffset: 3,
        },
      },
    //   events: {
    //     dataPointMouseEnter: (event, chartContext, { dataPointIndex }) => {
    //       setHoveredData(visitorsCount[dataPointIndex]);
    //     },
    //     dataPointMouseLeave: () => {
    //     setHoveredData(null);
    //     },
    //   },
  };

  const chartOptionss = {
    chart: {
      type: 'bar',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: uniqueVisitorsDate,
    },
    title: {
    //   text: 'ApexCharts Bar Chart For Unique Visitors',
      text: 'Bar Chart For Unique Visitors',
    },
  };


  const chartSeries = [
    {
      name: 'Visitors Count',
      data: visitorsCount,
    },
  ];

  const chartSeriess = [
    {
      name: 'Visitors Count',
      data: uniqueVisitorsCount,
    },
  ];

  return (
    <div style={{display:'flex'}}>
      <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} width={400} />
      <ReactApexChart options={chartOptionss} series={chartSeriess} type="bar" height={350} width={400} />
    </div>
  );
};

export default BarChart;
