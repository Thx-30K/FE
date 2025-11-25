import { useState } from 'react';
import Select, { type SingleValue, type StylesConfig } from 'react-select';
import { type CSSObjectWithLabel } from 'react-select';

interface OptionType {
  label: string;
  value: string;
}

const exportOptions = [
  { value: 'xlsx', label: '.xlsx' },
  { value: 'csv', label: '.csv' },
  // { value: 'pdf', label: '.pdf' },
];

const customStyles: StylesConfig<OptionType, false> = {
  control: (base: CSSObjectWithLabel) => ({
    // 맨위 컨트롤러 스타일
    ...base,
    borderRadius: '32px 0 0 0',
    border: 'none',
    backgroundColor: '#593D36',
    minWidth: 'calc(266px / 1920px * 100vw)',
    minHeight: 'calc(56px / 1920px * 100vw)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#F19D5233',
      cursor: 'pointer',
    },
    zIndex: 2,
    boxShadow: 'none',
  }),
  singleValue: (base: CSSObjectWithLabel) => ({
    // 맨위(선택된) 옵션의 스타일일
    ...base,
    color: 'white',
    fontSize: 'calc(24px / 1920px * 100vw)',
    fontWeight: '500',
    textAlign: 'center',
  }),
  menu: (base: CSSObjectWithLabel) => ({
    // 옵션 컨테이너의 스타일
    ...base,
    borderRadius: '0 0 32px 32px',
    backgroundColor: '#593D36',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    transform: 'translateY(-10px)',
  }),
  option: (base: CSSObjectWithLabel) => ({
    // 옵션 하나하나의 스타일
    ...base,
    backgroundColor: '#593D36',
    padding: 'calc(14px / 1920px * 100vw)',
    paddingLeft: 'calc(112px / 1920px * 100vw)',
    color: 'white',
    fontSize: 'calc(24px / 1920px * 100vw)',
    fontWeight: '500',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
      backgroundColor: '#F19D5233',
      cursor: 'pointer',
    },
  }),
  dropdownIndicator: (base: CSSObjectWithLabel) => ({
    // 드롭다운 화살표 스타일
    ...base,
    position: 'absolute' as const,
    right: 'calc(5px / 1920px * 100vw)',
    color: '#F19D52',
  }),
};

interface ExportSelectProps {
  setExportType?: (type: string) => void;
}

export const ExportSelect = ({ setExportType }: ExportSelectProps) => {
  const [selectedExportOption, setSelectedExportOption] = useState<
    SingleValue<OptionType>
  >(exportOptions[0]);

  const handleExportChange = (option: SingleValue<OptionType>) => {
    if (option && setExportType) {
      setSelectedExportOption(option);
      setExportType(option.value);
    }
  };

  return (
    <Select
      value={selectedExportOption}
      defaultValue={exportOptions[0]}
      name="내보내기"
      options={exportOptions}
      placeholder="내보내기 선택"
      onChange={handleExportChange}
      styles={customStyles}
      components={{ IndicatorSeparator: () => null }}
      isSearchable={false}
    />
  );
};
