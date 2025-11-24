import { useEffect, useState } from 'react';
import styles from './PanelModal.module.scss';
import { api } from '@/apis/instance';

interface PanelModalProps {
  panelId: number;
  id: string;
  onMouseLeave: () => void;
}

interface PanelData {
  intro?: string;
  qaPairs: [
    {
      question: string;
      answer: string;
    },
  ];
}

export const PanelModal = ({ panelId, id, onMouseLeave }: PanelModalProps) => {
  const [panelData, setPanelData] = useState<PanelData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPanelData = async () => {
      setLoading(true);
      try {
        const res = await api.get(`/api/querys/${panelId}`);

        if (res.status === 200) {
          setPanelData(res.data.data);
        } else {
          throw new Error('Failed to fetch panel data');
        }
      } catch (error) {
        console.error('Error fetching panel data:', error);
        onMouseLeave();
      } finally {
        setLoading(false);
      }
    };
    if (panelId) {
      getPanelData();
    }
  }, [panelId]);

  return (
    <div key={panelId} className={styles.container} onMouseLeave={onMouseLeave}>
      <div className={styles.id}>{id}</div>
      <div className={styles.summary}>
        {loading
          ? '한줄 요약중...'
          : panelData?.intro || '해당 패널의 한줄 요약이 없습니다.'}
      </div>
      <div className={styles.content}>
        {panelData &&
          panelData?.qaPairs?.map((qData, i) => (
            <div key={i} className={styles.qDataContent}>
              <div className={styles.qDataQuestion}>{qData.question}</div>
              <div className={styles.qDataAnswer}>{qData.answer}</div>
            </div>
          ))}
      </div>
    </div>
  );
};
