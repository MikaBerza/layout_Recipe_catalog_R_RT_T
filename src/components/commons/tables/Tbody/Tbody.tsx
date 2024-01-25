import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Trow } from '../index';
import { CatalogItemDataType } from '../../../../types/customType';

const Tbody = () => {
  const { recipeCatalogData, searchData, searchFlag } =
    useSelector((state: RootState) => state.recipeCatalogDataSlice);

  // отображаемые данные
  const displayedData = React.useMemo(
    () => (searchFlag ? searchData : recipeCatalogData),
    [recipeCatalogData, searchData, searchFlag]
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
