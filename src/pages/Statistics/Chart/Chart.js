import { Chart as ChartJS, Tooltip, Title, ArcElement, Legend } from 'chart.js';

import { Doughnut } from 'react-chartjs-2';
ChartJS.register(Tooltip, Title, ArcElement, Legend);

export const DoughnutChart = ({ chartData }) => {
  return <Doughnut data={chartData} />;
};
