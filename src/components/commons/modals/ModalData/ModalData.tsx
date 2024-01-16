import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import {
  setModalDataActive,
  //
  setColor,
  setTitle,
  setRecipe,
  setCookingTime,
} from '../../../../redux/slices/modalFormSlice';

import { FormTitle } from '../../titles';
import { Recipe } from '../../Recipe';
import { MinorText } from '../../MinorText';
import { ButtonModal } from '../../buttons';
import styles from './ModalData.module.css';

const ModalData = () => {
  const dispatch = useDispatch();
  const { modalDataActive, dataItem } = useSelector(
    (state: RootState) => state.modalFormSlice
  );
  // используем деструктуризацию для получения данных из (dataItem)
  const { title, cookingTime, recipe } = dataItem;

  // функция, обработать закрытие модального окна
  const handleCloseModalWindow = React.useCallback(() => {
    // изменяем флаг true на false
    if (modalDataActive) {
      dispatch(setModalDataActive(false));
    }
    // очищаем значение полей формы
    dispatch(setColor('#000000'));
    dispatch(setCookingTime(''));
    dispatch(setTitle(''));
    dispatch(setRecipe(''));
  }, [dispatch, modalDataActive]);

  return (
    <div
      className={`${styles.wrapper} ${
        modalDataActive === false ? styles.dn : ''
      }`}
    >
      <div className={styles.inner}>
        <div className={styles.content}>
          <FormTitle textTitle={title} />
          <div className={styles.box}>
            <Recipe str={recipe} />
            <MinorText str={`Время приготовления ${cookingTime}`} />
          </div>

          <div className={styles.buttons}>
            <ButtonModal
              nameBtn='Закрыть'
              nameType='reset'
              onClick={handleCloseModalWindow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ModalData.displayName = 'ModalData';
export default ModalData;
