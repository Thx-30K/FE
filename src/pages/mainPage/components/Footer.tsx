import React from 'react';
import s from '../styles/Footer.module.scss';

import LOGO from '@/assets/logo.svg';

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <img src={LOGO} alt="logo" className={s.footerImg} />

      {/* 임시 푸터 내용 */}
      <div className={s.footerText}>
        <p>FE 구혁모 김예나</p>
        <p>BE 이가은 조주한 천성진</p>
        <br />
        <p>ⓒ HSU 25-2 기업연계캡스톤디자인 [데이터(삼)만개감사합니다] 팀 </p>
      </div>
    </div>
  );
};

export default Footer;
