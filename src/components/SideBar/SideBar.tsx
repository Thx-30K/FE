import { useEffect, useState } from 'react';
import s from './SideBar.module.scss';

import OPEN from '@/assets/history-icon.svg';
import BACK from '@/assets/history-back-icon.svg';
import HISTORY from '@/assets/history.svg';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [historyList, setHistoryList] = useState<{ title: string }[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('history');
    if (saved) {
      setHistoryList(JSON.parse(saved));
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`${s.openButton} ${isOpen ? s.hidden : ''}`}
        onClick={() => setIsOpen(true)}
      >
        <img src={OPEN} className={s.openButtonImg} />
      </div>

      {isOpen && <div className={s.overlay} />}

      <div className={`${s.sidebar} ${isOpen ? s.open : ''}`}>
        <div className={s.historyHeader}>
          <div className={s.titleBox}>
            <p className={s.headerTitle}>이전 검색 기록</p>
          </div>
          <div className={s.headerSubtitle}>
            <p className={s.subText}>최근</p>
            <img src={HISTORY} className={s.historyImg} />
          </div>
          <div className={s.backButton} onClick={() => setIsOpen(false)}>
            <img src={BACK} className={s.backButtonImg} />
          </div>
        </div>

        <div className={s.historyContainer}>
          {historyList.map((item, idx) => (
            <div className={s.historyBox} key={idx}>
              <p className={s.historyTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
