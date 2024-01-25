import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../redux/store';

import {
  fetchSearchEntries,
  setSearchValue,
  setSearchFlag,
} from '../../../redux/slices/recipeCatalogSlice';
import styles from './Search.module.css';

const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );

  const handleSearch = React.useCallback(() => {
    if (searchValue.trim().length > 0) {
      dispatch(setSearchFlag(true));
      // @ts-ignore
      dispatch(fetchSearchEntries(searchValue));
    }
  }, [dispatch, searchValue]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={searchValue}
        onChange={(event) => dispatch(setSearchValue(event.target.value))}
        type='search'
        placeholder='Поиск блюд'
      />
      <button className={styles.button} onClick={handleSearch}>
        <svg className={styles.icon} viewBox='0 0 32 32' version='1.1'>
          <path d='M10.437,19.442l-7.498,7.497c-0.585,0.586 -0.585,1.536 0,2.122c0.586,0.585 1.536,0.585 2.122,-0l7.649,-7.65c1.544,0.976 3.373,1.542 5.333,1.542c5.52,-0 10,-4.481 10,-10c0,-5.52 -4.48,-10 -10,-10c-5.519,-0 -10,4.48 -10,10c0,2.475 0.902,4.741 2.394,6.489Z' />
        </svg>
      </button>
    </div>
  );
};

Search.displayName = 'Search';
export default Search;
