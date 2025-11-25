import { LABEL_MAP } from '@/types/Card';
import styles from './Card.module.scss';
import type { Scenario } from '@/types/Dashboard';

export const Card = ({
  data,
  onClick,
}: {
  data: Scenario;
  onClick: () => void;
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardTop}>
        <img src="" alt="" />
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
  );
};
