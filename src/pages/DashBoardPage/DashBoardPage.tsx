import { logo } from '@/assets';
import styles from './DashBoardPage.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Card } from './components/Card/Card';
import { DoughnutChart } from './components/charts/DoughnutChart';
import { LineAreaChart } from './components/charts/LineAreaChart';
import { BarChart } from './components/charts/BarChart';
import { useState } from 'react';
import { CardDetail } from './components/CardDetail/CardDetail';
import type { SearchData } from '@/types/Card';
import { ExportSelect } from './components/ExportSelect/ExportSelect';
import { PanelTable } from './components/Table/PanelTable';

export const DashBoardPage = () => {
  const [cardDetailVisible, setCardDetailVisible] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

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
        <SearchBar onSearchSubmit={handleSearch} />
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

const panelTableData = [
  {
    id: 60,
    mbSn: 'w165382799976614',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 70,
    mbSn: 'w167022533209941',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 295,
    mbSn: 'w373328926197923',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 342,
    mbSn: 'w54441353043637',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 832,
    mbSn: 'w163730612387186',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 4169,
    mbSn: 'w1053614674753',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 4735,
    mbSn: 'w183622631230871',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 5383,
    mbSn: 'w10996518633634',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 5426,
    mbSn: 'w210033521402912',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 5807,
    mbSn: 'w253662218406237',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 5827,
    mbSn: 'w115110877371451',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 6029,
    mbSn: 'w117982339340021',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 6439,
    mbSn: 'w12317193068630',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 6719,
    mbSn: 'w127463142957103',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 6760,
    mbSn: 'w356447387013039',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 6991,
    mbSn: 'w131140191966187',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 7190,
    mbSn: 'w133852372124260',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 7391,
    mbSn: 'w136499443133594',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 7638,
    mbSn: 'w73527123139807',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 9641,
    mbSn: 'w166065676319857',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 9855,
    mbSn: 'w43829171706097',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 10558,
    mbSn: 'w170404143070759',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 10587,
    mbSn: 'w170581226027499',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 11448,
    mbSn: 'w176084057058793',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 11749,
    mbSn: 'w178064478227941',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 11933,
    mbSn: 'w179183342483090',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 12027,
    mbSn: 'w179899167209124',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 13344,
    mbSn: 'w190851950211447',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 15526,
    mbSn: 'w198458292525375',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: '기타(사별/이혼 등)',
    jobField: '전자•기계•기술•화학•연구개발',
    carOwnership: false,
  },
  {
    id: 15715,
    mbSn: 'w216861856482517',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 16231,
    mbSn: 'w22420034517513',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 17104,
    mbSn: 'w238515551218360',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 17165,
    mbSn: 'w239598292947360',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 17334,
    mbSn: 'w242384916944155',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 17474,
    mbSn: 'w245283082382088',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 18493,
    mbSn: 'w263130276318330',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 19349,
    mbSn: 'w281853538937059',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
  {
    id: 20248,
    mbSn: 'w298502672191453',
    gender: 'M',
    ageBand: '40대',
    maritalStatus: null,
    jobField: null,
    carOwnership: null,
  },
];
