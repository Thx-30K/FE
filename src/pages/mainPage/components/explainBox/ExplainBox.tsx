import s from './ExplainBox.module.scss';
import ScrollMotion from '../scrollMotion/ScrollMotion';

interface ExplainBoxProps {
  mainText: string;
  subText: string;
  isImgLeft: boolean;
  imgSrc: string;
  marginTop?: number;
  height: string | number;
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
      style={{ height, marginTop }}
    >
      {/* 이미지 */}
      <ScrollMotion direction={isImgLeft ? 'right' : 'left'}>
        <img
          src={imgSrc}
          className={s.explainImg}
          style={{
            top: vw(imgTop),
            width: vw(imgWidth),
            height: vw(imgHeight),
          }}
        />
      </ScrollMotion>

      {/* 텍스트 */}
      <ScrollMotion direction={isImgLeft ? 'left' : 'right'} delay={0}>
        <div
          className={`${s.explainTextContainer} ${alignClass}`}
          style={{ top: vw(textTop) }}
        >
          <p className={s.mainText}>{mainText}</p>
          <p className={s.subText}>{subText}</p>
        </div>
      </ScrollMotion>
    </div>
  );
};

export default ExplainBox;
