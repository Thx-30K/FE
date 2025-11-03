import { useState } from 'react';
import s from './SideBar.module.scss';

import OPEN from '@/assets/history-icon.svg';
import BACK from '@/assets/history-back-icon.svg';
import HISTORY from '@/assets/history.svg';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={s.openButton}
        onClick={() => setIsOpen(true)}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <img src={OPEN} />
      </div>

      <div className={`${s.sidebar} ${isOpen ? s.open : ''}`}>
        <div className={s.historyHeader}>
          <div className={s.titleBox}>
            <p className={s.HeaderTitle}>이전 검색 기록</p>
          </div>
          <div className={s.HeaderSubtitle}>
            <p className={s.subText}>최근</p>
            <img src={HISTORY} className={s.historyImg} />
          </div>
          <div className={s.backButton} onClick={() => setIsOpen(false)}>
            <img src={BACK} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
