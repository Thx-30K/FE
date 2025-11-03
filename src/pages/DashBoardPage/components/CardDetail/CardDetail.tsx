import type { CardProps } from '@/types/Card';
import { BarChart } from '../charts/BarChart';
import { DoughnutChart } from '../charts/DoughnutChart';
import { LineAreaChart } from '../charts/LineAreaChart';
import styles from './CardDetail.module.scss';
import { cardCloseIcon } from '@/assets';

export const CardDetail = ({ data, onClick }: CardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={onClick}>
        <img src={cardCloseIcon} alt="cancel" />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.topContent}>
          20대 중 패션과 SNS 활동에 모두 관심이 있는 남성
        </div>
        <div className={styles.middleContent}>
          <div className={styles.doughnutContainer}>
            <div className={styles.doughnutTitle}>{'검색 결과'}</div>
            <div className={styles.doughnutSection}>
              {/* 차트 들어갈 곳 */}
              <DoughnutChart />
            </div>
          </div>
          <div className={styles.barContainer}>
            <div className={styles.barSection}>
              <div className={styles.barTitle}>{'나이대별 평균 소득'}</div>
              <div className={styles.barContent}>
                {/* 차트 들어갈 곳 */}
                <LineAreaChart />
              </div>
            </div>
            <div className={styles.barSection}>
              <div className={styles.barTitle}>{'바 차트 이름'}</div>
              <div className={styles.barContent}>
                {/* 차트 들어갈 곳 */}
                <BarChart />
              </div>
            </div>
          </div>
          <div className={styles.blankBox}></div>
          <div className={styles.blankBox}></div>
        </div>
        {/* 표 영역 */}
        <div className={styles.bottomContent}>
          <div className={styles.bottomTitle}>
            <span className={styles.resultCount}>검색된 패널 : {100}명</span>
            {/* TODO: 추후 드롭다운으로 변경 */}
            <div className={styles.exportContainer}>
              <div className={styles.exports}>
                <div className={styles.exportOption}>.csv</div>
                <div className={styles.exportOption}>.pdf</div>
                <div className={styles.exportOption}>.xlsx</div>
              </div>
              <div className={styles.exportButton}>내보내기</div>
            </div>
          </div>
          <table>
            <colgroup>
              <col style={{ width: '50px' }} />
              <col style={{ width: '10px' }} />
              <col style={{ width: '150px' }} />
              <col style={{ width: '150px' }} />
              <col style={{ width: '150px' }} />
              <col style={{ width: '150px' }} />
              <col style={{ width: '150px' }} />
            </colgroup>
            <thead>
              <tr>
                <th>No.</th>
                <th>패널 ID</th>
                <th>나이</th>
                <th>월소득</th>
                <th>지역</th>
                <th>담배</th>
                <th>직업</th>
              </tr>
            </thead>
            <tbody>
              {/* 추후 변경 */}
              {[...Array(10)].map((_, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>w100010279508856</td>
                  <td>25</td>
                  <td>300만원</td>
                  <td>서울</td>
                  <td>비흡연</td>
                  <td>학생</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.tableNav}>
            <span className={styles.prevButton} onClick={() => {}}>
              ◀
            </span>
            <div className={styles.tableNumbers}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
                <span
                  key={page}
                  className={`${styles.active} ${styles.tableNum}`}
                >
                  {page}
                </span>
              ))}
            </div>
            <span className={styles.nextButton} onClick={() => {}}>
              ▶
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
