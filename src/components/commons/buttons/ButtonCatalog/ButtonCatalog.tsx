import styles from './ButtonCatalog.module.css';

const ButtonCatalog = ({
  name,
  styleName,
}: {
  name: string;
  styleName: string;
}) => {
  return (
    <button className={`${styles.btn} ${styles[styleName]}`}>{name}</button>
  );
};

ButtonCatalog.displayName = 'ButtonCatalog';
export default ButtonCatalog;
