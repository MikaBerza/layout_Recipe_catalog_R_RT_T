import styles from './ButtonCatalogItem.module.css';

const ButtonCatalogItem = ({ name }: { name: string }) => {
  return <button className={styles.btn}>{name}</button>;
};

ButtonCatalogItem.displayName = 'ButtonCatalogItem';
export default ButtonCatalogItem;
