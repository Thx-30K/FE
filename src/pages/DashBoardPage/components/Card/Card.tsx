import type { CardProps } from '@/types/Card';
import styles from './Card.module.scss';

export const Card = ({ data, onClick }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src="" alt="" />
        <div className={styles.cardQuery}>{data.query}</div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardTags}>
          {data.tags.map((tag, index) => (
            <span key={index} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardCount}>
            패널 수 : {data.count}명{' '}
            <span>
              (20명 <span>▲</span>)
            </span>
          </div>
          <div className={styles.cardButton} onClick={onClick}>
            자세히 보기
          </div>
        </div>
      </div>
    </div>
  );
};
