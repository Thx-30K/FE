import type { CardProps, ScenarioDetail } from '@/types/Card';
import { DoughnutChart } from '../charts/DoughnutChart';
import { LineAreaChart } from '../charts/LineAreaChart';
import styles from './CardDetail.module.scss';
import { cardCloseIcon } from '@/assets';
import { ExportSelect } from '../ExportSelect/ExportSelect';
import { useEffect, useState } from 'react';
import { PanelTable } from '../Table/PanelTable';
import { api } from '@/apis/instance';
import { CardDetailSkeleton } from './CardDetailSkeleton';
import { formatReportText } from '@/utils/textFormat';

export const CardDetail = ({
  data,
  onClick,
  panelSize,
  originLineChartData,
}: CardProps) => {
  const [detailData, setDetailData] = useState<ScenarioDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 차트 관련 데이터 매핑
  const stats = detailData?.demographicsStats?.stats;
  const entry = stats ? Object.entries(stats)[0] : null;

  useEffect(() => {
    const getDetailData = async () => {
      setLoading(true);
      try {
        const res = await api.post('/api/scenario', {
          scenarioText: data?.text,
          scenarioType: data?.type,
          originalPanels: panelSize,
        });

        if (res.status === 200) {
          setDetailData(res.data.data);
        } else {
          throw new Error('Failed to fetch detail data');
        }
      } catch (error) {
        console.error('Error fetching detail data:', error);
        onClick();
      } finally {
        setLoading(false);
      }
    };

    if (data) {
      getDetailData();
    }
  }, [data]);

  if (loading) {
    return <CardDetailSkeleton data={data} onClick={onClick} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.closeButton} onClick={onClick}>
        <img src={cardCloseIcon} alt="cancel" />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.topContent}>{data?.text}</div>
        <div className={styles.middleContent}>
          <div className={styles.doughnutContainer}>
            <div className={styles.doughnutTitle}>{'인구 통계 분포'}</div>
            <div className={styles.doughnutSection}>
              {/* 차트 들어갈 곳 */}
              {entry ? (
                <DoughnutChart
                  dataMap={entry[1]}
                  category={entry[0] as '성별' | '연령대' | '지역' | '학력'}
                />
              ) : (
                <p>데이터가 없습니다.</p>
              )}
            </div>
          </div>
          <div className={styles.barContainer}>
            <div className={styles.barSection}>
              <div className={styles.barTitle}>{'분석 결과'}</div>
              <div className={styles.barContent}>
                <div className={styles.cardText}>
                  <p className={styles.cardTextTitle}>
                    패널이 검색된 이유는 다음과 같아요!
                  </p>
                  <p
                    className={styles.cardTextCaption}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {formatReportText(detailData?.report)}
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.barSection}>
              <div className={styles.barTitle}>{'월 소득 분포 비교'}</div>
              <div className={styles.barContent}>
                {/* 차트 들어갈 곳 */}
                <LineAreaChart
                  dataMap={originLineChartData}
                  dataMap2={detailData?.monthlyIncomeStats?.incomeRatios}
                />
              </div>
            </div>
          </div>
          <div className={styles.blankBox}></div>
          <div className={styles.blankBox}></div>
        </div>
        {/* 표 영역 */}
        <div className={styles.bottomContent}>
          <div className={styles.bottomTitle}>
            <span className={styles.resultCount}>
              검색된 패널 : {detailData?.panelDetails.length}명
            </span>
            <div className={styles.exportContainer}>
              <ExportSelect />
              <div className={styles.exportButton}>내보내기</div>
            </div>
          </div>
          <PanelTable panelDetails={detailData?.panelDetails} />
        </div>
      </div>
    </div>
  );
};
