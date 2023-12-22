import React from 'react';
import { useSelector } from 'react-redux';

import { ButtonFormAdd, ButtonFormClose } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
import styles from './ModalForm.module.css';

const ModalForm = () => {
  const { modalActive } = useSelector(
    (state: { modalCreateSlice: { modalActive: boolean } }) =>
      state.modalCreateSlice
  );
  const [formData, setFormData] = React.useState({
    personalColor: '',
    nameDish: '',
    recipe: '',
    cookingTime: '',
  });

  // функция, обработать ввод и изменения текстового поля
  const handleInputAndTextareaChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // функция, обработать нажатие кнопки добавить форму
  const handleClickOfTheAddFormButton = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    console.log(formData);
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
            onBlur={handleInputAndTextareaChange}
            signature='Персональный цвет'
            signatureNameStyles='personalColor'
            name='personalColor'
            type='color'
            id='personalColor'
            value='#e66465'
          />
          {/* Ввод времени приготовления блюда */}
          <InputField
            onBlur={handleInputAndTextareaChange}
            signature='Время приготовления блюда'
            signatureNameStyles='cookingTime'
            name='cookingTime'
            type='time'
            id='cookingTime'
          />

          {/* Ввод названия блюда */}
          <InputField
            onBlur={handleInputAndTextareaChange}
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
          onBlur={handleInputAndTextareaChange}
          signature='Рецепт блюда'
          signatureNameStyles='recipe'
          name='recipe'
          id='recipe'
          placeholder='Напишите рецепт блюда'
          maxLength={2300}
        />
        {/* Группа кнопок */}
        <div className={styles.buttonsGroup}>
          <ButtonFormAdd nameBtn='Добавить' />
          <ButtonFormClose nameBtn='Закрыть' />
        </div>
      </form>
    </div>
  );
};

ModalForm.displayName = 'ModalForm';
export default ModalForm;
