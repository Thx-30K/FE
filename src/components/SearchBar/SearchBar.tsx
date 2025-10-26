import { useState } from 'react';
import styles from './SearchBar.module.scss';
import { searchIcon } from '@/assets';

// 검색 제출 시 호출할 함수(API 호출) 받기
interface SearchBarProps {
  onSearchSubmit: (query: string) => void;
}

export const SearchBar = ({ onSearchSubmit }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearchSubmit(query);
      }}
    >
      <input
        className={styles.input}
        type="search"
        placeholder="search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.button} disabled={query === ''} type="submit">
        <img src={searchIcon} alt="SearchIcon" />
      </button>
    </form>
  );
};
