import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ chartData, chartOptions }) => {
  return <Doughnut data={chartData} options={chartOptions} />;
};
