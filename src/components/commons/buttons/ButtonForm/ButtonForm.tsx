import styles from './ButtonForm.module.css';

const ButtonForm = ({
  nameBtn,
  nameStyles,
}: {
  nameBtn: string;
  nameStyles: string;
}) => {
  return <button className={styles[nameStyles]}>{nameBtn}</button>;
};

ButtonForm.displayName = 'ButtonForm';
export default ButtonForm;
