import { useState } from 'react';
import { PanelModal } from '../PanelModal/PanelModal';
import styles from './PanelTable.module.scss';

export const PanelTable = () => {
  const [PanelModalNumber, setPanelModalNumber] = useState<number | null>(null);
  return (
    <>
      <table>
        <colgroup>
          <col style={{ width: '50px' }} />
          <col style={{ width: '10px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '150px' }} />
          <col style={{ width: '150px' }} />
        </colgroup>
        <thead>
          <tr>
            <th>No.</th>
            <th>패널 ID</th>
            <th>나이</th>
            <th>월소득</th>
            <th>지역</th>
            <th>담배</th>
            <th>직업</th>
          </tr>
        </thead>
        <tbody>
          {/* 추후 변경 */}
          {[...Array(10)].map((_, index) => (
            <tr
              key={index}
              onClick={() => setPanelModalNumber(index)}
              onMouseLeave={() => setPanelModalNumber(null)}
            >
              <td>{index + 1}</td>
              <td>
                w100010279508856
                {PanelModalNumber === index && (
                  <PanelModal
                    panelId={index}
                    id="w100010279508856"
                    tags={[
                      'test',
                      '25',
                      '300만원',
                      '300만원',
                      '300만원',
                      '300만원',
                    ]}
                    onMouseLeave={() => setPanelModalNumber(null)}
                  />
                )}
              </td>
              <td>25</td>
              <td>300만원</td>
              <td>서울</td>
              <td>비흡연</td>
              <td>학생</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableNav}>
        <span className={styles.prevButton} onClick={() => {}}>
          ◀
        </span>
        <div className={styles.tableNumbers}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((page) => (
            <span key={page} className={`${styles.active} ${styles.tableNum}`}>
              {page}
            </span>
          ))}
        </div>
        <span className={styles.nextButton} onClick={() => {}}>
          ▶
        </span>
      </div>
    </>
  );
};
