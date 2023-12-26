import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {
  setModalActive,
  setModalEditingActive,
  //
  setFormDataColor,
  setFormDataNameDish,
  setFormDataRecipe,
  setFormDataCookingTime,
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
import { CatalogDataType } from '../../../../types/customType';

const ModalForm = () => {
  const {
    modalActive,
    modalEditingActive,
    //
    formDataColor,
    formDataNameDish,
    formDataRecipe,
    formDataCookingTime,
  } = useSelector((state: RootState) => state.modalFormSlice);

  const dispatch = useDispatch();

  // функция, определить имя заголовка
  const defineTitleName = React.useCallback((): string => {
    let str = '';
    if (modalActive) {
      str = 'Создание записи';
    } else if (modalEditingActive) {
      str = 'Редактирование записи';
    }
    return str;
  }, [modalActive, modalEditingActive]);

  // функция, закрыть модальное окно формы
  const closeModalWindowForm = React.useCallback(() => {
    // изменяем флаг true на false
    if (modalActive) {
      dispatch(setModalActive(false));
    } else if (modalEditingActive) {
      dispatch(setModalEditingActive(false));
    }
    // очищаем значение полей формы
    dispatch(setFormDataColor('#000000'));
    dispatch(setFormDataNameDish(''));
    dispatch(setFormDataRecipe(''));
    dispatch(setFormDataCookingTime(''));
  }, [dispatch, modalActive, modalEditingActive]);

  // функция, обработать нажатие кнопки добавить форму
  const handleClickOfTheAddFormButton = (
    event:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement>
  ) => {
    // отменяет действие по умолчанию
    event.preventDefault();
    // формируем объект с данными каталога
    const objCatalogData: CatalogDataType = {
      id: generateId(),
      color: formDataColor,
      date: getTheCurrentDate(),
      title: formDataNameDish.trim(),
      recipe: formDataRecipe.trim(),
      cookingTime: formDataCookingTime,
    };
    // набор данных LocalStorage
    const datasetLocalStorage: string | null = window.localStorage.getItem(
      'catalogRecipeDataset'
    );

    if (datasetLocalStorage === null) {
      // ___Первая запись
      // добавляем объект в массив данных
      const newCatalogData = [objCatalogData];
      // сохраняем массив с данными в localStorage
      saveDatasetToLocalStorage('catalogRecipeDataset', newCatalogData);
      // сохраняем массив с данными в store (redux toolkit)
      dispatch(setRecipeCatalogData(newCatalogData));
    } else {
      // ___Очередная запись
      // преобразуем строку JSON в объект
      const arrDataLocalStorage = JSON.parse(datasetLocalStorage);
      // обновляем массив с данными
      const updateCatalogData = [objCatalogData, ...arrDataLocalStorage];
      // сохраняем массив с данными в localStorage
      saveDatasetToLocalStorage('catalogRecipeDataset', updateCatalogData);
      // сохраняем массив с данными в store (redux toolkit)
      dispatch(setRecipeCatalogData(updateCatalogData));
    }
    // закрываем модальное окно с формой
    closeModalWindowForm();
  };

  // функция, удалить запись
  const removeEntry = () => {
    // набор данных LocalStorage
    // const datasetLocalStorage: string | null = window.localStorage.getItem(
    //   'catalogRecipeDataset'
    // );
    console.log('удалить запись');
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.formFill}>
        <FormTitle textTitle={defineTitleName()} />
        <div className={styles.container}>
          {/* Ввод персонального цвет */}
          <InputField
            signature='Персональный цвет'
            signatureNameStyles='personalColor'
            name='personalColor'
            type='color'
            id='personalColor'
            //
            onChange={(e) => dispatch(setFormDataColor(e.target.value))}
            value={formDataColor}
          />
          {/* Ввод времени приготовления блюда */}
          <InputField
            signature='Время приготовления блюда'
            signatureNameStyles='cookingTime'
            name='cookingTime'
            type='time'
            id='cookingTime'
            //
            onChange={(e) => dispatch(setFormDataCookingTime(e.target.value))}
            value={formDataCookingTime}
          />
          {/* Ввод названия блюда */}
          <InputField
            signature='Название блюда'
            signatureNameStyles='nameDish'
            name='nameDish'
            type='text'
            id='nameDish'
            placeholder='Введите название блюда'
            pattern='^[а-яА-Яa-zA-Z\s]+$'
            validationHintText='Только буквы русского и английского алфавита'
            //
            onChange={(e) => dispatch(setFormDataNameDish(e.target.value))}
            value={formDataNameDish}
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
          onChange={(e) => dispatch(setFormDataRecipe(e.target.value))}
          value={formDataRecipe}
        />
        {/* Группа кнопок */}
        <div className={styles.buttonsGroup}>
          {/* Кнопки для модального окна при создании записи */}
          {modalActive && (
            <>
              <ButtonForm
                nameBtn='Добавить'
                nameType='submit'
                onClick={handleClickOfTheAddFormButton}
              />
              <ButtonForm
                nameBtn='Закрыть'
                nameType='reset'
                onClick={closeModalWindowForm}
              />
            </>
          )}
          {/* Кнопки для модального окна при редактировании записи */}
          {modalEditingActive && (
            <>
              <ButtonForm
                nameBtn='Сохранить'
                nameType='submit'
                onClick={handleClickOfTheAddFormButton}
              />
              <ButtonForm
                nameBtn='Удалить'
                nameType='reset'
                onClick={removeEntry}
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
