import styles from './ButtonForm.module.css';
import { ButtonFormType } from '../../../../types/customType';

const ButtonForm = ({ nameBtn, nameType, onClick }: ButtonFormType) => {
  return (
    <button
      className={`${styles.btn} ${styles[nameType]}`}
      type={nameType}
      onClick={onClick}
    >
      {nameBtn}
    </button>
  );
};

ButtonForm.displayName = 'ButtonForm';
export default ButtonForm;
