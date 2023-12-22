import React from 'react';
import { SignatureField } from '..';
import styles from './InputField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const InputField = React.memo(
  ({
    onBlur,
    signature,
    signatureNameStyles,
    name,
    type,
    id,
    placeholder,
    pattern,
    validationHintText,
    maxLength,
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
        /* Используем событие onBlur вместо onChange. 
        Если обработчик изменения не требуется в реальном времени, то обновление не происходит,
        тем самым уменьшаем количество обновлений компонента. */
          onBlur={onBlur}
          className={styles.input}
          name={name}
          //
          type={type}
          id={id}
          autoComplete='off'
          placeholder={placeholder}
          pattern={pattern}
          title={validationHintText}
          //
          maxLength={maxLength}
          defaultValue={value}
          required
        />
      </div>
    );
  }
);

InputField.displayName = 'InputField';
export default InputField;
