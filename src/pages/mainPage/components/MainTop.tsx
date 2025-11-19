import s from '../styles/MainTop.module.scss';
import { SearchBar } from '@/components/SearchBar/SearchBar';

import LOGO from '@/assets/logo.svg';

const MainTop = () => {
  const handleSearchSubmit = (query: string) => {
    console.log('질의 내용: ', query);
  };

  return (
    <div className={s.topContainer}>
      <img src={LOGO} alt="logo" />
      <SearchBar onSearchSubmit={handleSearchSubmit} />
    </div>
  );
};

export default MainTop;
