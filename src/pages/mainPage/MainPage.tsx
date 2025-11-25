import s from './styles/MainPage.module.scss';

import MainTop from './components/mainTop/MainTop';
import ExplainBox from './components/explainBox/ExplainBox';
import Footer from './components/footer/Footer';
import ScrollMotion from './components/scrollMotion/ScrollMotion';
import BanDMoving from './components/banDMoving/BanDMoving';

import RESEARCH from '../../assets/main/main-research.svg';
import DASHBOARD from '../../assets/main/main-dashboard.svg';
import CARD from '../../assets/main/main-card.svg';
import MEMORY from '../../assets/main/main-memory.svg';
import ARROW from '@/assets/main/scrollArrow.svg';

import { vw } from '@/utils/units';
import { useEffect, useState } from 'react';

const MainPage = () => {
  const [showScrollImg, setShowScrollImg] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollImg(true);
      } else {
        setShowScrollImg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={s.mainContainer}>
      <MainTop />
      <BanDMoving
        pathData="M991.5 0.479004L1276 85.479L1418 262.479L1449.5 432.979L1399 606.479L1276 713.979H1067.5L676 672.979L448.5 713.979L303.5 868.479L234 1102.48L174 1370.48L117 1597.98L54 1806.48L9.5 2027.48L54 2276.98L196 2497.98L448.5 2680.98L729.5 2857.48L985.5 3056.48L1200 3327.98L1257 3545.98L1234.5 3700.48L1133.5 3766.98L985.5 3855.48L799 4044.98L609.5 4256.48L448.5 4511.98L325.5 4795.98L171 5099.48L73 5310.98L0.5 5452.98V5717.98L139 5916.98L281.5 6014.98L373 6137.98L410.5 6295.98"
        top={vw(356)}
        left={vw(26.25)}
      />
      <ScrollMotion>
        <ExplainBox
          mainText="원하는 패널을 쉽고 간단하게
자연어로 검색해 보세요!"
          subText="원하는 타겟이 있으신가요? 바로 검색해 보세요!"
          isImgLeft={true}
          imgSrc={RESEARCH}
          height={vw(1080)}
          textTop={284}
          imgTop={161}
          imgWidth={1112}
          imgHeight={686}
        />
      </ScrollMotion>

      <ScrollMotion>
        {/* 질의 화면 관련 설명 */}
        <ExplainBox
          mainText="검색한 결과를 확인해 보세요!"
          subText="검색한 패널들의 특징들을 다양한 차트와
그래프를 통해 시각화해 드려요.
어떠한 인사이트를 찾고 있는지 한눈에 보여드릴게요!"
          isImgLeft={false}
          imgSrc={DASHBOARD}
          height={vw(1890)}
          textTop={380}
          imgTop={177}
          imgWidth={1174}
          imgHeight={1690.21}
        />
      </ScrollMotion>

      {/* 대시보드 및 카드 관련 설명 */}
      <ScrollMotion>
        <ExplainBox
          mainText="이런 패널들은 어떤가요?
비교해 보세요!"
          subText="기존 검색한 질의에서 사용자 특징 중 무엇을?
변경한 결과들이 담긴 카드를 제공해요.
더 다양한 탐색군과 인사이트를 찾아드려요!"
          isImgLeft={true}
          imgSrc={CARD}
          height={vw(1820)}
          marginTop={-226}
          imgTop={19}
          textTop={711}
          imgWidth={1187}
          imgHeight={1700}
        />
      </ScrollMotion>

      <ScrollMotion>
        {/* 검색 기록 관련 설명 */}
        <ExplainBox
          mainText="이전 검색 기록을
확인해 보세요!"
          subText="전에 검색했던 질의를 모아서 보여드려요!
다시 검색하거나 참고해서 다른 내용을 검색할 수 있어요."
          isImgLeft={false}
          imgSrc={MEMORY}
          height={vw(1080)}
          textTop={399}
          imgTop={228}
          imgHeight={738}
        />
      </ScrollMotion>

      <ScrollMotion>
        <Footer />
      </ScrollMotion>

      {showScrollImg && (
        <img src={ARROW} className={s.arrowImg} onClick={handleScrollTop} />
      )}
    </div>
  );
};

export default MainPage;
