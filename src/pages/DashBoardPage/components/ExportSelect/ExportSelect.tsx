import { useState } from 'react';
import Select from 'react-select';

const exportOptions = [
  { value: 'csv', label: '.csv' },
  { value: 'pdf', label: '.pdf' },
  { value: 'xlsx', label: '.xlsx' },
];

const customStyles = {
  control: (base, state) => ({
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
  singleValue: (base) => ({
    // 맨위(선택된) 옵션의 스타일일
    ...base,
    color: 'white',
    fontSize: 'calc(24px / 1920px * 100vw)',
    fontWeight: '500',
    textAlign: 'center',
  }),
  menu: (base) => ({
    // 옵션 컨테이너의 스타일
    ...base,
    borderRadius: '0 0 32px 32px',
    backgroundColor: '#593D36',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    transform: 'translateY(-10px)',
  }),
  option: (base) => ({
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
  dropdownIndicator: (base) => ({
    // 드롭다운 화살표 스타일
    ...base,
    position: 'absolute',
    right: 'calc(5px / 1920px * 100vw)',
    color: '#F19D52',
  }),
};

export const ExportSelect = () => {
  const [selectedExportOption, setSelectedExportOption] = useState({});

  const handleExportChange = (option) => {
    setSelectedExportOption(option);
  };
  return (
    <Select
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
