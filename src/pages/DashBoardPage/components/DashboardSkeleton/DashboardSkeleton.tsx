import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../../DashBoardPage.module.scss';
import { logo } from '@/assets';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { vw } from '@/utils/units';
import { ExportSelect } from '../ExportSelect/ExportSelect';

export const DashboardSkeleton = ({ query }: { query?: string }) => {
  return (
    // 다크 모드 테마 적용 (배경색에 맞춰 baseColor 조절 필요)
    <SkeletonTheme baseColor="#5a4b4b" highlightColor="#2d2121">
      <div className={styles.container}>
        {/* 상단 영역 */}
        <div className={styles.topContent}>
          <img src={logo} className={styles.logo} alt="Logo" />
          <SearchBar placeholder={query} />
          <div className={styles.searchSummary}>
            <div className={styles.SummaryTags}>
              {/* 태그 */}
              <Skeleton
                width={80}
                height={30}
                borderRadius={20}
                inline
                style={{ marginRight: 8 }}
              />
              <Skeleton
                width={100}
                height={30}
                borderRadius={20}
                inline
                style={{ marginRight: 8 }}
              />
              <Skeleton width={70} height={30} borderRadius={20} inline />
            </div>
            {/* 검색된 패널 수 */}
            <div className={styles.resultCount}>
              <Skeleton width={150} />
            </div>
          </div>

          <div className={styles.recommandPanel}>
            <div className={styles.recommandPanelTitle}>
              이런 패널들은 어때요?
            </div>
            <div
              className={styles.cardList}
              style={{ gap: vw(30), width: '100%' }}
            >
              {/* 카드 스켈레톤 */}
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <div key={i} style={{ display: 'flex' }}>
                    <Skeleton
                      width={vw(312)}
                      height={vw(360)}
                      borderRadius={20}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* 중단 영역 */}
        <div className={styles.middleContent}>
          {/* 도넛 차트 */}
          <div className={styles.doughnutContainer}>
            <div className={styles.doughnutTitle}>인구 통계 분포</div>
            <div
              className={styles.doughnutSection}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Skeleton circle width={vw(730)} height={vw(730)} />
            </div>
          </div>

          <div className={styles.barContainer}>
            {/* 월 소득 분포 (라인 차트) */}
            <div className={styles.barSection}>
              <div className={styles.barTitle}>월 소득 분포</div>
              <div className={styles.barContent}>
                <Skeleton width={vw(784)} height={vw(300)} borderRadius={10} />
              </div>
            </div>
            {/* 패널의 답변 (바 차트) */}
            <div className={styles.barSection}>
              <div className={styles.barTitle}>패널의 답변</div>
              <div className={styles.barContent}>
                <Skeleton width={vw(784)} height={vw(300)} borderRadius={10} />
              </div>
            </div>
          </div>

          <div className={styles.blankBox}></div>
          <div className={styles.blankBox}></div>
        </div>
        {/* 하단 영역 */}
        <div className={styles.bottomContent}>
          <div className={styles.bottomTitle}>
            <span className={styles.resultCount}>
              검색된 패널 :{' '}
              <Skeleton width={vw(55)} style={{ marginLeft: vw(10) }} />명
            </span>
            <div className={styles.exportContainer}>
              <ExportSelect />
              <div className={styles.exportButton}>내보내기</div>
            </div>
          </div>
          {/* 테이블 모양 */}
          <div>
            <Skeleton
              height={60}
              width={vw(1670)}
              borderRadius="30px 30px 0 0"
            />
            <Skeleton count={11} height={60} width={vw(1670)} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
