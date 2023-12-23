import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalActive } from '../../../../redux/slices/modalFormSlice';

import { ButtonForm } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
// import { generateId, getTheCurrentDate } from '../../../../utils/modules';
import styles from './ModalForm.module.css';

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

  //   // создадим объект с данными для добавления
  //   const objData = {
  //     id: generateId(),
  //     color: formData.personalColor,
  //     date: getTheCurrentDate(),
  //     title: formData.nameDish,
  //     recipe: formData.recipe,
  //     cookingTime: formData.cookingTime,
  //   };

  // функция, обработать нажатие кнопки добавить форму
  const handleClickOfTheAddFormButton = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    /* 
    __оператор (as) используется для приведения типа. Он говорит компилятору TS 
      принять тип EventTarget свойства target как тип HTMLFormElement
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
      // 1_очищаем значение полей формы
      event.currentTarget.reset();
      // 2_закрываем фому
      closeModalWindowToCreateEntry();
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
