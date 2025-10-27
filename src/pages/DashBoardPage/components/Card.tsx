import styles from './Card.module.scss';

interface CardProps {
  id: number;
  tags: string[];
  query: string;
  count: number;
  img: string;
  onClick?: () => void;
}

export const Card = ({ card }: { card: CardProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <img src="" alt="" />
        <div className={styles.cardQuery}>{card.query}</div>
      </div>
      <div className={styles.cardBottom}>
        <div className={styles.cardTags}>
          {card.tags.map((tag, index) => (
            <span key={index} className={styles.cardTag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.cardCount}>
            패널 수 : {card.count}명{' '}
            <span>
              (20명 <span>▲</span>)
            </span>
          </div>
          <div className={styles.cardButton} onClick={card.onClick}>
            자세히 보기
          </div>
        </div>
      </div>
    </div>
  );
};
