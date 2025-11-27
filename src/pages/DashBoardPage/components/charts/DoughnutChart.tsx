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

import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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
    datalabels: {
      formatter: (value, context) => {
        // 데이터셋의 총합을 구함
        const datapoints = context.chart.data.datasets[0].data;
        const total = datapoints.reduce(
          (total, datapoint) => (total as number) + (datapoint as number),
          0,
        ) as number;
        // 퍼센트 계산
        const percentage = ((value / total) * 100).toFixed(1);
        // 5% 미만은 표시하지 않음 (선택사항 - 글자가 겹치는 것 방지)
        return parseFloat(percentage) > 5 ? `${percentage}%` : '';
      },
      color: '#fff',
      font: { size: 16, weight: 'bold' },
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
  '#b3bfd7',
  '#ffe2a0',
  '#4D5360',
  '#E7E9ED',
  '#71B37C',
  '#E6A57E',
  '#38993c',
  '#2f26b4',
  '#9fc311',
  '#a6179f',
];

export const DoughnutChart = ({ dataMap, category }: DoughnutChartProps) => {
  if (!dataMap || Object.keys(dataMap).length === 0) {
    return <div className={styles.emptyState}>데이터가 없습니다.</div>;
  }

  const entries = Object.entries(dataMap);
  const sortedEntries = entries.sort(([, a], [, b]) => b - a);
  const topEntries = sortedEntries.slice(0, 9); // 상위 9개 데이터
  const restEntries = sortedEntries.slice(9); // 나머지 데이터

  if (restEntries.length > 0) {
    const otherSum = restEntries.reduce((sum, [, value]) => sum + value, 0);
    topEntries.push(['기타', otherSum]); // 끝에 추가
  }

  const labels = topEntries.map(([label]) => label);
  const values = topEntries.map(([, value]) => value);

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
