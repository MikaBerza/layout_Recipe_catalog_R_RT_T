import React from 'react';
import { useDispatch } from 'react-redux';
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
import styles from './Trow.module.css';
import { CatalogItemDataType } from '../../../../types/customType';

const Trow = React.memo(
  ({ item, dishNumber }: { item: CatalogItemDataType; dishNumber: number }) => {
    const dispatch = useDispatch();

    // функция, сгенерировать рецепты блюд
    const generateRecipesForDishes = (str: string) =>
      splitSentenceWithLineBreak(str).map((elem, index) => (
        <p key={index}>{elem}</p>
      ));

    // функция, открыть модальное окно
    const openModalWindow = (obj: CatalogItemDataType, editing: boolean) => {
      dispatch(setModalEditingActive(editing));
      dispatch(setModalDataActive(!editing));
      //
      dispatch(setId(obj.id));
      dispatch(setColor(obj.color));
      dispatch(setDate(obj.date));
      dispatch(setTitle(obj.title));
      dispatch(setRecipe(obj.recipe));
      dispatch(setCookingTime(obj.cookingTime));
    };

    return (
      <tr className={styles.wrapper}>
        <td>{dishNumber}</td>
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
            onClick={() => openModalWindow(item, false)}
          />
        </td>
        <td>
          <ButtonControlCatalogEntry
            nameBtn='Редактировать'
            onClick={() => openModalWindow(item, true)}
          />
        </td>
      </tr>
    );
  }
);

Trow.displayName = 'Trow';
export default Trow;
