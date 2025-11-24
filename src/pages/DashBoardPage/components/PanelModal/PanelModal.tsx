import { useEffect } from 'react';
import styles from './PanelModal.module.scss';
import { api } from '@/apis/instance';
import { useQuery } from '@tanstack/react-query';

interface PanelModalProps {
  panelId: number;
  id: string;
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

const fetchPanelModalData = async (panelId: number) => {
  const { data } = await api.get(`/api/querys/${panelId}`);
  if (data.httpStatus !== 200) {
    throw new Error('Failed to fetch data');
  }
  return data.data; // 실제 데이터(SurveyResultData)만 반환
};

export const PanelModal = ({ panelId, id }: PanelModalProps) => {
  const {
    data: panelData,
    isPending,
    isError,
    error,
  } = useQuery<PanelData>({
    queryKey: ['dashboard', panelId], // query 변경시 자동 재호출
    queryFn: () => fetchPanelModalData(panelId!),
    enabled: !!panelId,
    staleTime: 1000 * 60 * 10, // 10분간 데이터 신선함 유지
    retry: 1, // 실패 시 1회 재시도
  });

  useEffect(() => {
    if (isError) {
      console.error('Error fetching data:', error);
      alert('데이터를 불러오는 데 실패했습니다.');
    }
  }, [isError, error]);

  return (
    <div key={panelId} className={styles.container}>
      <div className={styles.id}>{id}</div>
      <div className={styles.summary}>
        {isPending
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
