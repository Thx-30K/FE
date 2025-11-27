import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  type ScriptableContext,
  type ChartData,
  type ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './LineAreaChart.module.scss';
import type { LineAreaChartProps } from '@/types/Chart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
);

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    datalabels: {
      display: false,
    },
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
        display: false,
      },
      ticks: {
        color: '#ffffff',
        align: 'start',
        font: {
          size: 10,
          weight: 'bold',
          lineHeight: 1.2,
        },
        maxRotation: 45, // 글자가 겹치면 살짝 기울임
        minRotation: 0,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        display: false,
      },
      ticks: {
        color: '#ffffff',
        align: 'start',
        font: {
          size: 10,
          weight: 'bold',
          lineHeight: 1.2,
        },
      },
    },
  },
};

export const LineAreaChart = ({ dataMap, dataMap2 }: LineAreaChartProps) => {
  if (!dataMap || Object.keys(dataMap).length === 0) {
    return <div className={styles.emptyState}>데이터가 없습니다.</div>;
  }

  const labels = Object.keys(dataMap);
  const values = Object.values(dataMap);
  const values2 = dataMap2 ? Object.values(dataMap2) : [];

  const data: ChartData<'line'> = {
    labels,
    datasets: [
      {
        fill: true, // 영역 채우기 (Area Chart 핵심)
        label: '응답자 비율(%)',
        data: values,

        // 스타일링
        pointBackgroundColor: '#F19D52',
        pointBorderColor: '#FFFFFF',
        pointBorderWidth: 2,
        tension: 0.3,
        borderColor: '#F19D52',
        backgroundColor: (context: ScriptableContext<'line'>) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return undefined;
          }

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom, // 그라데이션 시작 (아래)
            0,
            chartArea.top, // 그라데이션 끝 (위)
          );

          gradient.addColorStop(0, 'rgba(241, 157, 82, 0.00)');
          gradient.addColorStop(1, 'rgba(241, 157, 82, 0.60)');

          return gradient;
        },
      },
    ],
  };

  if (dataMap2 && values2.length > 0) {
    data.datasets.push({
      fill: true,
      label: '응답자 비율(%)',
      data: values2,
      pointBackgroundColor: '#5E9FF2',
      pointBorderColor: '#FFFFFF',
      pointBorderWidth: 2,
      tension: 0.3,
      borderColor: '#5E9FF2',
      order: 1, // 겹칠 때 순서 (앞에 그려짐)
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const { ctx, chartArea } = context.chart;
        if (!chartArea) return undefined;

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom,
          0,
          chartArea.top,
        );
        gradient.addColorStop(0, 'rgba(94, 159, 242, 0.00)');
        gradient.addColorStop(1, 'rgba(94, 159, 242, 0.60)');
        return gradient;
      },
    });
  }

  return (
    <div className={styles.container}>
      <Line options={options} data={data} />
    </div>
  );
};
