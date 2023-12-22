import styles from './FormButton.module.css';

const FormButton = ({
  nameBtn,
  nameStyles,
}: {
  nameBtn: string;
  nameStyles: string;
}) => {
  return <button className={styles[nameStyles]}>{nameBtn}</button>;
};

FormButton.displayName = 'FormButton';
export default FormButton;
