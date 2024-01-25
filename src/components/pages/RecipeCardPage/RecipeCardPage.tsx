import { Link, useParams } from 'react-router-dom';

import { useAppSelector } from '../../../redux/hooks';
import { RootState } from '../../../redux/store';
import { Recipe } from '../../commons/Recipe';
import { MinorText } from '../../commons/MinorText';
import styles from './RecipeCardPage.module.css';

const RecipeCardPage = () => {
  const { dishNumber } = useParams();
  const { dataItem } = useAppSelector(
    (state: RootState) => state.modalFormSlice
  );
  // используем деструктуризацию для получения данных из (dataItem)
  const { id, title, cookingTime, recipe, date, color } = dataItem;

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
