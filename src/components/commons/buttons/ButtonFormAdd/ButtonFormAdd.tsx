import styles from './ButtonFormAdd.module.css';

const ButtonFormAdd = ({ nameBtn }: { nameBtn: string }) => {
  return <button className={styles.btn}>{nameBtn}</button>;
};

ButtonFormAdd.displayName = 'ButtonFormAdd';
export default ButtonFormAdd;
