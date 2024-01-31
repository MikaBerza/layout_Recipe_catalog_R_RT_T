import React from 'react';
import { FormTitle } from '../../titles';
import { Recipe } from '../../Recipe';
import { MinorText } from '../../MinorText';
import { ButtonModal } from '../../buttons';
import styles from './ModalData.module.css';
import { ModalDataPropsType } from '../../../../types/customType';

const ModalData = ({
  modalDataActive,
  setModalDataActive,
  catalogItemData,
}: ModalDataPropsType) => {
  // функция, обработать закрытие модального окна
  const handleCloseModalWindow = React.useCallback(() => {
    setModalDataActive(false);
  }, [setModalDataActive]);

  return (
    <div className={`${styles.wrapper} ${modalDataActive ? '' : styles.dn}`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <FormTitle textTitle={catalogItemData.title} />
          <div className={styles.box}>
            <Recipe str={catalogItemData.recipe} />
            <MinorText
              str={`Время приготовления ${catalogItemData.cookingTime}`}
            />
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
