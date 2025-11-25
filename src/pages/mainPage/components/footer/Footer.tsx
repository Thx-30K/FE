import s from './Footer.module.scss';

import LOGO from '@/assets/logo.svg';

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <img src={LOGO} alt="logo" className={s.footerImg} />

      {/* 임시 푸터 내용 */}
      <div className={s.footerText}>
        {`2071433 구혁모 2371429 김예나
          2371355 이가은 2171089 조주한 2171102 천성진

          ⓒ HSU 25-2 기업연계 SW캡스톤디자인(8) [데이터(삼)만개감사합니다] 팀`}
      </div>
    </div>
  );
};

export default Footer;
