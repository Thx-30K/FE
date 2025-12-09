# Ban:D FrontEnd
LLM 기반 자연어 질의 분석과 하이브리드 검색을 결합한 지능형 패널 추천 시스템입니다.


## Preview
<img width="1000" alt="Screenshot 2025-12-07 at 12 45 52 AM" src="https://github.com/user-attachments/assets/317f801b-7528-48f2-8fd4-002e3cbc2dee" />
<img width="1000" alt="Screenshot 2025-12-07 at 12 46 02 AM" src="https://github.com/user-attachments/assets/496481f1-dd4f-4497-b783-4b290b86b0a8" />
<img width="1000" alt="Screenshot 2025-12-07 at 12 46 15 AM" src="https://github.com/user-attachments/assets/197a2ed8-1981-4af3-9e04-d892081e33cf" />
<img width="1000" alt="Screenshot 2025-12-07 at 12 46 27 AM" src="https://github.com/user-attachments/assets/ec89357d-deee-432e-a45a-635484f334a0" />
<img width="1000" alt="Screenshot 2025-12-07 at 12 46 36 AM" src="https://github.com/user-attachments/assets/e5715560-b714-4f24-8c1f-a6feaa8dc391" />


## Members

<table width="50%" align="center">
    <tr>
        <td align="center"><b>LEAD/FE</b></td>
        <td align="center"><b>FE</b></td>
        <td align="center"><b>BE</b></td>
        <td align="center"><b>BE/DATA</b></td>
        <td align="center"><b>BE/AI</b></td>
    </tr>
    <tr>
        <td align="center"><img src="https://github.com/9hkmo.png" /></td>
        <td align="center"><img src="https://github.com/a-neey.png" /></td>
        <td align="center"><img src="https://github.com/LgE02.png"></td>
        <td align="center"><img src="https://github.com/zzuhannn.png" /></td>
        <td align="center"><img src="https://github.com/oroi2009.png" /></td>
    </tr>
    <tr>
        <td align="center"><b><a href="https://github.com/9hkmo">구혁모</a></b></td>
        <td align="center"><b><a href="https://github.com/a-neey">김예나</a></b></td>
        <td align="center"><b><a href="https://github.com/LgE02">이가은</a></b></td>
        <td align="center"><b><a href="https://github.com/zzuhannn">조주한</a></b></td> 
        <td align="center"><b><a href="https://github.com/oroi2009">천성진</a></b></td> 
    </tr>
</table>

## Tech Stack

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **React Router** - 라우팅
- **TanStack Query** - 서버 상태 관리
- **Chart.js** - 차트 라이브러리
- **SCSS** - 스타일링
- **Axios** - HTTP 클라이언트
- **Framer Motion** - 애니메이션
- **XLSX** - 데이터 내보내기

## Getting Started

### Installation

```bash
git clone https://github.com/hansung-sw-capstone-2025-2/2025_8_I_FE.git
cd 2025_8_I_FE
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Build

```bash
npm run preview
```

## Project Structure

```
src/
├── apis/              # API 클라이언트 및 서버 통신 로직
├── assets/            # 정적 자산 (아이콘, 이미지, 로고)
├── components/        # 재사용 가능한 컴포넌트
│   ├── Layout.tsx     # 레이아웃 래퍼
│   ├── SearchBar/     # 검색 바 컴포넌트
│   └── SideBar/       # 사이드바 컴포넌트
├── data/              # 정적 데이터
├── pages/             # 페이지 컴포넌트
│   ├── DashBoardPage/ # 대시보드 페이지 및 하위 컴포넌트
│   └── mainPage/      # 메인 페이지 및 하위 컴포넌트
├── styles/            # 전역 스타일 (SCSS 변수, 함수, 믹스인)
├── types/             # TypeScript 타입 정의
└── utils/             # 유틸리티 함수
```


## Key Features

- **자연어 패널 검색**: LLM 기반 자연어 질의 분석을 통한 직관적인 패널 검색
- **데이터 시각화**: 다양한 차트를 통한 데이터 시각화 및 분석 
- **시나리오 카드**: 3가지 유형에 따른 패널 추천 시나리오 제공
- **패널 상세 정보**: 검색된 패널의 상세 정보 테이블 제공
- **데이터 내보내기**: XLSX/CSV 형식으로 데이터 내보내기 지원

## License

이 프로젝트는 한성대학교 기업연계 SW캡스톤디자인 수업에서 진행되었습니다.
