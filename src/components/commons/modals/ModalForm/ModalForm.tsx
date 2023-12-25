import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setModalActive } from '../../../../redux/slices/modalFormSlice';
import { setRecipeCatalogData } from '../../../../redux/slices/recipeCatalogSlice';

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
  const { modalActive } = useSelector(
    (state: RootState) => state.modalFormSlice
  );
  const dispatch = useDispatch();

  const [formDataColor, setFormDataColor] = React.useState('#000000');
  const [formDataNameDish, setFormDataNameDish] = React.useState('');
  const [formDataRecipe, setFormDataRecipe] = React.useState('');
  const [formDataCookingTime, setFormDataCookingTime] = React.useState('');

  // функция, закрыть модальное окно создания записи
  const closeModalWindowCreateEntry = React.useCallback(() => {
    // изменяем флаг true на false
    dispatch(setModalActive(false));
    // очищаем значение полей формы
    setFormDataColor('#000000');
    setFormDataNameDish('');
    setFormDataRecipe('');
    setFormDataCookingTime('');
  }, [dispatch]);

  // функция, обработать нажатие кнопки добавить форму
  const handleClickOfTheAddFormButton = (
    event: React.FormEvent<HTMLFormElement>
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
    closeModalWindowCreateEntry();
  };

  return (
    <div className={`${styles.wrapper} ${!modalActive && styles.dn}`}>
      <form
        className={styles.formFill}
        onSubmit={handleClickOfTheAddFormButton}
      >
        <div className={styles.container}>
          {/* Ввод персонального цвет */}
          <InputField
            signature='Персональный цвет'
            signatureNameStyles='personalColor'
            name='personalColor'
            type='color'
            id='personalColor'
            //
            onChange={(e) => setFormDataColor(e.target.value)}
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
            onChange={(e) => setFormDataCookingTime(e.target.value)}
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
            onChange={(e) => setFormDataNameDish(e.target.value)}
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
          onChange={(e) => setFormDataRecipe(e.target.value)}
          value={formDataRecipe}
        />
        {/* Группа кнопок */}
        <div className={styles.buttonsGroup}>
          <ButtonForm nameBtn='Добавить' nameType='submit' />
          <ButtonForm
            nameBtn='Закрыть'
            nameType='reset'
            onClick={closeModalWindowCreateEntry}
          />
        </div>
      </form>
    </div>
  );
};

ModalForm.displayName = 'ModalForm';
export default ModalForm;
