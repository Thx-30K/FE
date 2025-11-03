// 검색 결과 데이터 타입
export interface SearchData {
  id: number;
  tags: string[];
  query: string;
  count: number;
  img: string;
}

//Card 컴포넌트 props 타입
export interface CardProps {
  data: SearchData;
  onClick: () => void;
}
