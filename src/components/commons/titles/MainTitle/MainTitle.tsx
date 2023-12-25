import styles from './MainTitle.module.css';

const MainTitle = ({ textTitle }: { textTitle: string }) => {
  return <h1 className={`${styles.title}`}>{textTitle}</h1>;
};

MainTitle.displayName = 'MainTitle';
export default MainTitle;
