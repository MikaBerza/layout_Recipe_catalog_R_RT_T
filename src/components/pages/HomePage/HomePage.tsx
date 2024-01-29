import { MainTitle } from '../../commons/titles';
import { ButtonGoToCatalog } from '../../commons/buttons';
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
        link='/layout_Recipe_catalog_R_RT_T/recipe-catalog-page'
      />
    </main>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;
