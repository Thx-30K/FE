import type { CardProps, ScenarioDetail } from '@/types/Card';
import { DoughnutChart } from '../charts/DoughnutChart';
import { LineAreaChart } from '../charts/LineAreaChart';
import styles from './CardDetail.module.scss';
import { cardCloseIcon } from '@/assets';
import { ExportSelect } from '../ExportSelect/ExportSelect';
import { useEffect } from 'react';
import { PanelTable } from '../Table/PanelTable';
import { CardDetailSkeleton } from './CardDetailSkeleton';
import { formatReportText } from '@/utils/textFormat';
import { useQuery } from '@tanstack/react-query';
import { fetchScenarioDetail } from '@/apis/dashboard';

export const CardDetail = ({
  data,
  onClick,
  panelSize,
  originLineChartData,
}: CardProps) => {
  const {
    data: detailData,
    isPending,
    isError,
  } = useQuery<ScenarioDetail>({
    queryKey: ['scenarioDetail', data?.text, data?.type, panelSize],
    queryFn: () =>
      fetchScenarioDetail({
        scenarioText: data!.text, // enabled 체크로 인해 여기서는 data가 확실히 존재
        scenarioType: data!.type,
        originalPanels: panelSize || 0,
      }),
    enabled: !!data, // data가 존재할 때만 쿼리 실행
    staleTime: 1000 * 60 * 10, // 10분간 캐시 유지
  });

  // 차트 관련 데이터 매핑
  const stats = detailData?.demographicsStats?.stats;
  const entry = stats ? Object.entries(stats)[0] : null;

  useEffect(() => {
    if (isError) {
      console.error('Error fetching detail data');
      onClick(); // 에러 시 모달 닫기
    }
  }, [isError, onClick]);

  if (isPending) {
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
