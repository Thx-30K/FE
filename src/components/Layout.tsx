import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/SideBar';

export const Layout = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};
