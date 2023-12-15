import React from 'react';

import { CreateCatalogBtn } from '../../commons/buttons/index';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <h1 className={`${styles.title}`}>
          Ведите свой кулинарный каталог онлайн и делитесь им с друзьями
        </h1>
        <p className={styles.subtitle}>
          Создавайте, сохраняйте и редактируйте свои персональные рецепты
        </p>
          <CreateCatalogBtn name='Создать каталог' />
      </div>
    </main>
  );
};

HomePage.displayName = 'HomePage';
export default HomePage;
