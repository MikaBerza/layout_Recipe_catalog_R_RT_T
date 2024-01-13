import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Trow } from '../index';
import { searchForTitle } from '../../../../utils/modules';
import { CatalogItemDataType } from '../../../../types/customType';

const Tbody = () => {
  const { recipeCatalogData } = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );
  const { searchValue, searchFlag } = useSelector(
    (state: RootState) => state.searchSlice
  );

  // отображаемые данные
  const displayedData = React.useMemo(
    () =>
      searchFlag
        ? searchForTitle(recipeCatalogData, searchValue)
        : recipeCatalogData,
    [recipeCatalogData, searchFlag, searchValue]
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
