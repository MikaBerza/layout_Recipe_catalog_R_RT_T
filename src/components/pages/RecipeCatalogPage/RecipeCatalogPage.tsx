import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import { Table } from '../../commons/tables';
import { ModalForm, ModalData } from '../../commons/modals';
import styles from './RecipeCatalogPage.module.css';
import { Loading } from '../../commons/Loading';
import { Errors } from '../../commons/Errors';

const RecipeCatalogPage = React.memo(() => {
  const { isLoading, isErrors } = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );

  return isErrors ? (
    <Errors />
  ) : (
    <>
      <main className={styles.wrapper}>
        {isLoading ? <Loading /> : <Table />}
      </main>
      <ModalForm />
      <ModalData />
    </>
  );
});

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
