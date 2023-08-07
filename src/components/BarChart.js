import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ chartData }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      labels: chartData.map((item) => item.uniqueVisitorsDate),
      datasets: [
        {
          label: 'Unique Visitors Count',
          data: chartData.map((item) => item.uniqueVisitorsCount),
          backgroundColor: 'rgba(75,192,192,0.6)',
        },
      ],
    });
  }, [chartData]);

  return (
    <div>
      <Bar
        data={data}
        options={{
          responsive: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Unique Visitors Date',
              },
            },
            y: {
              title: {
                display: true,
                text: 'Unique Visitors Count',
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
