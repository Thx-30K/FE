import styles from './PanelModal.module.scss';

interface PanelModalProps {
  panelId: number;
  id: string;
  tags: string[];
  onMouseLeave: () => void;
}

export const PanelModal = ({
  panelId,
  id,
  tags,
  onMouseLeave,
}: PanelModalProps) => {
  return (
    <div className={styles.container} onMouseLeave={onMouseLeave}>
      <div className={styles.id}>{id}</div>
      <div className={styles.content}>
        {tags.map((tag, i) => (
          <div key={i} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
