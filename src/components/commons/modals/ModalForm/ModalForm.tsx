import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalActive } from '../../../../redux/slices/modalFormSlice';

import { ButtonForm } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
import { generateId, getTheCurrentDate } from '../../../../utils/modules';
import styles from './ModalForm.module.css';
import { CatalogDataType } from '../../../../types/customType';

const ModalForm = () => {
  const { modalActive } = useSelector(
    (state: { modalFormSlice: { modalActive: boolean } }) =>
      state.modalFormSlice
  );
  const dispatch = useDispatch();

  // функция, закрыть модальное окно для создания записи
  const closeModalWindowToCreateEntry = () => {
    dispatch(setModalActive(false));
  };

  // функция, обработать нажатие кнопки добавить форму
  const handleClickOfTheAddFormButton = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    /* 
    __formData.entries() возвращает итератор, содержащий все пары ключ-значение из объекта FormData
    __Object.fromEntries() принимает массив пар ключ-значение и создает новый объект, где каждая пара становится свойством этого объекта
    */

    // отменяет действие по умолчанию
    event.preventDefault();
    // создадим объект, используя данные из HTML-формы
    const formData = new FormData(event.currentTarget);
    // преобразует объект formData в обычный JavaScript-объект
    const formJson = Object.fromEntries(formData.entries());

    // если все поля заполнены
    if (Object.values(formJson).length) {
      // формируем объект с данными
      const objCatalogData: CatalogDataType = {
        id: generateId(),
        color: formJson.personalColor.toString(),
        date: getTheCurrentDate(),
        title: formJson.nameDish.toString(),
        recipe: formJson.recipe.toString(),
        cookingTime: formJson.cookingTime.toString(),
      };

      if (window.localStorage.getItem('catalogRecipeDataset') === null) {
        // создадим пустой массив
        const arr: any = [];
        // добавим в пустой массив данные каталога
        arr.unshift(objCatalogData);
        // сохраняем массив c данными в localStorage
        localStorage.setItem('catalogRecipeDataset', JSON.stringify(arr));
        console.log('Первая запись');
      } else if (window.localStorage.getItem('catalogRecipeDataset') !== null) {
        // получим данные из localStorage
        const dataLocalStorage = window.localStorage.getItem(
          'catalogRecipeDataset'
        );

        if (dataLocalStorage !== null) {
          // создадим пустой массив
          let arr: any = [];
          // преобразуем строку JSON в объект
          const arrDataLocalStorage = JSON.parse(dataLocalStorage);
          // запишем данные в массив
          arr = [objCatalogData, ...arrDataLocalStorage];
          // сохраняем массив c данными в localStorage
          localStorage.setItem('catalogRecipeDataset', JSON.stringify(arr));
          console.log('Очередная запись');
        }
      }
      //____Последнее действие____!
      // очищаем значение полей формы
      // event.currentTarget.reset();
      // закрываем фому
      // closeModalWindowToCreateEntry();
    }
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
            value='#e66465'
          />
          {/* Ввод времени приготовления блюда */}
          <InputField
            signature='Время приготовления блюда'
            signatureNameStyles='cookingTime'
            name='cookingTime'
            type='time'
            id='cookingTime'
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
        />
        {/* Группа кнопок */}
        <div className={styles.buttonsGroup}>
          <ButtonForm nameBtn='Добавить' nameType='submit' />
          <ButtonForm
            nameBtn='Закрыть'
            nameType='reset'
            onClick={closeModalWindowToCreateEntry}
          />
        </div>
      </form>
    </div>
  );
};

ModalForm.displayName = 'ModalForm';
export default ModalForm;
