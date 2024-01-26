import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setModalEditingActive,
  setModalDataActive,
  setId,
  setColor,
  setDate,
  setTitle,
  setRecipe,
  setCookingTime,
} from '../../../../redux/slices/modalFormSlice';
import { ButtonControlCatalogEntry } from '../../buttons';
import { Recipe } from '../../Recipe';
import styles from './Trow.module.css';
import { CatalogItemDataType } from '../../../../types/customType';

const Trow = React.memo(
  ({ item, dishNumber }: { item: CatalogItemDataType; dishNumber: string }) => {
    const dispatch = useDispatch();

    // функция, получить данные элемента
    const getItemData = (obj: CatalogItemDataType) => {
      dispatch(setId(obj.id));
      dispatch(setColor(obj.color));
      dispatch(setDate(obj.date));
      dispatch(setTitle(obj.title));
      dispatch(setRecipe(obj.recipe));
      dispatch(setCookingTime(obj.cookingTime));
    };

    // функция, открыть модальное окно
    const openModalWindow = (obj: CatalogItemDataType, editing: boolean) => {
      getItemData(obj);
      dispatch(setModalEditingActive(editing));
      dispatch(setModalDataActive(!editing));
    };

    return (
      <tr className={styles.wrapper}>
        <td>{dishNumber}</td>
        <td>
          <span style={{ backgroundColor: `${item.color}` }} />
        </td>
        <td>{item.date}</td>
        <td>{item.title}</td>
        <td>
          <Recipe str={item.recipe} />
        </td>
        <td>{item.cookingTime}ч</td>

        <td>
          <ButtonControlCatalogEntry
            nameBtn='Подробнее'
            link={
              '/layout_Recipe_catalog_R_RT_T/recipe-catalog-page/recipe-card-page/' +
              dishNumber
            }
            onClick={() => getItemData(item)}
          />
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
