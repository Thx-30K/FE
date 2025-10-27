import React from 'react';
import s from './MainPage.module.scss';
import MainTop from './components/MainTop';

const MainPage = () => {
  return (
    <div className={s.mainContainer}>
      <MainTop />
    </div>
  );
};

export default MainPage;
