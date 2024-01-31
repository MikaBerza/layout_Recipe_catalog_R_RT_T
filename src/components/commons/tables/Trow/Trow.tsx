import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setId,
  setColor,
  setDate,
  setTitle,
  setRecipe,
  setCookingTime,
} from '../../../../redux/slices/modalFormSlice';
import { ButtonControlCatalogEntry } from '../../buttons';
import { Recipe } from '../../Recipe';
import { ModalData, ModalForm } from '../../modals';
import styles from './Trow.module.css';
import { CatalogItemDataType } from '../../../../types/customType';

const Trow = React.memo(
  ({ item, dishNumber }: { item: CatalogItemDataType; dishNumber: string }) => {
    const [modalDataActive, setModalDataActive] = React.useState(false);
    const [modalFormActive, setModalFormActive] = React.useState(false);
    const dispatch = useDispatch();
    const { id, color, date, title, recipe, cookingTime } = React.useMemo(
      () => item,
      [item]
    );

    // функция, получить данные элемента
    const getItemData = React.useCallback(() => {
      dispatch(setId(id));
      dispatch(setColor(color));
      dispatch(setDate(date));
      dispatch(setTitle(title));
      dispatch(setRecipe(recipe));
      dispatch(setCookingTime(cookingTime));
    }, [id, color, date, title, recipe, cookingTime, dispatch]);

    // функция, открыть модальное окно
    const openModalWindow = React.useCallback((name: string) => {
      if (name === 'Просмотр') {
        setModalDataActive(true);
      } else if (name === 'Редактировать') {
        setModalFormActive(true);
      }
    }, []);

    return (
      <tr className={styles.wrapper}>
        <td>{dishNumber}</td>
        <td>
          <span
            className={styles.tdColor}
            style={{ backgroundColor: `${color}` }}
          />
        </td>
        <td>{date}</td>
        <td>{title}</td>
        <td>
          <Recipe str={recipe} />
        </td>
        <td>{cookingTime}ч</td>

        <td>
          <ButtonControlCatalogEntry
            nameBtn='Подробнее'
            link={`/layout_Recipe_catalog_R_RT_T/recipe-catalog-page/recipe-card-page/${dishNumber}`}
            onClick={getItemData}
          />
        </td>
        <td>
          <ButtonControlCatalogEntry
            nameBtn='Просмотр'
            onClick={() => openModalWindow('Просмотр')}
          />
          {modalDataActive && (
            <ModalData
              modalDataActive={modalDataActive}
              setModalDataActive={setModalDataActive}
              catalogItemData={item}
            />
          )}
        </td>
        <td>
          <ButtonControlCatalogEntry
            nameBtn='Редактировать'
            onClick={() => openModalWindow('Редактировать')}
          />
          {modalFormActive && (
            <ModalForm
              modalName='Редактирование записи'
              modalFormActive={modalFormActive}
              setModalFormActive={setModalFormActive}
              catalogItemData={item}
            />
          )}
        </td>
      </tr>
    );
  }
);

Trow.displayName = 'Trow';
export default Trow;
