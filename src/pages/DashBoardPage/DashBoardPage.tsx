import { logo } from '@/assets';
import styles from './DashBoardPage.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Card } from './components/Card/Card';
import { DoughnutChart } from './components/charts/DoughnutChart';
import { LineAreaChart } from './components/charts/LineAreaChart';
import { BarChart } from './components/charts/BarChart';
import { useEffect, useState } from 'react';
import { CardDetail } from './components/CardDetail/CardDetail';
import type { SearchData } from '@/types/Card';
import { ExportSelect } from './components/ExportSelect/ExportSelect';
import { PanelTable } from './components/Table/PanelTable';
import { panelTableData } from '@/data/dashboardData';
import { api } from '@/apis/instance';
import type { SurveyResponse, SurveyResultData } from '@/types/Dashboard';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const DashBoardPage = () => {
  const [dashboardData, setDashboardData] = useState<SurveyResultData | null>(
    null,
  );
  const [cardDetailVisible, setCardDetailVisible] = useState(false);
  const nav = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    const getData = async () => {
      try {
        if (!query) return;
        console.log(query);

        const res = await api.get<SurveyResponse>(`/api/querys?query=${query}`);
        if (res.data.httpStatus === 200) {
          setDashboardData(res.data.data);
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('데이터를 불러오는 데 실패했습니다.');
        nav('/', { replace: true });
      }
    };
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {/* 카드 클릭 시 */}
      {cardDetailVisible && (
        <CardDetail
          data={cards[0]}
          onClick={() => setCardDetailVisible(false)}
        />
      )}
      {/* 검색 및 카드 영역 */}
      <div className={styles.topContent}>
        <img src={logo} className={styles.logo} alt="Logo" />
        <SearchBar />
        <div className={styles.searchSummary}>
          <div className={styles.SummaryTags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.SummaryTag}>
                #{tag}
              </span>
            ))}
          </div>
          <div className={styles.resultCount}>검색된 패널 : {100}명</div>
        </div>
        <div className={styles.recommandPanel}>
          <div className={styles.recommandPanelTitle}>
            이런 패널들은 어때요?
          </div>
          <div className={styles.cardList}>
            {cards.map((card) => (
              <Card
                key={card.id}
                data={card}
                onClick={() => setCardDetailVisible(true)}
              />
            ))}
          </div>
        </div>
      </div>
      {/* TODO: 그래프 영역 */}
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
          <div className={styles.exportContainer}>
            <ExportSelect />
            <div className={styles.exportButton}>내보내기</div>
          </div>
        </div>
        <PanelTable panelDetails={panelTableData} />
      </div>
    </div>
  );
};

const tags = ['여자', '남자', '20대', '30대'];
const cards: SearchData[] = [
  {
    id: 1,
    tags: ['여자', '남자', '20대', '30대'],
    query: '넷플릭스를 자주보는 서울 20대 남성',
    count: 120,
    img: '',
  },
  {
    id: 1,
    tags: ['여자', '남자', '20대', '30대'],
    query: '넷플릭스를 자주보는 서울 20대 남성',
    count: 120,
    img: '',
  },
  {
    id: 1,
    tags: ['여자', '남자', '20대', '30대'],
    query: '넷플릭스를 자주보는 서울 20대 남성',
    count: 120,
    img: '',
  },
  {
    id: 1,
    tags: ['여자', '남자', '20대', '30대'],
    query: '넷플릭스를 자주보는 서울 20대 남성',
    count: 120,
    img: '',
  },
  {
    id: 1,
    tags: ['여자', '남자', '20대', '30대'],
    query: '넷플릭스를 자주보는 서울 20대 남성',
    count: 120,
    img: '',
  },
];
