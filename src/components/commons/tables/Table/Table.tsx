import React from 'react';
import { MainTitle } from '../../titles';
import { Search } from '../../Search';
import { Thead, Tbody } from '../index';
import styles from './Table.module.css';

const Table = React.memo(() => {
  return (
    <table className={styles.table}>
      <caption>
        <MainTitle textTitle='Каталог рецептов' />
        <Search />
      </caption>
      <Thead />
      <Tbody />
    </table>
  );
});

Table.displayName = 'Table';
export default Table;
