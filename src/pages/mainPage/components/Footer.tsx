import React from 'react';
import s from '../styles/Footer.module.scss';

import LOGO from '@/assets/logo.svg';

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <img src={LOGO} alt="logo" className={s.footerImg} />
      <div className={s.footerText}>
        <p>ⓒ HSU [데이터(삼)만개감사합니다] 팀 </p>
        <br />
        <p>FE 구혁모 김예나</p>
        <p>BE 이가은 조주한 천성진</p>
      </div>
    </div>
  );
};

export default Footer;
