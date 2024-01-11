import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {
  setModalActive,
  setModalEditingActive,
  //
  setColor,
  setTitle,
  setRecipe,
  setCookingTime,
} from '../../../../redux/slices/modalFormSlice';
import { setRecipeCatalogData } from '../../../../redux/slices/recipeCatalogSlice';

import { FormTitle } from '../../titles';
import { ButtonForm } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
import {
  saveDatasetToLocalStorage,
  generateId,
  getTheCurrentDate,
} from '../../../../utils/modules';

import styles from './ModalForm.module.css';
import { CatalogItemDataType } from '../../../../types/customType';

const ModalForm = () => {
  const {
    modalActive,
    modalEditingActive,
    //
    dataItem,
  } = useSelector((state: RootState) => state.modalFormSlice);
  const dispatch = useDispatch();

  // функция, определить имя заголовка
  const defineTitleName = React.useMemo((): string => {
    let str = '';
    if (modalActive) {
      str = 'Создание записи';
    } else if (modalEditingActive) {
      str = 'Редактирование записи';
    }
    return str;
  }, [modalActive, modalEditingActive]);

  // функция, обновить данные каталога
  const updateCatalogData = React.useCallback(
    (newData: CatalogItemDataType[]) => {
      // сохраняем массив с данными в localStorage
      saveDatasetToLocalStorage('catalogRecipeDataset', newData);
      // сохраняем массив с данными в store (redux toolkit)
      dispatch(setRecipeCatalogData(newData));
    },
    [dispatch]
  );

  // функция, обработать закрытие модального окна формы
  const handleCloseModalWindowForm = React.useCallback(() => {
    // изменяем флаг true на false
    if (modalActive) {
      dispatch(setModalActive(false));
    } else if (modalEditingActive) {
      dispatch(setModalEditingActive(false));
    }
    // очищаем значение полей формы
    dispatch(setColor('#000000'));
    dispatch(setCookingTime(''));
    dispatch(setTitle(''));
    dispatch(setRecipe(''));
  }, [dispatch, modalActive, modalEditingActive]);

  // функция, обработать добавление записи
  const handleAddEntries = React.useCallback(
    (
      event:
        | React.FormEvent<HTMLFormElement>
        | React.MouseEvent<HTMLButtonElement>
    ) => {
      // отменяет действие по умолчанию
      event.preventDefault();
      // формируем объект с данными каталога
      const objCatalogData: CatalogItemDataType = {
        id: generateId(),
        color: dataItem.color,
        date: getTheCurrentDate(),
        title: dataItem.title.trim(),
        recipe: dataItem.recipe.trim(),
        cookingTime: dataItem.cookingTime,
      };
      // набор данных LocalStorage
      const datasetLocalStorage: string | null = window.localStorage.getItem(
        'catalogRecipeDataset'
      );

      if (datasetLocalStorage === null) {
        // ___Первая запись
        // добавляем объект в массив данных
        const newCatalogData = [objCatalogData];
        // обновляем данные каталога
        updateCatalogData(newCatalogData);
      } else {
        // ___Очередная запись
        // преобразуем строку JSON в объект
        const arrDataLocalStorage = JSON.parse(datasetLocalStorage);
        // обновляем массив с данными
        const newCatalogData = [objCatalogData, ...arrDataLocalStorage];
        // обновляем данные каталога
        updateCatalogData(newCatalogData);
      }
      // закрываем модальное окно с формой
      handleCloseModalWindowForm();
    },

    [
      dataItem.color,
      dataItem.title,
      dataItem.recipe,
      dataItem.cookingTime,
      handleCloseModalWindowForm,
      updateCatalogData,
    ]
  );

  // функция, обработать сохранение редактируемой записи
  const handleSaveEditingEntries = React.useCallback(
    (
      event:
        | React.FormEvent<HTMLFormElement>
        | React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
      const objCatalogData: CatalogItemDataType = {
        id: generateId(),
        color: dataItem.color,
        date: getTheCurrentDate(),
        title: dataItem.title.trim(),
        recipe: dataItem.recipe.trim(),
        cookingTime: dataItem.cookingTime,
      };

      const datasetLocalStorage: string | null = window.localStorage.getItem(
        'catalogRecipeDataset'
      );
      if (datasetLocalStorage !== null) {
        const arrDataLocalStorage = JSON.parse(datasetLocalStorage);

        // Создаем новый массив, заменяя объект с нужным идентификатором
        const newCatalogData = arrDataLocalStorage.map(
          (item: CatalogItemDataType) => {
            if (item.id === dataItem.id) {
              return objCatalogData;
            }
            return item;
          }
        );
        // обновляем данные каталога
        updateCatalogData(newCatalogData);
      }
      // закрываем модальное окно с формой
      handleCloseModalWindowForm();
    },
    [
      dataItem.color,
      dataItem.title,
      dataItem.recipe,
      dataItem.cookingTime,
      dataItem.id,
      handleCloseModalWindowForm,
      updateCatalogData,
    ]
  );

  // функция, обработать удаление записи
  const handleRemoveEntries = React.useCallback(() => {
    // набор данных LocalStorage
    const datasetLocalStorage: string | null = window.localStorage.getItem(
      'catalogRecipeDataset'
    );
    if (datasetLocalStorage !== null) {
      // преобразуем строку JSON в объект
      const arrDataLocalStorage = JSON.parse(datasetLocalStorage);
      // удаляем задачу из списка, обновляем массив с данными
      const newCatalogData = arrDataLocalStorage.filter(
        (item: CatalogItemDataType) => item.id !== dataItem.id
      );
      // обновляем данные каталога
      updateCatalogData(newCatalogData);
    }
    // закрываем модальное окно с формой
    handleCloseModalWindowForm();
  }, [handleCloseModalWindowForm, updateCatalogData, dataItem.id]);

  return (
    <div
      className={`${styles.wrapper} ${
        modalActive === false && modalEditingActive === false ? styles.dn : ''
      }`}
    >
      <form
        className={styles.formFill}
        onSubmit={
          modalActive
            ? handleAddEntries
            : modalEditingActive
            ? handleSaveEditingEntries
            : undefined
        }
      >
        <FormTitle textTitle={defineTitleName} />
        <div className={styles.container}>
          {/* Ввод персонального цвет */}
          <InputField
            signature='Персональный цвет'
            signatureNameStyles='personalColor'
            name='personalColor'
            type='color'
            id='personalColor'
            //
            onChange={(e) => dispatch(setColor(e.target.value))}
            value={dataItem.color}
          />
          {/* Ввод времени приготовления блюда */}
          <InputField
            signature='Время приготовления блюда'
            signatureNameStyles='cookingTime'
            name='cookingTime'
            type='time'
            id='cookingTime'
            //
            onChange={(e) => dispatch(setCookingTime(e.target.value))}
            value={dataItem.cookingTime}
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
            onChange={(e) => dispatch(setTitle(e.target.value))}
            value={dataItem.title}
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
          onChange={(e) => dispatch(setRecipe(e.target.value))}
          value={dataItem.recipe}
        />
        {/* Группа кнопок */}
        <div className={styles.buttonsGroup}>
          {/* Кнопки для модального окна при создании записи */}
          {modalActive && (
            <>
              <ButtonForm nameBtn='Добавить' nameType='submit' />
              <ButtonForm
                nameBtn='Закрыть'
                nameType='reset'
                onClick={handleCloseModalWindowForm}
              />
            </>
          )}
          {/* Кнопки для модального окна при редактировании записи */}
          {modalEditingActive && (
            <>
              <ButtonForm nameBtn='Сохранить' nameType='submit' />
              <ButtonForm
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
};

ModalForm.displayName = 'ModalForm';
export default ModalForm;
