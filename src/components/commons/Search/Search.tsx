import style from './QSearch.module.css';

const Search = () => {
  return (
    <input className={style.input} type='search' placeholder='Поиск блюд' />
  );
};

Search.displayName = 'Search';
export default Search;
