import { MainTitle } from '../../commons/MainTitle';
import { CreateCatalogBtn } from '../../commons/buttons/index';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <MainTitle textTitle='Ведите свой кулинарный каталог онлайн и делитесь им с друзьями' />
        <p className={styles.subtitle}>
          Создавайте, сохраняйте и редактируйте свои персональные рецепты
        </p>
        <CreateCatalogBtn name='Создать каталог' link='/recipe-catalog-page' />
      </div>
    </main>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;
