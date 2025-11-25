import s from './MainTop.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';

import LOGO from '@/assets/logo.svg';

const MainTop = () => {
  return (
    <div className={s.topContainer}>
      <img src={LOGO} alt="logo" />
      <SearchBar />
    </div>
  );
};

export default MainTop;
