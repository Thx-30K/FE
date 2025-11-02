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
        align: 'end',
        showLabelBackdrop: true,
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

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => Math.random() * 1000),
      pointBackgroundColor: '#F19D52',
      pointBorderColor: '#FFF4CF',
      pointBorderWidth: 2,
      tension: 0.3,
      borderColor: '#F19D52',
      backgroundColor: (context: ScriptableContext<'line'>) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        // chartArea가 정의되지 않았으면(초기화 전) 아무것도 반환하지 않습니다.
        if (!chartArea) {
          return null;
        }

        // 원본 코드의 createLinearGradient(0, 0, 0, 300)을
        // 차트 영역(chartArea)에 맞게 동적으로 생성합니다.
        // (0, chartArea.bottom) -> (0, chartArea.top)
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.bottom, // 그라데이션 시작 (아래)
          0,
          chartArea.top, // 그라데이션 끝 (위)
        );

        // 원본 코드의 colorStop을 그대로 사용
        gradient.addColorStop(0, 'rgba(241, 157, 82, 0.60)');
        gradient.addColorStop(1, 'rgba(241, 157, 82, 0.00)'); // 투명도 오타 수정 (0,0)

        return gradient;
      },
    },
  ],
};

export const LineAreaChart = () => {
  return (
    <div className={styles.container}>
      <Line options={options} data={data} />
    </div>
  );
};
