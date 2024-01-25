import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { Trow } from '../index';
import { CatalogItemDataType } from '../../../../types/customType';

const Tbody = () => {
  const { recipeCatalogData, searchData, searchFlag } = useAppSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );

  // отображаемые данные
  const displayedData = React.useMemo(
    () => (searchFlag ? searchData : recipeCatalogData),
    [recipeCatalogData, searchData, searchFlag]
  );

  return (
    <tbody>
      {displayedData.map((item: CatalogItemDataType) => (
        <Trow key={item.id} item={item} dishNumber={item.id} />
      ))}
    </tbody>
  );
};

Tbody.displayName = 'Tbody';
export default Tbody;
