import { ButtonForm } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
import styles from './ModalCreate.module.css';

const ModalCreate = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.formFill} action='#'>
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
            signatureNameStyles='nameOfTheDish'
            name='nameOfTheDish'
            type='text'
            id='nameOfTheDish'
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
          <ButtonForm nameBtn='Добавить' nameStyles='add' />
          <ButtonForm nameBtn='Выйти' nameStyles='exit' />
        </div>
      </form>
    </div>
  );
};

ModalCreate.displayName = 'ModalCreate';
export default ModalCreate;
