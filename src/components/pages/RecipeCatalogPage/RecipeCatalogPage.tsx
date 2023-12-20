import styles from './RecipeCatalogPage.module.css';
import { MainTitle } from '../../commons/MainTitle';
import { Icon } from '../../commons/Icon';

import gridIcon from '../../../assets/images/tableIcon/gridIcon.png';
import paintIcon from '../../../assets/images/tableIcon/paintIcon.png';
import dateIcon from '../../../assets/images/tableIcon/dateIcon.png';
import titleIcon from '../../../assets/images/tableIcon/titleIcon.png';
import recipeIcon from '../../../assets/images/tableIcon/recipeIcon.png';
import timeIcon from '../../../assets/images/tableIcon/timeIcon.png';

import { tableListItemData } from '../../../utils/listsOfData';
import { splitSentenceWithLineBreak } from '../../../utils/modules';
import {
  ButtonControlCatalogEntry,
  ButtonCreateEntry,
} from '../../commons/buttons';
import { Search } from '../../commons/Search';

const RecipeCatalogPage = () => {
  return (
    <main className={styles.wrapper}>
      <MainTitle textTitle='Каталог рецептов' />

      <table className={styles.table}>
        <caption>
          <Search />
        </caption>
        <thead className={styles.thead}>
          <tr>
            <th>
              <Icon patchIcon={gridIcon} tooltip='Номер пункта' />
            </th>
            <th>
              <Icon patchIcon={paintIcon} tooltip='Персональный цвет' />
            </th>
            <th>
              <Icon patchIcon={dateIcon} tooltip='Дата добавления' />
            </th>
            <th>
              <Icon patchIcon={titleIcon} tooltip='Название блюда' />
            </th>
            <th>
              <Icon patchIcon={recipeIcon} tooltip='Рецепт блюда' />
            </th>
            <th>
              <Icon patchIcon={timeIcon} tooltip='Время приготовления блюда' />
            </th>
            <th colSpan={3}>
              <ButtonCreateEntry
                name='Создать запись'
                link='#modal-window-create-a-record'
              />
            </th>
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
                  <ButtonControlCatalogEntry name='Подробнее' />
                </td>
                <td>
                  <ButtonControlCatalogEntry name='Просмотр' />
                </td>
                <td>
                  <ButtonControlCatalogEntry name='Редактировать' />
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
