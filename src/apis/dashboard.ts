import type { SurveyResponse } from '@/types/Dashboard';
import { api } from './instance';
import type { ScenarioPayload } from '@/types/Card';

// 시나리오 상세 데이터 조회 함수
export const fetchScenarioDetail = async (payload: ScenarioPayload) => {
  const { data } = await api.post('/api/scenario', payload);
  if (data.httpStatus !== 200) {
    throw new Error('Failed to fetch detail data');
  }
  return data.data;
};

// 대시보드 데이터 조회 함수
export const fetchDashboardData = async (query: string) => {
  const { data } = await api.get<SurveyResponse>(`/api/querys?query=${query}`);
  if (data.httpStatus !== 200) {
    throw new Error('Failed to fetch data');
  }
  return data.data; // 실제 데이터(SurveyResultData)만 반환
};

// 패널 모달 데이터 조회 함수
export const fetchPanelModalData = async (panelId: number) => {
  const { data } = await api.get(`/api/querys/${panelId}`);
  if (data.httpStatus !== 200) {
    throw new Error('Failed to fetch data');
  }
  return data.data; // 실제 데이터(SurveyResultData)만 반환
};
