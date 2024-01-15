import { Link } from 'react-router-dom';
import { ButtonType } from '../../../../types/customType';
import styles from './ButtonControlCatalogEntry.module.css';

const ButtonControlCatalogEntry = ({
  nameBtn,
  onClick,
  link = null,
}: ButtonType) => {
  if (link === null) {
    return (
      <button className={styles.btn} onClick={onClick}>
        {nameBtn}
      </button>
    );
  } else {
    return (
      <Link className={styles.btn} to={link}>
        {nameBtn}
      </Link>
    );
  }
};

ButtonControlCatalogEntry.displayName = 'ButtonControlCatalogEntry';
export default ButtonControlCatalogEntry;
