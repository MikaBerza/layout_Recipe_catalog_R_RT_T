import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';

import { FormTitle } from '../../titles';
import { ButtonModal } from '../../buttons';

import {
  setModalDataActive,
  //
  setColor,
  setTitle,
  setRecipe,
  setCookingTime,
} from '../../../../redux/slices/modalFormSlice';
import { convertObjectToIndentedLines } from '../../../../utils/modules';

import styles from './ModalData.module.css';

const ModalData = () => {
  const { modalDataActive, dataItem } = useSelector(
    (state: RootState) => state.modalFormSlice
  );
  const dispatch = useDispatch();

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

  // данные текстовой записи
  const textRecordData: JSX.Element[] = React.useMemo(() => {
    return convertObjectToIndentedLines(dataItem).map(
      (item: string, index: number) => {
        return <p key={index}>{item}</p>;
      }
    );
  }, [dataItem]);

  return (
    <div
      className={`${styles.wrapper} ${
        modalDataActive === false ? styles.dn : ''
      }`}
    >
      <div className={styles.inner}>
        <FormTitle textTitle='Сохраненные данные' />
        <div className={styles.textData}>{textRecordData}</div>

        <div className={styles.buttons}>
          <ButtonModal
            nameBtn='Закрыть'
            nameType='reset'
            onClick={handleCloseModalWindow}
          />
        </div>
      </div>
    </div>
  );
};

ModalData.displayName = 'ModalData';
export default ModalData;
