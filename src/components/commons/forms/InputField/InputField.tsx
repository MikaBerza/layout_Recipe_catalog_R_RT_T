import { SignatureField } from '..';
import styles from './InputField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

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
};

InputField.displayName = 'InputField';
export default InputField;
