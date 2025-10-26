import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      {/* 추후에 이전 검색 기록 보기 추가 */}
      <Outlet />
    </>
  );
};
