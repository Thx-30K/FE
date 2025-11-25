import type { PanelDetail } from '@/types/Table';
import * as XLSX from 'xlsx';

export const handleExport = ({
  panelDetails,
  exportType = 'xlsx',
}: {
  panelDetails: PanelDetail[];
  exportType: string;
}) => {
  // 워크시트 생성 (JSON 데이터를 시트 형식으로 변환)
  const worksheet = XLSX.utils.json_to_sheet(panelDetails);

  // 워크북(엑셀 파일 본체) 생성
  const workbook = XLSX.utils.book_new();

  // 워크북에 워크시트 추가
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Panel Data');

  // 엑셀 파일 생성 및 다운로드 실행
  XLSX.writeFile(workbook, `panel_data.${exportType}`);
};
