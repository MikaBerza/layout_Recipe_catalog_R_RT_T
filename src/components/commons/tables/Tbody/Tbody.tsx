import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {
  setModalEditingActive,
  setModalDataActive,
  //
  setId,
  setColor,
  setDate,
  setTitle,
  setRecipe,
  setCookingTime,
} from '../../../../redux/slices/modalFormSlice';

import { ButtonControlCatalogEntry } from '../../buttons';

import { splitSentenceWithLineBreak } from '../../../../utils/modules';
import styles from './Tbody.module.css';
import { CatalogItemDataType } from '../../../../types/customType';

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

  // функция, установить значения
  const setValues = (obj: CatalogItemDataType) => {
    // установим значения
    dispatch(setId(obj.id));
    dispatch(setColor(obj.color));
    dispatch(setDate(obj.date));
    dispatch(setTitle(obj.title));
    dispatch(setRecipe(obj.recipe));
    dispatch(setCookingTime(obj.cookingTime));
  };

  // функция, открыть модальное окно для редактирования записи
  const openModalWindowToEditingEntries = (obj: CatalogItemDataType) => {
    dispatch(setModalEditingActive(true));
    setValues(obj);
  };

  // функция, открыть модальное окно для просмотра записи
  const openModalWindowToViewingEntries = (obj: CatalogItemDataType) => {
    dispatch(setModalDataActive(true));
    setValues(obj);
  };

  return (
    <tbody className={styles.wrapper}>
      {recipeCatalogData.map((item: CatalogItemDataType, index: number) => {
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
                onClick={() => openModalWindowToViewingEntries(item)}
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
