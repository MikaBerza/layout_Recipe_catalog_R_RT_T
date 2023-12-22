import React from 'react';
import { Table } from '../../commons/tables';
import { ModalForm } from '../../commons/modals';

import styles from './RecipeCatalogPage.module.css';

const RecipeCatalogPage = () => {
  return (
    <>
      <main className={styles.wrapper}>
        <Table />
      </main>
      <ModalForm />
    </>
  );
};

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
