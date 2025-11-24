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
import { api } from '@/apis/instance';
import type { SurveyResponse, SurveyResultData } from '@/types/Dashboard';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { DashboardSkeleton } from './components/DashboardSkeleton/DashboardSkeleton';

export const DashBoardPage = () => {
  const [dashboardData, setDashboardData] = useState<SurveyResultData | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [cardDetailVisible, setCardDetailVisible] = useState(false);
  const [cardDetailNumber, setCardDetailNumber] = useState<number | null>(null);
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  // 차트 관련 데이터 매핑
  const stats = dashboardData?.demographicsStats?.stats;
  const entry = stats ? Object.entries(stats)[0] : null;

  useEffect(() => {
    const getData = async () => {
      try {
        if (!query) return;
        setLoading(true);
        console.log(query);

        const res = await api.get<SurveyResponse>(`/api/querys?query=${query}`);
        if (res.data.httpStatus === 200) {
          setDashboardData(res.data.data);
          console.log('getData');
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('데이터를 불러오는 데 실패했습니다.');
        nav('/', { replace: true });
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [query]);

  useEffect(() => {
    console.log(dashboardData);
  }, [dashboardData]);

  if (loading) {
    return <DashboardSkeleton query={query!} />;
  }

  return (
    <div className={styles.container}>
      {/* 카드 클릭 시 */}
      {cardDetailVisible && cardDetailNumber !== null && (
        <CardDetail
          data={dashboardData?.scenarios[cardDetailNumber]}
          onClick={() => {
            setCardDetailVisible(false);
            setCardDetailNumber(null);
          }}
          panelSize={dashboardData?.panelDetails.length}
          originLineChartData={dashboardData?.monthlyIncomeStats.incomeRatios}
        />
      )}
      {/* 검색 및 카드 영역 */}
      <div className={styles.topContent}>
        <img src={logo} className={styles.logo} alt="Logo" />
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
            {dashboardData?.scenarios.map((data, i) => (
              <Card
                key={i}
                data={data}
                onClick={() => {
                  setCardDetailVisible(true);
                  setCardDetailNumber(i);
                }}
              />
            ))}
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
            <ExportSelect />
            <div className={styles.exportButton}>내보내기</div>
          </div>
        </div>
        <PanelTable panelDetails={dashboardData?.panelDetails} />
      </div>
    </div>
  );
};
