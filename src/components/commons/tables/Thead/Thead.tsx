import React from 'react';
import { useAppSelector } from '../../../../redux/hooks';
import { RootState } from '../../../../redux/store';
import { Icon } from '../../Icon';
import { ButtonCreateEntry } from '../../buttons';
import { ModalForm } from '../../modals';
import { theadData } from '../../../../utils/listsOfData';
import { TheadDataType } from '../../../../types/customType';
import styles from './Thead.module.css';

const Thead = () => {
  const recipeCatalogData = useAppSelector(
    (state: RootState) => state.recipeCatalogDataSlice.recipeCatalogData
  );
  const [modalFormActive, setModalFormActive] = React.useState(false);
  const [newCatalogItemData] = React.useState({
    id: '',
    color: '#000000',
    date: '',
    title: '',
    recipe: '',
    cookingTime: '',
  });

  // функция, сгенерировать ячейки заголовка со значком
  const generateHeaderCellWithIcon = (
    item: TheadDataType
  ): React.JSX.Element => {
    return (
      <th
        key={item.id}
        className={recipeCatalogData.length === 0 ? styles.dn : ''}
      >
        <Icon patch={item.patch} tooltip={item.tooltip} />
      </th>
    );
  };

  return (
    <thead className={styles.wrapper}>
      <tr>
        {theadData.map(generateHeaderCellWithIcon)}
        <th colSpan={3}>
          <ButtonCreateEntry
            nameBtn='Создать запись'
            onClick={() => setModalFormActive(true)}
          />
          {modalFormActive && (
            <ModalForm
              modalName='Создание записи'
              modalFormActive={modalFormActive}
              setModalFormActive={setModalFormActive}
              catalogItemData={newCatalogItemData}
            />
          )}
        </th>
      </tr>
    </thead>
  );
};

Thead.displayName = 'Thead';
export default Thead;
