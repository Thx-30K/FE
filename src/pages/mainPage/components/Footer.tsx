import s from '../styles/Footer.module.scss';

import LOGO from '@/assets/logo.svg';
import ARROW from '@/assets/main/scrollArrow.svg';

const Footer = () => {
  return (
    <div className={s.footerContainer}>
      <div className={s.footerLeft}>
        <img src={LOGO} alt="logo" className={s.footerImg} />

        {/* 임시 푸터 내용 */}
        <div className={s.footerText}>
          {`2071433 구혁모 2371429 김예나
          2371355 이가은 2171089 조주한 2171102 천성진`}
        </div>
      </div>

      <div className={s.footerRight}>
        <img src={ARROW} className={s.arrowImg} />
      </div>
    </div>
  );
};

export default Footer;
