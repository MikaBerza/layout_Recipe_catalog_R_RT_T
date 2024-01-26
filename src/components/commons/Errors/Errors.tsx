import styles from './Errors.module.css';

const Errors = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Error...</h2>
    </div>
  );
};

Errors.displayName = 'Errors';
export default Errors;
