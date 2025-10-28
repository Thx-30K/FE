import React from 'react';
import s from './MainPage.module.scss';
import MainTop from './components/MainTop';
import ExplainBox from './components/ExplainBox';

import RESEARCH from '../../assets/main/main-research.svg';
import DASHBOARD from '../../assets/main/main-dashboard.svg';

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

      {/* 대시보드 관련 설명 */}
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
      </div>
    </div>
  );
};

export default MainPage;
