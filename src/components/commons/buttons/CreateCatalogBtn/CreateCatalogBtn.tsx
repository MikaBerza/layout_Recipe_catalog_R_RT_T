import { Link } from 'react-router-dom';
import styles from './CreateCatalogBtn.module.css';

const CreateCatalogBtn = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBtn} to={link}>
        {name}
      </Link>
    </div>
  );
};

CreateCatalogBtn.displayName = 'CreateCatalogBtn';
export default CreateCatalogBtn;
