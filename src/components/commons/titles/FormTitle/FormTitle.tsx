import React from 'react';
import styles from './FormTitle.module.css';
//
const FormTitle = ({ textTitle }: { textTitle: string }) => {
  return <h3 className={`${styles.title}`}>{textTitle}</h3>;
};

FormTitle.displayName = 'FormTitle';
export default FormTitle;
