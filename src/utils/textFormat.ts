// 따옴표 삭제 및 첫 줄 제거
export const formatReportText = (text?: string) => {
  if (!text) return '';
  const lines = text.split('\n');
  const bodyText = lines.slice(1).join('\n').trim();
  return bodyText.replace(/["'”“]/g, '').trim();
};
