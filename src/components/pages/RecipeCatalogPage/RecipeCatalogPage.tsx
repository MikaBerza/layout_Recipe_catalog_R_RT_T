import styles from './RecipeCatalogPage.module.css';
import { MainTitle } from '../../commons/MainTitle';

const RecipeCatalogPage = () => {
  // const arrData = [
  //   {
  //     id: 1,
  //     date: '30/11/23, 21:01',
  //     nameOfTheDish: 'Салат Цезарь',
  //     recipe: `
  //     Ингредиенты: куриное филе, салат Айсберг, помидоры, сыр Пармезан, хлеб для гренок, соус Цезарь.
  //     Приготовление: обжарить куриное филе, нарезать салат и помидоры, смешать все ингредиенты и заправить соусом.
  //     `,
  //   },
  //   {
  //     id: 2,
  //     date: '29/10/23, 22:01',
  //     nameOfTheDish: 'Паста с креветками',
  //     recipe: `
  //     Ингредиенты: спагетти, креветки, чеснок, оливковое масло, петрушка.
  //     Приготовление: сварить спагетти, обжарить креветки с чесноком на оливковом масле, смешать с пастой и посыпать петрушкой.
  //     `,
  //   },
  // ];

  return (
    <main className={styles.wrapper}>
      <MainTitle textTitle={'Каталог рецептов'} />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>Название</th>
            <th>Рецепт</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>30/11/23, 21:01</td>
            <td>Салат Цезарь</td>
            <td className={styles.recipe}>
              Ингредиенты: куриное филе, салат Айсберг, помидоры, сыр Пармезан,
              хлеб для гренок, соус Цезарь. <br /> <br />
              Приготовление: обжарить куриное филе, нарезать салат и помидоры,
              смешать все ингредиенты и заправить соусом.
              <div className={styles.buttonsGroup}>
                <button>Просмотр</button>
                <button>Подробнее</button>
              </div>
            </td>
            <td>
              <button>Редактировать</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>29/10/23, 22:01</td>
            <td>Паста с креветками</td>
            <td className={styles.recipe}>
              Ингредиенты: спагетти, креветки, чеснок, оливковое масло,
              петрушка. <br /> <br />
              Приготовление: сварить спагетти, обжарить креветки с чесноком на
              оливковом масле, смешать с пастой и посыпать петрушкой.
              <div className={styles.buttonsGroup}>
                <button>Просмотр</button>
                <button>Подробнее</button>
              </div>
            </td>
            <td>
              <button>Редактировать</button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
