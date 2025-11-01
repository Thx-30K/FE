import { logo } from '@/assets';
import styles from './DashBoardPage.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { Card } from './components/Card';
import { DoughnutChart } from './components/DoughnutChart';

export const DashBoardPage = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <div className={styles.container}>
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
              <Card key={card.id} card={card} />
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
            <div className={styles.barContent}>{/* 차트 들어갈 곳 */}</div>
          </div>
          <div className={styles.barSection}>
            <div className={styles.barTitle}>{'바 차트 이름'}</div>
            <div className={styles.barContent}>{/* 차트 들어갈 곳 */}</div>
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
  );
};

const tags = ['여자', '남자', '20대', '30대'];
const cards = [
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
