import React from 'react';
import { Table } from '../../commons/tables';
import { ModalForm, ModalData } from '../../commons/modals';
import styles from './RecipeCatalogPage.module.css';

const RecipeCatalogPage = React.memo(() => {
  return (
    <>
      <main className={styles.wrapper}>
        <Table />
      </main>
      <ModalForm />
      <ModalData />
    </>
  );
});

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
