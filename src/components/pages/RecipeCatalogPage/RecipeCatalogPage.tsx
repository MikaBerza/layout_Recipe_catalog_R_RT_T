import styles from './RecipeCatalogPage.module.css';
import { MainTitle } from '../../commons/MainTitle';
import { TheadIcon } from '../../commons/TheadIcon';

import gridIcon from '../../../assets/images/tableIcon/gridIcon.png';
import paintIcon from '../../../assets/images/tableIcon/paintIcon.png';
import dateIcon from '../../../assets/images/tableIcon/dateIcon.png';
import titleIcon from '../../../assets/images/tableIcon/titleIcon.png';
import recipeIcon from '../../../assets/images/tableIcon/recipeIcon.png';
import timeIcon from '../../../assets/images/tableIcon/timeIcon.png';

import { tableListItemData } from '../../../utils/listsOfData';
import { splitSentenceWithLineBreak } from '../../../utils/modules';
import { ButtonCatalogItem } from '../../commons/buttons';

const RecipeCatalogPage = () => {
  return (
    <main className={styles.wrapper}>
      <MainTitle textTitle={'Каталог рецептов'} />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>
              <TheadIcon patchIcon={gridIcon} tooltip='Номер пункта' />
            </th>
            <th>
              <TheadIcon patchIcon={paintIcon} tooltip='Персональный цвет' />
            </th>
            <th>
              <TheadIcon patchIcon={dateIcon} tooltip='Дата добавления' />
            </th>
            <th>
              <TheadIcon patchIcon={titleIcon} tooltip='Название блюда' />
            </th>
            <th>
              <TheadIcon patchIcon={recipeIcon} tooltip='Рецепт блюда' />
            </th>
            <th>
              <TheadIcon
                patchIcon={timeIcon}
                tooltip='Время приготовления блюда'
              />
            </th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableListItemData.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <span style={{ backgroundColor: `${item.paint}` }}></span>
                </td>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>
                  {splitSentenceWithLineBreak(item.recipe).map(
                    (elem, index) => {
                      return <p key={index}>{elem}</p>;
                    }
                  )}
                </td>
                <td>{item.time}ч</td>
                <td>
                  <ButtonCatalogItem name='Подробнее' />
                </td>
                <td>
                  <ButtonCatalogItem name='Просмотр' />
                </td>
                <td>
                  <ButtonCatalogItem name='Редактировать' />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

RecipeCatalogPage.displayName = 'RecipeCatalogPage';
export default RecipeCatalogPage;
