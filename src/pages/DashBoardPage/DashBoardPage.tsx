import { logo } from '@/assets';
import styles from './DashBoardPage.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Card } from './components/Card/Card';
import { DoughnutChart } from './components/charts/DoughnutChart';
import { LineAreaChart } from './components/charts/LineAreaChart';
import { BarChart } from './components/charts/BarChart';
import { useEffect, useState } from 'react';
import { CardDetail } from './components/CardDetail/CardDetail';
import { ExportSelect } from './components/ExportSelect/ExportSelect';
import { PanelTable } from './components/Table/PanelTable';
import type { SurveyResultData } from '@/types/Dashboard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DashboardSkeleton } from './components/DashboardSkeleton/DashboardSkeleton';
import { useQuery } from '@tanstack/react-query';
import { fetchDashboardData, fetchImageStatus } from '@/apis/dashboard';
import { handleExport } from '@/utils/export';
import { AnimatePresence, motion } from 'framer-motion';
import type { ImageStatusResponse } from '@/types/Card';

export const DashBoardPage = () => {
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [cardDetailVisible, setCardDetailVisible] = useState(false);
  const [cardDetailNumber, setCardDetailNumber] = useState<number | null>(null);

  const [exportType, setExportType] = useState<string>('xlsx');

  const {
    data: dashboardData,
    isPending,
    isError,
    error,
  } = useQuery<SurveyResultData>({
    queryKey: ['dashboard', query], // query 변경시 자동 재호출
    queryFn: () => fetchDashboardData(query!),
    enabled: !!query,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: 1, // 실패 시 1회 재시도
  });

  const batchId = dashboardData?.batchId; // 이미지 추출에 필요한 batchId

  const { data: imageData } = useQuery<ImageStatusResponse>({
    queryKey: ['dashboardImages', batchId], // batchId가 바뀌면 새로운 쿼리
    queryFn: () => fetchImageStatus(batchId!),
    enabled: !!batchId, // batchId가 확보된 후에만 실행

    staleTime: (query) => {
      if (query.state.data?.data?.complete) {
        return Infinity;
      }
      return 0;
    },
    gcTime: Infinity,
    //  25초마다 폴링, complete가 true면 중단
    refetchInterval: (query) => {
      const data = query.state.data;
      // 데이터가 있고 생성이 완료되었다면 폴링 중지
      if (data?.data?.complete) {
        return false;
      }
      // 완료되지 않았다면 설정 시간 간격으로 재호출
      return 25000;
    },
    // 백그라운드에 있어도 이미지 생성을 계속 확인하려면 true 설정
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (isError) {
      console.error('Error fetching data:', error);
      alert('데이터를 불러오는 데 실패했습니다.');
      nav('/', { replace: true });
    }
  }, [isError, error, nav]);

  // 차트 관련 데이터 매핑
  const stats = dashboardData?.demographicsStats?.stats;
  const entry = stats ? Object.entries(stats)[0] : null;

  if (isPending) {
    return <DashboardSkeleton query={query!} />;
  }

  return (
    <div className={styles.container}>
      {/* 카드 클릭 시 */}
      <AnimatePresence mode="popLayout">
        {cardDetailVisible && cardDetailNumber !== null && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
            style={{
              zIndex: 2,
            }}
          >
            <CardDetail
              data={dashboardData?.scenarios[cardDetailNumber]}
              onClick={() => {
                setCardDetailVisible(false);
                setCardDetailNumber(null);
              }}
              panelSize={dashboardData?.panelDetails.length}
              originLineChartData={
                dashboardData?.monthlyIncomeStats.incomeRatios
              }
              clickVisible={cardDetailVisible}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* 검색 및 카드 영역 */}
      <div className={styles.topContent}>
        <img
          src={logo}
          className={styles.logo}
          alt="Logo"
          onClick={() => nav('/')}
        />
        <SearchBar placeholder={query!} />
        <div className={styles.searchSummary}>
          <div className={styles.SummaryTags}>
            {dashboardData?.tags.map((tag, index) => (
              <span key={index} className={styles.SummaryTag}>
                #{tag}
              </span>
            ))}
          </div>
          <div className={styles.resultCount}>
            검색된 패널 : {dashboardData?.panelDetails.length}명
          </div>
        </div>
        <div className={styles.recommandPanel}>
          <div className={styles.recommandPanelTitle}>
            이런 패널들은 어때요?
          </div>
          <div className={styles.cardList}>
            {dashboardData?.scenarios.map((data, i) => {
              const scenarioImage = imageData?.data?.detail?.find(
                (img) => img.index === i,
              )?.imageUrl;

              return (
                <Card
                  key={i}
                  data={data}
                  imageUrl={scenarioImage}
                  onClick={() => {
                    setCardDetailVisible(true);
                    setCardDetailNumber(i);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* 그래프 영역 */}
      <div className={styles.middleContent}>
        <div className={styles.doughnutContainer}>
          <div className={styles.doughnutTitle}>인구 통계 분포</div>
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
            <div className={styles.barTitle}>{'월 소득 분포'}</div>
            <div className={styles.barContent}>
              {/* 차트 들어갈 곳 */}
              <LineAreaChart
                dataMap={dashboardData?.monthlyIncomeStats?.incomeRatios}
              />
            </div>
          </div>
          <div className={styles.barSection}>
            <div className={styles.barTitle}>{'패널의 답변'}</div>
            <div className={styles.barContent}>
              {/* 차트 들어갈 곳 */}
              <BarChart dataMap={dashboardData?.questionStats} />
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
            검색된 패널 : {dashboardData?.panelDetails.length}명
          </span>
          <div className={styles.exportContainer}>
            <ExportSelect setExportType={setExportType} />
            <div
              className={styles.exportButton}
              onClick={() =>
                handleExport({
                  panelDetails: dashboardData?.panelDetails || [],
                  exportType: exportType,
                })
              }
            >
              내보내기
            </div>
          </div>
        </div>
        <PanelTable panelDetails={dashboardData?.panelDetails} />
      </div>
    </div>
  );
};
