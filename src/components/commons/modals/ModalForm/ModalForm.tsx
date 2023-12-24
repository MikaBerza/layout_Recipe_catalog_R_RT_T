import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalActive } from '../../../../redux/slices/modalFormSlice';

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
    (state: { modalFormSlice: { modalActive: boolean } }) =>
      state.modalFormSlice
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = React.useState({
    color: '#000000',
    nameDish: '',
    recipe: '',
    cookingTime: '',
  });

  // функция, обработать изменения ввода и текстового поля
  const handleInputAndTextareaChanges = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // функция, закрыть модальное окно создания записи
  const closeModalWindowCreateEntry = () => {
    // изменяем флаг true на false
    dispatch(setModalActive(false));
    // очищаем значение полей формы
    setFormData({
      color: '#000000',
      nameDish: '',
      recipe: '',
      cookingTime: '',
    });
  };

  // функция, обработать нажатие кнопки добавить форму
  const handleClickOfTheAddFormButton = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    // отменяет действие по умолчанию
    event.preventDefault();
    // формируем объект с данными каталога
    const objCatalogData: CatalogDataType = {
      id: generateId(),
      color: formData.color,
      date: getTheCurrentDate(),
      title: formData.nameDish.trim(),
      recipe: formData.recipe.trim(),
      cookingTime: formData.cookingTime,
    };
    // набор данных LocalStorage
    const datasetLocalStorage: string | null = window.localStorage.getItem(
      'catalogRecipeDataset'
    );

    if (datasetLocalStorage === null) {
      // добавляем объект в массив данных
      const newCatalogData = [objCatalogData];
      // сохраняем массив с данными в localStorage
      saveDatasetToLocalStorage('catalogRecipeDataset', newCatalogData);
      console.log('Первая запись');
    } else {
      // преобразуем строку JSON в объект
      const arrDataLocalStorage = JSON.parse(datasetLocalStorage);
      // обновляем массив с данными
      const updateCatalogData = [objCatalogData, ...arrDataLocalStorage];
      // сохраняем массив с данными в localStorage
      saveDatasetToLocalStorage('catalogRecipeDataset', updateCatalogData);
    }
    // закрываем фому
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
            onChange={handleInputAndTextareaChanges}
            value={formData.color}
          />
          {/* Ввод времени приготовления блюда */}
          <InputField
            signature='Время приготовления блюда'
            signatureNameStyles='cookingTime'
            name='cookingTime'
            type='time'
            id='cookingTime'
            //
            onChange={handleInputAndTextareaChanges}
            value={formData.cookingTime}
          />

          {/* Ввод названия блюда */}
          <InputField
            signature='Название блюда'
            signatureNameStyles='nameDish'
            name='nameDish'
            type='text'
            id='nameDish'
            placeholder='Введите название блюда'
            pattern='^[а-яА-Яa-zA-Z]+$'
            validationHintText='Только буквы русского и английского алфавита'
            //
            onChange={handleInputAndTextareaChanges}
            value={formData.nameDish}
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
          onChange={handleInputAndTextareaChanges}
          value={formData.recipe}
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
