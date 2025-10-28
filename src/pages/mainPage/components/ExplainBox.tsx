import React from 'react';
import s from '../styles/ExplainBox.module.scss';

interface ExplainBoxProps {
  mainText: string;
  subText: string;
  isImgLeft: boolean;
  imgSrc: string;
  marginTop?: string;
  height: string;
}

const ExplainBox: React.FC<ExplainBoxProps> = ({
  mainText,
  subText,
  isImgLeft,
  imgSrc,
  marginTop = '0',
  height = '0',
}) => {
  const alignMap: Record<string, string> = {
    left: s.alignLeft,
    right: s.alignRight,
  };

  const alignClass = isImgLeft ? alignMap.right : alignMap.left;

  return (
    <div
      className={`${s.explainBoxContainer} ${isImgLeft ? s.left : s.right}`}
      style={{ marginTop: marginTop, height: height }}
    >
      <img src={imgSrc} className={s.explainImg} />

      <div className={`${s.explainTextContainer} ${alignClass}`}>
        <p className={s.mainText}>{mainText}</p>
        <p className={s.subText}>{subText}</p>
      </div>
    </div>
  );
};

export default ExplainBox;
