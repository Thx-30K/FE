import type { CardProps } from '@/types/Card';
import styles from './CardDetail.module.scss';
import { cardCloseIcon } from '@/assets';
import { ExportSelect } from '../ExportSelect/ExportSelect';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { vw } from '@/utils/units';

export const CardDetailSkeleton = ({ data, onClick }: CardProps) => {
  return (
    <SkeletonTheme baseColor="#5a4b4b" highlightColor="#2d2121">
      <div className={styles.container}>
        <div className={styles.closeButton} onClick={onClick}>
          <img src={cardCloseIcon} alt="cancel" />
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.topContent}>{data?.text}</div>
          <div className={styles.middleContent}>
            <div className={styles.doughnutContainer}>
              <div className={styles.doughnutTitle}>{'인구 통계 분포'}</div>
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
              <div className={styles.barSection}>
                <div className={styles.barTitle}>{'분석 결과'}</div>
                <div className={styles.barContent}>
                  <Skeleton
                    width={vw(700)}
                    height={vw(300)}
                    borderRadius={10}
                  />
                </div>
              </div>
              <div className={styles.barSection}>
                <div className={styles.barTitle}>{'월 소득 분포 비교'}</div>
                <div className={styles.barContent}>
                  <Skeleton
                    width={vw(700)}
                    height={vw(300)}
                    borderRadius={10}
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
      </div>
    </SkeletonTheme>
  );
};
