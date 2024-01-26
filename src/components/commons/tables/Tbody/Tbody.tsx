import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { Trow } from '../index';
import { CatalogItemDataType } from '../../../../types/customType';

const Tbody = React.memo(() => {
  const recipeCatalogData = useAppSelector(
    (state: RootState) => state.recipeCatalogDataSlice.recipeCatalogData
  );

  return (
    <tbody>
      {recipeCatalogData.map((item: CatalogItemDataType, index: number) => (
        <Trow key={item.id} item={item} dishNumber={String(index + 1)} />
      ))}
    </tbody>
  );
});

Tbody.displayName = 'Tbody';
export default Tbody;
