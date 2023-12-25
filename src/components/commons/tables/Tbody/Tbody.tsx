import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { ButtonControlCatalogEntry } from '../../buttons';

import {
  splitSentenceWithLineBreak,
  viewSavedCatalogItemData,
} from '../../../../utils/modules';
import styles from './Tbody.module.css';
import { CatalogDataType } from '../../../../types/customType';

const Tbody = () => {
  const recipeCatalogData = useSelector(
    (state: RootState) => state.recipeCatalogData.recipeCatalogData
  );

  // функция, сгенерировать рецепты блюд
  const generateRecipesForDishes = (str: string) => {
    return splitSentenceWithLineBreak(str).map((elem, index) => {
      return <p key={index}>{elem}</p>;
    });
  };

  return (
    <tbody className={styles.wrapper}>
      {recipeCatalogData.map((item: CatalogDataType, index: number) => {
        return (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
              <span style={{ backgroundColor: `${item.color}` }} />
            </td>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td>{generateRecipesForDishes(item.recipe)}</td>
            <td>{item.cookingTime}ч</td>

            <td>
              <ButtonControlCatalogEntry nameBtn='Подробнее' />
            </td>
            <td>
              <ButtonControlCatalogEntry
                nameBtn='Просмотр'
                onClick={() => viewSavedCatalogItemData(item)}
              />
            </td>
            <td>
              <ButtonControlCatalogEntry nameBtn='Редактировать' />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

Tbody.displayName = 'Tbody';
export default Tbody;
