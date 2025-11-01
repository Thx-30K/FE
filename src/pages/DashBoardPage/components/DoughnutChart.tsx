// 차트 정보 찾기: https://www.chartjs.org/docs/latest/samples/information.html
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './DoughnutChart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

// 차트 옵션 설정(제네릭으로 차트 타입 지정)
const options: ChartOptions<'doughnut'> = {
  responsive: true,
  cutout: '30%',
  circumference: 360,

  animation: {
    animateScale: true,
    animateRotate: true,
  },
  plugins: {
    legend: {
      display: false,
      position: 'center',
    },
    title: {
      display: true,
      text: 'Chart.js / react-chartjs-2 시작하기',
    },
  },
};

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      // borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: 0,
    },
  ],
};

export const DoughnutChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <Doughnut options={options} data={data} />
      </div>
      <div className={styles.chartLabelContainer}>
        {data.labels.map((label, index) => (
          <div key={index} className={styles.chartLabel}>
            <div
              className={styles.colorBox}
              style={{
                backgroundColor: data.datasets[0].backgroundColor[
                  index
                ] as string,
              }}
            ></div>
            <div className={styles.labelText}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
