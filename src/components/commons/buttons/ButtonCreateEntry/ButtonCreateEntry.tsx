import styles from './ButtonCreateEntry.module.css';
import { ButtonType } from '../../../../types/customType';

const ButtonCreateEntry = ({ nameBtn, onClick }: ButtonType) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.linkBtn} onClick={onClick}>
        {nameBtn}
      </button>
    </div>
  );
};

ButtonCreateEntry.displayName = 'ButtonCreateEntry';
export default ButtonCreateEntry;
