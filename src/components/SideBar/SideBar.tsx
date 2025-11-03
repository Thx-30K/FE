import { useState } from 'react';
import s from './SideBar.module.scss';

import OPEN from '@/assets/history-icon.svg';
import BACK from '@/assets/history-back-icon.svg';
import HISTORY from '@/assets/history.svg';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [historyList, setHistoryList] = useState([
    {
      title: '서울 사는 20대 남성',
      keywords: ['서울', '20대', '남성'],
    },
    {
      title: '넷플릭스를 자주 보는 30대 여성',
      keywords: ['넷플릭스', '30대', '여성', 'OTT'],
    },
    {
      title: 'BMW를 타는 남성',
      keywords: ['남성', 'BMW', '면허'],
    },
  ]);

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
              <div className={s.historyKeyword}>
                {item.keywords.map((kw, i) => (
                  <p className={s.keywordText} key={i}>
                    #{kw}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
