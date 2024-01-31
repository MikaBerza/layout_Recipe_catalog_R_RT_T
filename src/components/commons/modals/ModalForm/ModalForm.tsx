import React from 'react';
import { useAppDispatch } from '../../../../redux/hooks';
import {
  fetchAddEntries,
  fetchEditingEntries,
  fetchRemoveEntries,
  setSearchValue,
} from '../../../../redux/slices/recipeCatalogSlice';
import { FormTitle } from '../../titles';
import { ButtonModal } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
import { generateId, getTheCurrentDate } from '../../../../utils/modules';
import styles from './ModalForm.module.css';
import {
  CatalogItemDataType,
  ModalFormPropsType,
} from '../../../../types/customType';

const ModalForm = React.memo(
  ({
    modalName,
    modalFormActive,
    setModalFormActive,
    catalogItemData,
  }: ModalFormPropsType) => {
    const dispatch = useAppDispatch();
    const [color, setColor] = React.useState(catalogItemData.color);
    const [title, setTitle] = React.useState(catalogItemData.title);
    const [recipe, setRecipe] = React.useState(catalogItemData.recipe);
    const [cookingTime, setCookingTime] = React.useState(
      catalogItemData.cookingTime
    );

    // функция, обработать закрытие модального окна
    const handleCloseModalWindow = React.useCallback(() => {
      setModalFormActive(false);
      dispatch(setSearchValue(''));
    }, [dispatch, setModalFormActive]);

    // функция, обработать добавление записи
    const handleAddEntries = React.useCallback(
      (
        event:
          | React.FormEvent<HTMLFormElement>
          | React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();
        // формируем объект с данными каталога
        const objCatalogData: CatalogItemDataType = {
          id: generateId(),
          color: color,
          date: getTheCurrentDate(),
          title: title,
          recipe: recipe.trim(),
          cookingTime: cookingTime,
        };

        dispatch(fetchAddEntries(objCatalogData));
        handleCloseModalWindow();
      },
      [color, title, recipe, cookingTime, dispatch, handleCloseModalWindow]
    );

    // функция, обработать редактирование записи
    const handleEntriesEditing = React.useCallback(
      (
        event:
          | React.FormEvent<HTMLFormElement>
          | React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();
        // формируем объект с данными каталога
        const objCatalogData: CatalogItemDataType = {
          id: catalogItemData.id,
          color: color,
          date: getTheCurrentDate(),
          title: title,
          recipe: recipe.trim(),
          cookingTime: cookingTime,
        };

        dispatch(
          fetchEditingEntries({
            newDataItem: objCatalogData,
            id: catalogItemData.id,
          })
        );
        handleCloseModalWindow();
      },
      [
        catalogItemData.id,
        color,
        title,
        recipe,
        cookingTime,
        handleCloseModalWindow,
        dispatch,
      ]
    );

    // функция, обработать удаление записи
    const handleRemoveEntries = React.useCallback(() => {
      dispatch(fetchRemoveEntries(catalogItemData.id));
      handleCloseModalWindow();
    }, [handleCloseModalWindow, catalogItemData.id, dispatch]);

    return (
      <div className={`${styles.wrapper} ${modalFormActive ? '' : styles.dn}`}>
        <form
          className={styles.formFill}
          onSubmit={
            modalName === 'Создание записи'
              ? handleAddEntries
              : modalName === 'Редактирование записи'
              ? handleEntriesEditing
              : undefined
          }
        >
          <FormTitle textTitle={modalName} />
          <div className={styles.container}>
            {/* Ввод персонального цвет */}
            <InputField
              signature='Персональный цвет'
              signatureNameStyles='personalColor'
              name='personalColor'
              type='color'
              id='personalColor'
              //
              onChange={(e) => setColor(e.target.value)}
              value={color}
            />
            {/* Ввод времени приготовления блюда */}
            <InputField
              signature='Время приготовления блюда'
              signatureNameStyles='cookingTime'
              name='cookingTime'
              type='time'
              id='cookingTime'
              //
              onChange={(e) => setCookingTime(e.target.value)}
              value={cookingTime}
            />
            {/* Ввод названия блюда */}
            <InputField
              signature='Название блюда'
              signatureNameStyles='nameDish'
              name='nameDish'
              type='text'
              id='nameDish'
              placeholder='Введите название блюда'
              pattern='^[а-яА-Яa-zA-Z\d\s]+$'
              validationHintText='Только цифры, буквы русского и английского алфавита'
              //
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          {/* Ввод рецепта блюда */}
          <TextareaField
            signature='Рецепт блюда'
            signatureNameStyles='recipe'
            name='recipe'
            id='recipe'
            placeholder='Напишите рецепт блюда'
            maxLength={2300}
            //
            onChange={(e) => setRecipe(e.target.value)}
            value={recipe}
          />
          {/* Группа кнопок */}
          <div className={styles.buttonsGroup}>
            {/* Кнопки для модального окна при создании записи */}
            {modalName === 'Создание записи' && (
              <>
                <ButtonModal nameBtn='Добавить' nameType='submit' />
                <ButtonModal
                  nameBtn='Закрыть'
                  nameType='reset'
                  onClick={handleCloseModalWindow}
                />
              </>
            )}
            {/* Кнопки для модального окна при редактировании записи */}
            {modalName === 'Редактирование записи' && (
              <>
                <ButtonModal nameBtn='Сохранить' nameType='submit' />
                <ButtonModal
                  nameBtn='Удалить'
                  nameType='reset'
                  onClick={handleRemoveEntries}
                />
              </>
            )}
          </div>
        </form>
      </div>
    );
  }
);

ModalForm.displayName = 'ModalForm';
export default ModalForm;
