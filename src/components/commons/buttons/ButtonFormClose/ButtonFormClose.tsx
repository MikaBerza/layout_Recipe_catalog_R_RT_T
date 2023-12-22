import { useDispatch } from 'react-redux';
import { setModalActive } from '../../../../redux/slices/modalFormSlice';

import styles from './ButtonFormClose.module.css';

const ButtonFormClose = ({ nameBtn }: { nameBtn: string }) => {
  const dispatch = useDispatch();

  // функция, закрыть модальное окно для создания записи
  const closeModalWindowToCreateEntry = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    dispatch(setModalActive(false));
  };

  return (
    <button className={styles.btn} onClick={closeModalWindowToCreateEntry}>
      {nameBtn}
    </button>
  );
};

ButtonFormClose.displayName = 'ButtonFormClose';
export default ButtonFormClose;
