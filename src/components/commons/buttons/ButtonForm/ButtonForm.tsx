import React from 'react';
import styles from './ButtonForm.module.css';
import { ButtonType } from '../../../../types/customType';

const ButtonForm = ({ nameBtn, nameType, onClick }: ButtonType) => {
  return (
    <button
      className={`${styles.btn} ${nameType && styles[nameType]}`}
      type={nameType}
      onClick={onClick}
    >
      {nameBtn}
    </button>
  );
};

ButtonForm.displayName = 'ButtonForm';
export default React.memo(ButtonForm);
