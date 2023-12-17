import { Link } from 'react-router-dom';
import styles from './ButtonCreateCatalog.module.css';

const ButtonCreateCatalog = ({
  name,
  link,
}: {
  name: string;
  link: string;
}) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBtn} to={link}>
        {name}
      </Link>
    </div>
  );
};

ButtonCreateCatalog.displayName = 'ButtonCreateCatalog';
export default ButtonCreateCatalog;
