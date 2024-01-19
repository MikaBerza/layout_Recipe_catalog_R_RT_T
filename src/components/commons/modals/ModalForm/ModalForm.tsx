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

import { FormTitle } from '../../titles';
import { ButtonModal } from '../../buttons';
import { InputField, TextareaField } from '../../forms';
import {
  generateId,
  getTheCurrentDate,
  handleHttpRequest,
} from '../../../../utils/modules';

import styles from './ModalForm.module.css';
import { CatalogItemDataType } from '../../../../types/customType';

const ModalForm = () => {
  const { recipeCatalogData } = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );

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

  //__________________________________________________________

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
        color: dataItem.color,
        date: getTheCurrentDate(),
        title: dataItem.title.trim(),
        recipe: dataItem.recipe.trim(),
        cookingTime: dataItem.cookingTime,
      };

      const result = handleHttpRequest(null, dataItem, objCatalogData, 'POST');
      if (result !== null) {
        result
          .then((response) => {
            if (!response.ok) {
              // если ответ содержит ошибку, генерируется исключение с сообщением 'Ошибка сети: '
              throw new Error('Ошибка сети: ' + response.status);
            }
            return response.json();
          })
          .catch((error) => {
            // Обработка ошибки
            console.error('Произошла ошибка:', error);
            // Включаем заглушку
          })
          .finally(() => {
            // Действия в блоке finally
            console.log('finally');
          });
      }
      // закрываем модальное окно с формой
      handleCloseModalWindowForm();
    },
    [dataItem, handleCloseModalWindowForm]
  );

  // функция, обработать сохранение редактируемой записи
  const handleSaveEditingEntries = React.useCallback(
    (
      event:
        | React.FormEvent<HTMLFormElement>
        | React.MouseEvent<HTMLButtonElement>
    ) => {
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

      const result = handleHttpRequest(
        recipeCatalogData,
        dataItem,
        objCatalogData,
        'PATCH'
      );

      if (result !== null) {
        result
          .then((response) => {
            if (!response.ok) {
              // если ответ содержит ошибку, генерируется исключение с сообщением 'Ошибка сети: '
              throw new Error('Ошибка сети: ' + response.status);
            }
            return response.json();
          })
          .then((data) => {
            // Дополнительные действия после успешного добавления записи
            console.log('Новая запись успешно добавлена:', data);
          })
          .catch((error) => {
            // Обработка ошибки
            console.error('Произошла ошибка при добавлении записи:', error);
          })
          .finally(() => {
            // Действия в блоке finally
            console.log('finally');
          });
      }
      // закрываем модальное окно с формой
      handleCloseModalWindowForm();
    },
    [dataItem, handleCloseModalWindowForm, recipeCatalogData]
  );

  // функция, обработать удаление записи
  const handleRemoveEntries = React.useCallback(() => {
    const result = handleHttpRequest(
      recipeCatalogData,
      dataItem,
      null,
      'DELETE'
    );
    if (result !== null) {
      result
        .then((response) => {
          if (!response.ok) {
            // если ответ содержит ошибку, генерируется исключение с сообщением 'Ошибка сети: '
            throw new Error('Ошибка сети: ' + response.status);
          }
          return response.json();
        })
        .then((data) => {
          // Дополнительные действия после успешного добавления записи
          console.log('Новая запись успешно добавлена:', data);
        })
        .catch((error) => {
          // Обработка ошибки
          console.error('Произошла ошибка при добавлении записи:', error);
        })
        .finally(() => {
          // Действия в блоке finally
          console.log('finally');
        });
    }
    // закрываем модальное окно с формой
    handleCloseModalWindowForm();
  }, [dataItem, handleCloseModalWindowForm, recipeCatalogData]);

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
              <ButtonModal nameBtn='Добавить' nameType='submit' />
              <ButtonModal
                nameBtn='Закрыть'
                nameType='reset'
                onClick={handleCloseModalWindowForm}
              />
            </>
          )}
          {/* Кнопки для модального окна при редактировании записи */}
          {modalEditingActive && (
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
};

ModalForm.displayName = 'ModalForm';
export default ModalForm;
