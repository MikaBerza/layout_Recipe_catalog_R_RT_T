import { useDispatch } from 'react-redux';
import { setModalActive } from '../../../../redux/slices/modalCreateSlice';

import styles from './ButtonFormClose.module.css';

const ButtonFormClose = ({
  nameBtn,
  nameStyles,
}: {
  nameBtn: string;
  nameStyles: string;
}) => {
  const dispatch = useDispatch();

  // функция, закрыть модальное окно для создания записи
  const closeModalWindowToCreateEntry = (event: any) => {
    event.preventDefault();
    dispatch(setModalActive(false));
  };

  return (
    <button
      className={styles[nameStyles]}
      onClick={closeModalWindowToCreateEntry}
    >
      {nameBtn}
    </button>
  );
};

ButtonFormClose.displayName = 'ButtonFormClose';
export default ButtonFormClose;
