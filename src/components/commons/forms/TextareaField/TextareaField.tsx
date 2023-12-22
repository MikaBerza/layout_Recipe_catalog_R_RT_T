import { SignatureField } from '..';
import styles from './TextareaField.module.css';
import { FormItemPropsType } from '../../../../types/customType';

const TextareaField = ({
  onBlur,
  signature,
  signatureNameStyles,
  name,
  id,
  placeholder,
  maxLength,
}: FormItemPropsType) => {
  return (
    <div className={styles.wrapper}>
      <SignatureField
        titleNameStyles={signatureNameStyles}
        htmlForAttr={id}
        text={signature}
      />
      <textarea
        /* Используем событие onBlur вместо onChange. 
        Если обработчик изменения не требуется в реальном времени, то обновление не происходит,
        тем самым уменьшаем количество обновлений компонента. */
        onBlur={onBlur}
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
