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
  type ChartData,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import styles from './BarChart.module.scss';
import type { BarChartProps } from '@/types/Chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options: ChartOptions<'bar'> = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  elements: {
    bar: {
      borderWidth: 2,
      borderRadius: 5,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.8)',
      padding: 10,
      callbacks: {
        label: (context) => ` ${context.raw}명`,
      },
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
        align: 'center',
        font: {
          weight: 'bold',
          lineHeight: 1.2,
        },
        autoSkip: false,
      },
    },
  },
};

export const BarChart = ({ dataMap }: BarChartProps) => {
  if (!dataMap || Object.keys(dataMap).length === 0) {
    return <div className={styles.emptyState}>데이터가 없습니다.</div>;
  }

  const labels = Object.keys(dataMap[0].answers);
  const values = Object.values(dataMap[0].answers);

  const data: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: '응답 수',
        data: values,
        borderColor: 'rgba(241, 157, 82, 0.30)',
        barThickness: 20, // 막대 두께 조절
        backgroundColor: (context: ScriptableContext<'bar'>) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return undefined;
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

  return (
    <div className={styles.container}>
      <h3 className={styles.chartTitle}>Q. {dataMap[0].questionText}</h3>
      <div style={{ width: '90%', height: '250px' }}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};
