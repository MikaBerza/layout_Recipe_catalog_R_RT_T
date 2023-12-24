import React from 'react';
import { SignatureField } from '..';
import styles from './InputField.module.css';
import { InputFieldPropsType } from '../../../../types/customType';

const InputField = ({
  signature,
  signatureNameStyles,
  name,
  type,
  id,
  placeholder,
  pattern,
  validationHintText,
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
      <input
        className={styles.input}
        name={name}
        type={type}
        id={id}
        autoComplete='off'
        placeholder={placeholder}
        pattern={pattern}
        title={validationHintText}
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

InputField.displayName = 'InputField';
export default React.memo(InputField, compareInputValues);
