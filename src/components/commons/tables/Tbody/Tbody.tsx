import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Trow } from '../index';
import { CatalogItemDataType } from '../../../../types/customType';

const Tbody = () => {
  const { recipeCatalogData } = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );
  const { searchData, searchFieldActive } = useSelector(
    (state: RootState) => state.searchSlice
  );

  // отображаемые данные
  const displayedData = React.useMemo(
    () => (searchFieldActive ? searchData : recipeCatalogData),
    [recipeCatalogData, searchData, searchFieldActive]
  );

  return (
    <tbody>
      {displayedData.map((item: CatalogItemDataType, index: number) => (
        <Trow key={item.id} item={item} dishNumber={index + 1} />
      ))}
    </tbody>
  );
};

Tbody.displayName = 'Tbody';
export default Tbody;
