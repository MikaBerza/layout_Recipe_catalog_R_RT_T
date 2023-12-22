import { FieldSignature } from '..';
import styles from './TextareaField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const TextareaField = ({
  signature,
  signatureNameStyles,
  name,
  id,
  placeholder,
  maxLength,
}: FormItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <FieldSignature
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
        required
      />
    </div>
  );
};

TextareaField.displayName = 'TextareaField';
export default TextareaField;
