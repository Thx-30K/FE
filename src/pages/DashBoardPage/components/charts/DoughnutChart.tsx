// 차트 정보 찾기: https://www.chartjs.org/docs/latest/samples/information.html
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
  type ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './DoughnutChart.module.scss';
import type { DoughnutChartProps } from '@/types/Chart';

ChartJS.register(ArcElement, Tooltip, Legend);

// 차트 옵션 설정(제네릭으로 차트 타입 지정)
const options: ChartOptions<'doughnut'> = {
  responsive: true,
  cutout: '30%',
  circumference: 360,
  animation: {
    animateRotate: true,
  },
  plugins: {
    legend: {
      display: false,
      position: 'center',
    },
    title: {
      display: false,
    },
  },
};

// 성별용 고정 색상
const GENDER_COLORS: Record<string, string> = {
  F: 'rgba(255, 99, 132, 1)',
  M: 'rgba(54, 162, 235, 1)',
};

// 연령대, 지역 등을 위한 랜덤 색상
const PALETTE_COLORS = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#4BC0C0',
  '#9966FF',
  '#FF9F40',
  '#C9CBCF',
  '#FFCD56',
  '#4D5360',
  '#E7E9ED',
  '#71B37C',
  '#E6A57E',
];

export const DoughnutChart = ({ dataMap, category }: DoughnutChartProps) => {
  if (!dataMap || Object.keys(dataMap).length === 0) {
    return <div className={styles.emptyState}>데이터가 없습니다.</div>;
  }

  const labels = Object.keys(dataMap);
  const values = Object.values(dataMap);

  const backgroundColors = labels.map((label, index) => {
    if (category === '성별') {
      return GENDER_COLORS[label] || '#999999'; // 매칭 안되면 회색
    }
    return PALETTE_COLORS[index % PALETTE_COLORS.length];
  });

  const data: ChartData<'doughnut'> = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        borderWidth: 0, // 경계선 없음
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <Doughnut options={options} data={data} />
        <span className={styles.centerText}>{category}</span>
      </div>
      <div className={styles.chartLabelContainer}>
        {labels.map((label, index) => (
          <div key={index} className={styles.chartLabel}>
            <div
              className={styles.colorBox}
              style={{
                backgroundColor: backgroundColors[index],
              }}
            ></div>
            <div className={styles.labelText}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
