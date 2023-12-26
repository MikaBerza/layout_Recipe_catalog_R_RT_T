import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {
  setModalEditingActive,
  setElementId,
  setFormDataColor,
  setFormDataNameDish,
  setFormDataRecipe,
  setFormDataCookingTime,
} from '../../../../redux/slices/modalFormSlice';

import { ButtonControlCatalogEntry } from '../../buttons';

import {
  splitSentenceWithLineBreak,
  viewSavedCatalogItemData,
} from '../../../../utils/modules';
import styles from './Tbody.module.css';
import { CatalogDataType } from '../../../../types/customType';

const Tbody = () => {
  const dispatch = useDispatch();
  const recipeCatalogData = useSelector(
    (state: RootState) => state.recipeCatalogData.recipeCatalogData
  );

  // функция, сгенерировать рецепты блюд
  const generateRecipesForDishes = (str: string) => {
    return splitSentenceWithLineBreak(str).map((elem, index) => {
      return <p key={index}>{elem}</p>;
    });
  };

  // функция, открыть модальное окно для редактирования записи
  const openModalWindowToEditingEntries = (obj: CatalogDataType) => {
    dispatch(setModalEditingActive(true));
    // установи значение id элемента
    dispatch(setElementId(obj.id));
    // установим значения в input
    dispatch(setFormDataColor(obj.color));
    dispatch(setFormDataNameDish(obj.title));
    dispatch(setFormDataRecipe(obj.recipe));
    dispatch(setFormDataCookingTime(obj.cookingTime));
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
              <ButtonControlCatalogEntry
                nameBtn='Редактировать'
                onClick={() => openModalWindowToEditingEntries(item)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

Tbody.displayName = 'Tbody';
export default Tbody;
