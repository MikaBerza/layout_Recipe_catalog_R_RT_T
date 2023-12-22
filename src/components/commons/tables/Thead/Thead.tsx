import { Icon } from '../../Icon';
import { ButtonCreateEntry } from '../../buttons';

import { theadData } from '../../../../utils/listsOfData';
import { TheadDataDataType } from '../../../../types/customType';
import styles from './Thead.module.css';

const Thead = () => {
  // функция, сгенерировать ячейки заголовка со значком
  const generateHeaderCellWithIcon = (
    item: TheadDataDataType
  ): React.JSX.Element => {
    return (
      <th key={item.id}>
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
