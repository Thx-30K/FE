export interface QuestionStat {
  questionId: number;
  questionText: string;
  answers: Record<string, number>;
}

export interface BarChartProps {
  dataMap?: QuestionStat[];
}

export interface DoughnutChartProps {
  dataMap?: Record<string, number>;
  category: '성별' | '연령대' | '지역' | '학력'; // 현재 어떤 카테고리를 그리고 있는지 (색상 결정을 위해 필요)
}

export interface LineAreaChartProps {
  dataMap?: Record<string, number>;
}
