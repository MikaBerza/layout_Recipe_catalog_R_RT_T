import { Link } from 'react-router-dom';
import styles from './ButtonGoToCatalog.module.css';

const ButtonGoToCatalog = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBtn} to={link}>
        {name}
      </Link>
    </div>
  );
};

ButtonGoToCatalog.displayName = 'ButtonGoToCatalog';
export default ButtonGoToCatalog;
