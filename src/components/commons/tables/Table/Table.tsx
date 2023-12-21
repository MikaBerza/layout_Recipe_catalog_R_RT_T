import { Search } from '../../Search';
import { Thead, Tbody } from '../index';
import styles from './Table.module.css';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption>
        <Search />
      </caption>
      <Thead />
      <Tbody />
    </table>
  );
};

Table.displayName = 'Table';
export default Table;
