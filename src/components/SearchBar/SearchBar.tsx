import { useState } from 'react';
import styles from './SearchBar.module.scss';
import { searchIcon } from '@/assets';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({ placeholder }: { placeholder?: string }) => {
  const [query, setQuery] = useState('');
  const nav = useNavigate();

  const onSearchSubmit = () => {
    if (!query.trim()) return;

    const prevHistory = JSON.parse(localStorage.getItem('history') || '[]');

    const newHistoryItem = { title: query };

    localStorage.setItem(
      'history',
      JSON.stringify([newHistoryItem, ...prevHistory]),
    );

    nav(`/dashboard?query=${query}`);
    setQuery('');
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
        placeholder={placeholder || 'search...'}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className={styles.button} disabled={query === ''} type="submit">
        <img src={searchIcon} alt="SearchIcon" />
      </button>
    </form>
  );
};
