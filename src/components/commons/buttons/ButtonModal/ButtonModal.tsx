import React from 'react';
import styles from './ButtonModal.module.css';
import { ButtonType } from '../../../../types/customType';

const ButtonModal = ({ nameBtn, nameType, onClick }: ButtonType) => {
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

ButtonModal.displayName = 'ButtonModal';
export default React.memo(ButtonModal);
