import React from 'react';
import { SignatureField } from '..';
import styles from './TextareaField.module.css';
import { InputFieldPropsType } from '../../../../types/customType';

const TextareaField = ({
  signature,
  signatureNameStyles,
  name,
  id,
  placeholder,
  maxLength,
  onChange,
  value,
}: InputFieldPropsType) => {
  return (
    <div className={styles.wrapper}>
      <SignatureField
        titleNameStyles={signatureNameStyles}
        htmlForAttr={id}
        text={signature}
      />
      <textarea
        className={styles.textarea}
        name={name}
        id={id}
        placeholder={placeholder}
        autoComplete='off'
        maxLength={maxLength}
        //
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
};

/* Оптимизируем компонент от лишних перерисовок
compareInputValues сравнивает значение (value) prevProps и nextProps, 
если значение (value) не изменилось, то функция вернет true, 
что позволит React пропустить повторное рендеринг компонента */
// функция, сравнить входные значения
const compareInputValues = (
  prevProps: InputFieldPropsType,
  nextProps: InputFieldPropsType
) => {
  return prevProps.value === nextProps.value;
};

TextareaField.displayName = 'TextareaField';
export default React.memo(TextareaField, compareInputValues);
