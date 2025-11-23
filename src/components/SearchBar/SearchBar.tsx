import { useState } from 'react';
import styles from './SearchBar.module.scss';
import { searchIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const nav = useNavigate();

  const onSearchSubmit = () => {
    nav(`/dashboard?query=${query}`);
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e) => {
        e.preventDefault();
        onSearchSubmit();
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
