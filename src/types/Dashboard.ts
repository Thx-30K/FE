import type { PanelDetail } from './Table';

// 시나리오
export interface Scenario {
  imageUrl: string;
  type: string;
  text: string;
  tags: [
    {
      field: string;
      values?: string[];
    },
  ];
}

// 질문 통계
export interface QuestionStat {
  questionId: number;
  questionText: string;
  answers: Record<string, number>; // key는 답변내용(string), value는 응답수(number)
}

// 월 소득 통계
export interface MonthlyIncomeStats {
  incomeRatios: Record<string, number>;
}

// 인구 통계
export interface DemographicsStats {
  stats: {
    연령대?: Record<string, number>;
    성별?: Record<string, number>;
    지역?: Record<string, number>;
    학력?: Record<string, number>;
  };
}

// 데이터 객체
export interface SurveyResultData {
  scenarios: Scenario[];
  demographicsStats: DemographicsStats;
  monthlyIncomeStats: MonthlyIncomeStats;
  questionStats: QuestionStat[];
  panelDetails: PanelDetail[];
}

// 최상위 API 응답 공통 래퍼
export interface ApiResponse<T> {
  isSuccess: boolean;
  code: string;
  httpStatus: number;
  message: string;
  data: T;
  timeStamp: string;
}

export type SurveyResponse = ApiResponse<SurveyResultData>;
