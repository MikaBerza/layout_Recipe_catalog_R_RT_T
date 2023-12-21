import { Table } from '../../commons/tables';

import styles from './RecipeCatalogPage.module.css';

const RecipeCatalogPage = () => {
  return (
    <main className={styles.wrapper}>
      <Table />
    </main>
  );
};

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
