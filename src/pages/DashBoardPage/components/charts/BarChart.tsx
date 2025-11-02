import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ScriptableContext,
  type ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<'bar'> = {
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 5,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: 'transparent',
      },
      ticks: {
        color: '#ffffff',
        align: 'start',
        font: {
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: 'transparent',
      },
      ticks: {
        color: '#ffffff',
        align: 'end',
        font: {
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => Math.random() * 1000),
      borderColor: 'rgba(241, 157, 82, 0.30)',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return null;
        }

        const gradient = ctx.createLinearGradient(
          chartArea.left,
          0,
          chartArea.right,
          0,
        );

        gradient.addColorStop(0, 'rgba(241, 157, 82, 0.16)');
        gradient.addColorStop(1, 'rgba(237, 112, 45, 0.80)');

        return gradient;
      },
    },
  ],
};

export const BarChart = () => {
  return (
    <div className={styles.container}>
      <Bar options={options} data={data} />
    </div>
  );
};
