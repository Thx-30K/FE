import React from 'react';
import s from './MainPage.module.scss';
import MainTop from './components/MainTop';
import ExplainBox from './components/ExplainBox';

import RESEARCH from '../../assets/main/main-research.svg';
import DASHBOARD from '../../assets/main/main-dashboard.svg';
import CARD from '../../assets/main/main-card.svg';
import MEMORY from '../../assets/main/main-memory.svg';
import Footer from './components/Footer';

const MainPage = () => {
  return (
    <div className={s.mainContainer}>
      <MainTop />

      {/* 질의 화면 관련 설명 */}
      <ExplainBox
        mainText="원하는 패널을 쉽고 간단하게
        자연어로 검색해 보세요!"
        subText="원하는 타겟이 있으신가요? 바로 검색해 보세요!"
        isImgLeft={true}
        imgSrc={RESEARCH}
        height="1008px"
        textTop="284px"
        imgTop="161px"
      />

      {/* 대시보드 및 카드 관련 설명 */}
      <div style={{ position: 'relative', overflow: 'visible' }}>
        <ExplainBox
          mainText="검색한 결과를 확인해 보세요!"
          subText="검색한 패널들의 특징들을 다양한 차트와
          그래프를 통해 시각화해 드려요.
          어떠한 인사이트를 찾고 있는지 한눈에 보여드릴게요!"
          isImgLeft={false}
          imgSrc={DASHBOARD}
          height="1890px"
          textTop="380px"
          imgTop="177px"
        />

        <ExplainBox
          mainText="이런 패널들은 어떤가요?
          비교해 보세요!"
          subText="기존 검색한 질의에서 사용자 특징 중 무엇을?
          변경한 결과들이 담긴 카드를 제공해요.
          
          더 다양한 탐색군과 인사이트를 찾아드려요!"
          isImgLeft={true}
          imgSrc={CARD}
          height="1820px"
          marginTop="-226px"
          imgTop="19px"
          textTop="711px"
        />

        {/* 검색 기록 관련 설명 */}
        <ExplainBox
          mainText="이전 검색 기록을
          확인해 보세요!"
          subText="전에 검색했던 질의를 모아서 보여드려요!
          다시 검색하거나,
          참고해서 다른 내용을 검색할 수 있어요."
          isImgLeft={false}
          imgSrc={MEMORY}
          height="1080px"
          textTop="399px"
          imgTop="228px"
        />
      </div>

      <Footer />
    </div>
  );
};

export default MainPage;
