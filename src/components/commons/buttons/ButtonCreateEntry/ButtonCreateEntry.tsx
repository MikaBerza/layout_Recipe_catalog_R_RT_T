import { useDispatch } from 'react-redux';
import { setModalActive } from '../../../../redux/slices/modalCreateSlice';

import styles from './ButtonCreateEntry.module.css';

const ButtonCreateEntry = ({ name }: { name: string }) => {
  const dispatch = useDispatch();

  // функция, открыть модальное окно для создания записи
  const openModalWindowToCreateEntry = () => {
    dispatch(setModalActive(true));
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.linkBtn} onClick={openModalWindowToCreateEntry}>
        {name}
      </button>
    </div>
  );
};

ButtonCreateEntry.displayName = 'ButtonCreateEntry';
export default ButtonCreateEntry;
