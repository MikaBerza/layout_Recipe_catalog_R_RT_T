import React from 'react';
import styles from './SignatureField.module.css';
import { SignatureFieldPropsType } from '../../../../types/customType';

const SignatureField = React.memo(
  ({ titleNameStyles, htmlForAttr, text }: SignatureFieldPropsType) => {
    return (
      <label
        className={`${styles.textSignature} ${styles[titleNameStyles]}`}
        htmlFor={htmlForAttr}
      >
        {text}
      </label>
    );
  }
);

SignatureField.displayName = 'SignatureField';
export default SignatureField;