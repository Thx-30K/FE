import { useEffect, useState } from 'react';
import styles from './PanelModal.module.scss';
import { api } from '@/apis/instance';

interface PanelModalProps {
  panelId: number;
  id: string;
  onMouseLeave: () => void;
}

interface PanelData {
  intro: string;
  qaPairs: [
    {
      question: string;
      answer: string;
    },
  ];
}

export const PanelModal = ({ panelId, id, onMouseLeave }: PanelModalProps) => {
  const [panelData, setPanelData] = useState<PanelData | null>(null);

  useEffect(() => {
    const getPanelData = async () => {
      try {
        const res = await api.get(`/api/querys/${panelId}`);
        if (res.status === 200) {
          setPanelData(res.data);
        } else {
          throw new Error('Failed to fetch panel data');
        }
      } catch (error) {
        console.error('Error fetching panel data:', error);
        onMouseLeave();
      }
    };
    if (panelId) {
      getPanelData();
    }
  }, [panelId]);

  return (
    <div key={panelId} className={styles.container} onMouseLeave={onMouseLeave}>
      <div className={styles.id}>{id}</div>
      <div className={styles.summary}>{panelData?.intro}</div>
      <div className={styles.content}>
        {panelData?.qaPairs.map((qData, i) => (
          <div key={i} className={styles.qDataContent}>
            <div className={styles.qDataQuestion}>{qData.question}</div>
            <div className={styles.qDataAnswer}>{qData.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
