import React from 'react';
import { SignatureField } from '..';
import styles from './InputField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const InputField = React.memo(
  ({
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
  }: FormItemPropsType) => {
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
  }
);

InputField.displayName = 'InputField';
export default InputField;
