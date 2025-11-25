import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import BAND from '@/assets/main/BanD.svg';

import { vw } from '@/utils/units';

interface BanDMovingProps {
  pathData: string;
  duration?: number;
  top?: string;
  left?: string;
}

const BanDMoving: React.FC<BanDMovingProps> = ({
  pathData,
  duration = 15,
  top = '0',
  left = '0',
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // 현재 진행도에 따른 좌표
  const getPoint = (p: number) => {
    const path = pathRef.current;
    if (!path) return { x: 0, y: 0 };
    const len = path.getTotalLength();
    return path.getPointAtLength(len * p);
  };

  // 이미지 이동 좌표 및 회전
  const x = useTransform(progress, (p: number) => getPoint(p).x - 25);
  const y = useTransform(progress, (p: number) => getPoint(p).y - 25);
  const rotate = useTransform(progress, (p: number) => p * 360);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.85, 1],
    [0, 1, 1, 0],
  );

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (pathRef.current) setIsReady(true);
  }, []);

  return (
    <svg
      viewBox="0 0 1451 6297"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        width: vw(1451),
        height: vw(6297),
        top,
        left,
        overflow: 'visible',
        pointerEvents: 'none',
      }}
    >
      <path ref={pathRef} d={pathData} fill="none" />

      {isReady && (
        <motion.image
          href={BAND}
          width={231}
          height={157}
          style={{
            translateX: x,
            translateY: y,
            rotate,
            opacity,
          }}
          transition={{
            ease: 'linear',
            duration,
            repeat: Infinity,
          }}
          viewport={{ amount: 0.1, once: false }}
        />
      )}
    </svg>
  );
};

export default BanDMoving;
