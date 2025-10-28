import React from 'react';
import s from '../styles/ExplainBox.module.scss';

interface ExplainBoxProps {
  mainText: string;
  subText: string;
  isImgLeft: boolean;
  imgSrc: string;
  marginTop?: number;
  height: number;
  imgTop?: number;
  textTop?: number;
  imgWidth?: number;
  imgHeight?: number;
}

const ExplainBox: React.FC<ExplainBoxProps> = ({
  mainText,
  subText,
  isImgLeft,
  imgSrc,
  marginTop,
  height,
  imgTop,
  textTop,
  imgWidth,
  imgHeight,
}) => {
  const alignMap: Record<string, string> = {
    left: s.alignLeft,
    right: s.alignRight,
  };

  const alignClass = isImgLeft ? alignMap.right : alignMap.left;

  const vw = (px: number | undefined) =>
    px !== undefined ? `${(px / 1920) * 100}vw` : undefined;

  return (
    <div
      className={`${s.explainBoxContainer} ${isImgLeft ? s.left : s.right}`}
      style={{ height: height, marginTop: marginTop }}
    >
      <img
        src={imgSrc}
        className={s.explainImg}
        style={{ top: vw(imgTop), width: vw(imgWidth), height: vw(imgHeight) }}
      />

      <div
        className={`${s.explainTextContainer} ${alignClass}`}
        style={{ top: vw(textTop) }}
      >
        <p className={s.mainText}>{mainText}</p>
        <p className={s.subText}>{subText}</p>
      </div>
    </div>
  );
};

export default ExplainBox;
