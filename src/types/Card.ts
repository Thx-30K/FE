import type { Scenario } from './Dashboard';

//Card 컴포넌트 props 타입
export interface CardProps {
  data?: Scenario;
  onClick: () => void;
}
