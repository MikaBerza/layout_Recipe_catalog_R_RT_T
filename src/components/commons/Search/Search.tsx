import styles from './Search.module.css';

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type='search' placeholder='Поиск блюд' />
    </div>
  );
};

Search.displayName = 'Search';
export default Search;
