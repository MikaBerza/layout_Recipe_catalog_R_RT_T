import styles from './CreateCatalogBtn.module.css';

const CreateCatalogBtn = ({ name }: { name: string }) => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.item} href='#collect-tour'>
        {name}
      </a>
    </div>
  );
};

CreateCatalogBtn.displayName = 'CreateCatalogBtn';
export default CreateCatalogBtn;
