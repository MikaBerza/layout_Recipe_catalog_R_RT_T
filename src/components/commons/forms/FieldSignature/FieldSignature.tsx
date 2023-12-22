import styles from './FieldSignature.module.css';
import { FieldSignaturePropsType } from '../../../../types/customType';

const FieldSignature = ({
  titleNameStyles,
  htmlForAttr,
  text,
}: FieldSignaturePropsType) => {
  return (
    <label
      className={`${styles.textSignature} ${styles[titleNameStyles]}`}
      htmlFor={htmlForAttr}
    >
      {text}
    </label>
  );
};

FieldSignature.displayName = 'FieldSignature';
export default FieldSignature;
