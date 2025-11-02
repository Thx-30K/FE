import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import BAND from '@/assets/main/BanD.svg';

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
  const progress = useMotionValue(0);

  // 진행도 계산
  useAnimationFrame((t) => {
    progress.set((t / (duration * 1000)) % 1);
  });

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

  return (
    // 경로 svg 내의 정보
    <svg
      viewBox="0 0 1451 6297"
      width="1451"
      height="6297"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        top,
        left,
        overflow: 'visible',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <path ref={pathRef} d={pathData} fill="none" />

      <motion.image
        href={BAND}
        width={`${(231 / 1920) * 100}vw`}
        height={`${(157 / 1920) * 100}vw`}
        style={{
          translateX: x,
          translateY: y,
          rotate,
        }}
        transition={{
          ease: 'linear',
          duration,
          repeat: Infinity,
        }}
      />
    </svg>
  );
};

export default BanDMoving;
