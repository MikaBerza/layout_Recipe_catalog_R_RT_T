import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';

import { setSearch } from '../../../redux/slices/searchSlice';
import styles from './Search.module.css';

const Search = () => {
  const { searchValue } = useSelector(
    (state: RootState) => state.searchSlice
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={searchValue}
        onChange={(event) => dispatch(setSearch(event.target.value))}
        type='search'
        placeholder='Поиск блюд'
      />
    </div>
  );
};

Search.displayName = 'Search';
export default Search;
