import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import { Table } from '../../commons/tables';
import { ModalForm } from '../../commons/modals';

import styles from './RecipeCatalogPage.module.css';

const RecipeCatalogPage = React.memo(() => {
  const { modalActive, modalEditingActive } = useSelector(
    (state: RootState) => state.modalFormSlice
  );
  return (
    <>
      <main className={styles.wrapper}>
        <Table />
      </main>
      {modalActive && <ModalForm />}
      {modalEditingActive && <ModalForm />}
    </>
  );
});

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
