import type { CardProps } from '@/types/Card';
import { DoughnutChart } from '../charts/DoughnutChart';
import { LineAreaChart } from '../charts/LineAreaChart';
import styles from './CardDetail.module.scss';
import { cardCloseIcon } from '@/assets';
import { ExportSelect } from '../ExportSelect/ExportSelect';
import { useEffect } from 'react';
import { PanelTable } from '../Table/PanelTable';
import { panelTableData } from '@/data/dashboardData';

export const CardDetail = ({ data, onClick }: CardProps) => {
  useEffect(() => {
    console.log(data);
  }, []);

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
                <div className={styles.cardText}>
                  <p className={styles.cardTextTitle}>
                    패널이 검새된 이유는 다음과 같아요!
                  </p>
                  <p className={styles.cardTextCaption}>
                    ㅁㄴㅇㅁㄴㅇㄴㅇㄴㅇㅁㅁㅁㄴㅁㄴㅇㅁㅇㅇㅇㅁㄴㅇㅁㄴㅇㅇㅁㅇㅇㅁㄴㅇㅁㅇㄴㅇㅁㅇㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.barSection}>
              <div className={styles.barTitle}>{'바 차트 이름'}</div>
              <div className={styles.barContent}>
                {/* 차트 들어갈 곳 */}
                <LineAreaChart />
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
            <div className={styles.exportContainer}>
              <ExportSelect />
              <div className={styles.exportButton}>내보내기</div>
            </div>
          </div>
          <PanelTable panelDetails={panelTableData} />
        </div>
      </div>
    </div>
  );
};
