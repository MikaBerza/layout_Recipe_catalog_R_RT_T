import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Recipe } from '../../commons/Recipe';
import { MinorText } from '../../commons/MinorText';

import { getCatalogItem } from '../../../utils/modules';
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

  return (
    <main className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.content} key={id}>
          <p className={styles.dishNumber}>#{dishNumber}</p>
          <h3 className={styles.title}>{title}</h3>
          <MinorText str={`Время приготовления ${cookingTime}`} />
          <Recipe str={recipe} />
          <div className={styles.footer}>
            <div className={styles.box}>
              <MinorText str={'Дата добавления'} />
              <MinorText str={date} />
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
