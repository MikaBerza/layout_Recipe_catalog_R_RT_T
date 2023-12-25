import { ButtonType } from '../../../../types/customType';
import styles from './ButtonControlCatalogEntry.module.css';

const ButtonControlCatalogEntry = ({ nameBtn, onClick }: ButtonType) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {nameBtn}
    </button>
  );
};

ButtonControlCatalogEntry.displayName = 'ButtonControlCatalogEntry';
export default ButtonControlCatalogEntry;
