import { LABEL_MAP } from '@/types/Card';
import styles from './Card.module.scss';
import type { Scenario } from '@/types/Dashboard';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { vw } from '@/utils/units';

export const Card = ({
  data,
  imageUrl,
  onClick,
}: {
  data: Scenario;
  imageUrl?: string;
  onClick: () => void;
}) => {
  return (
    <SkeletonTheme baseColor="#5a4b4b" highlightColor="#2d2121">
      <div className={styles.card} onClick={onClick}>
        <div className={styles.cardTop}>
          {imageUrl ? (
            <img className={styles.img} src={imageUrl} alt="" />
          ) : (
            <Skeleton
              height={vw(225)}
              width={vw(312)}
              borderRadius={`${vw(17)} ${vw(17)} 0 0`}
            />
          )}
          <div className={styles.cardQuery}>{data.text}</div>
        </div>
        <div className={styles.cardBottom}>
          <div className={styles.cardTags}>
            {data.tags
              .filter(
                (tag) => tag.values?.length !== 0 && tag.values !== undefined,
              )
              .map((tag, index) => (
                <span key={index} className={styles.cardTag}>
                  {tag.values && tag.values[0]}
                </span>
              ))}
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardCount}>
              생성 타입 : <span>{LABEL_MAP[data.type]}</span>
            </div>
            <div className={styles.cardButton}>자세히 보기</div>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
