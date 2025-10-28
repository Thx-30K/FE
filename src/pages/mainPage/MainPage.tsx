import React from 'react';
import s from './MainPage.module.scss';
import MainTop from './components/MainTop';
import ExplainBox from './components/ExplainBox';

import RESEARCH from '../../assets/main/main-research.svg';

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
    </div>
  );
};

export default MainPage;
