import { MainTitle } from '../../commons/MainTitle';
import { ButtonGoToCatalog } from '../../commons/buttons/index';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <MainTitle textTitle='Ведите свой кулинарный каталог онлайн и делитесь им с друзьями' />
      <p className={styles.subtitle}>
        Создавайте, сохраняйте и редактируйте свои персональные рецепты
      </p>
      <ButtonGoToCatalog
        name='Перейти в каталог'
        link='/recipe-catalog-page'
      />
    </main>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;
