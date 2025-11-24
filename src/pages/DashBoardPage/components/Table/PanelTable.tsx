import { useEffect, useState } from 'react';
import { PanelModal } from '../PanelModal/PanelModal';
import styles from './PanelTable.module.scss';
import type { PanelDetail, PanelTableProps } from '@/types/Table';

const ITEMS_PER_PAGE = 10;
const PAGE_GROUP_SIZE = 10;

export const PanelTable = ({ panelDetails }: PanelTableProps) => {
  const [panelData, setPanelData] = useState<PanelDetail[] | undefined | null>(
    panelDetails,
  );
  const [panelModalNumber, setPanelModalNumber] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    setPanelData(panelDetails);
    setCurrentPage(1);
  }, [panelDetails]);

  const totalPages = panelData && Math.ceil(panelData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // 현재 페이지에 보여줄 데이터
  const currentData = panelData && panelData.slice(startIndex, endIndex);

  // 현재 페이지가 속한 그룹 계산
  const currentGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);

  // 현재 그룹의 시작 페이지 번호와 끝 페이지 번호 계산
  const startPage = (currentGroup - 1) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages || 1);

  // 페이지 변경 핸들러
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <table>
        <colgroup>
          <col style={{ width: '5%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '5%' }} />
          <col style={{ width: '10%' }} />
          <col style={{ width: '15%' }} />
          <col style={{ width: '30%' }} />
          <col style={{ width: '10%' }} />
        </colgroup>
        <thead>
          <tr>
            <th>No.</th>
            <th>패널 ID</th>
            <th>성별</th>
            <th>나이대</th>
            <th>결혼 여부</th>
            <th>직업 분야</th>
            <th>차 소유</th>
          </tr>
        </thead>
        {/* 패널 데이터 리스트 */}
        <tbody>
          {currentData?.map((panel, index) => (
            <tr
              key={panel.id}
              onClick={() => setPanelModalNumber(panel.id)}
              onMouseLeave={() => setPanelModalNumber(null)}
            >
              <td>{startIndex + index + 1}</td>
              <td>
                {panel.mbSn || '-'}
                {panelModalNumber === panel.id && (
                  <PanelModal
                    panelId={panel.id}
                    id={panel.mbSn}
                    onMouseLeave={() => setPanelModalNumber(null)}
                  />
                )}
              </td>
              <td>{panel.gender || '-'}</td>
              <td>{panel.ageBand || '-'}</td>
              <td>{panel.maritalStatus || '-'}</td>
              <td>{panel.jobField || '-'}</td>
              <td>
                {panel.carOwnership === true
                  ? '소유'
                  : panel.carOwnership === false
                  ? '없음'
                  : '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* 페이지네이션 컨트롤 */}
      <div className={styles.tableNav}>
        <span
          className={styles.prevButton}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          style={{
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? 0.5 : 1,
          }}
        >
          ◀
        </span>
        <div className={styles.tableNumbers}>
          {Array.from(
            { length: endPage - startPage + 1 }, // 현재 그룹의 페이지 개수만큼 배열 생성
            (_, i) => startPage + i, // startPage부터 번호 생성
          ).map((page) => (
            <span
              key={page}
              className={`${currentPage === page && styles.active} ${
                styles.tableNum
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </span>
          ))}
        </div>
        <span
          className={styles.nextButton}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages!))
          }
          style={{
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages ? 0.5 : 1,
          }}
        >
          ▶
        </span>
      </div>
    </>
  );
};
