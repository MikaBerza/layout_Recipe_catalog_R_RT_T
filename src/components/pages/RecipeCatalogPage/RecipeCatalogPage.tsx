import React from 'react';
import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { Errors } from '../../commons/Errors';
import { Loading } from '../../commons/Loading';
import { Table } from '../../commons/tables';
import styles from './RecipeCatalogPage.module.css';

const RecipeCatalogPage = React.memo(() => {
  const { isLoading, isErrors } = useAppSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );

  return isErrors ? (
    <Errors />
  ) : (
    <main className={styles.wrapper}>
      {isLoading ? <Loading /> : <Table />}
    </main>
  );
});

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
