import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

import {
  splitSentenceWithLineBreak,
  getCatalogItem,
} from '../../../utils/modules';
import styles from './RecipeCardPage.module.css';

const RecipeCardPage = () => {
  const { dishNumber } = useParams();
  const { recipeCatalogData } = useSelector(
    (state: RootState) => state.recipeCatalogDataSlice
  );

  // элемент каталога
  const catalogItem = React.useMemo(
    () => getCatalogItem(recipeCatalogData, Number(dishNumber)),
    [recipeCatalogData, dishNumber]
  );
  // используем деструктуризацию для получения данных из константы (catalogItem)
  const { id, title, cookingTime, recipe, date, color } = catalogItem[0];
  const recipeText = splitSentenceWithLineBreak(recipe).map((item, index) => (
    <p className={styles.recipeText} key={index}>
      {item}
    </p>
  ));

  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.content} key={id}>
          <p className={styles.dishNumber}>#{dishNumber}</p>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.secondaryText}>
            Время приготовления {cookingTime}
          </span>
          <div className={styles.recipe}>{recipeText}</div>
          <div className={styles.footer}>
            <div className={styles.dateText}>
              <span className={styles.secondaryText}>Дата добавления</span>
              <span className={styles.secondaryText}>{date}</span>
            </div>
            <Link
              className={styles.linkBtn}
              to='/layout_Recipe_catalog_R_RT_T/recipe-catalog-page'
            >
              <p
                className={styles.personalColor}
                style={{ backgroundColor: color }}
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

RecipeCardPage.displayName = 'RecipeCardPage';
export default RecipeCardPage;
