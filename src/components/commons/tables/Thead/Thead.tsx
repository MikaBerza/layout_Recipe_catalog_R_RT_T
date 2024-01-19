import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Icon } from '../../Icon';
import { ButtonCreateEntry } from '../../buttons';

import { theadData } from '../../../../utils/listsOfData';
import { TheadDataType } from '../../../../types/customType';
import styles from './Thead.module.css';

const Thead = () => {
  const recipeCatalogData = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice.recipeCatalogData
  );

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
          <ButtonCreateEntry name='Создать запись' />
        </th>
      </tr>
    </thead>
  );
};

Thead.displayName = 'Thead';
export default Thead;
