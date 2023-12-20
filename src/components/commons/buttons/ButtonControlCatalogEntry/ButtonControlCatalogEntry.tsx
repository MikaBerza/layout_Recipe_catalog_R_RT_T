import styles from './ButtonControlCatalogEntry.module.css';

const ButtonControlCatalogEntry = ({ name }: { name: string }) => {
  return <button className={styles.btn}>{name}</button>;
};

ButtonControlCatalogEntry.displayName = 'ButtonControlCatalogEntry';
export default ButtonControlCatalogEntry;
