import { Link } from 'react-router-dom';
import styles from './ButtonCreateEntry.module.css';

const ButtonCreateEntry = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.linkBtn} to={link}>
        {name}
      </Link>
    </div>
  );
};

ButtonCreateEntry.displayName = 'ButtonCreateEntry';
export default ButtonCreateEntry;
