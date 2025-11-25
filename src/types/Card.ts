import type {
  DemographicsStats,
  MonthlyIncomeStats,
  Scenario,
} from './Dashboard';
import type { PanelDetail } from './Table';

//Card 컴포넌트 props 타입
export interface CardProps {
  data?: Scenario;
  onClick: () => void;
  panelSize?: number;
  originLineChartData?: Record<string, number>;
}

// 시나리오 상세 데이터 객체
export interface ScenarioDetail {
  demographicsStats: DemographicsStats;
  monthlyIncomeStats: MonthlyIncomeStats;
  report: string;
  panelDetails: PanelDetail[];
}

export interface ScenarioPayload {
  scenarioText: string;
  scenarioType: string;
  originalPanels: number;
}

export const LABEL_MAP: { [key: string]: string } = {
  STAT: '기초 통계형',
  CORRELATION: '성향 연관형',
  SECONDARY: '파생 인사이트형',
};
