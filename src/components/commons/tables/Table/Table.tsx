import { Search } from '../../Search';
import { Thead } from '../index';
import { ButtonControlCatalogEntry } from '../../buttons';

import { catalogData } from '../../../../utils/listsOfData';
import { splitSentenceWithLineBreak } from '../../../../utils/modules';
import styles from './Table.module.css';

const Table = () => {
  return (
    <table className={styles.table}>
      <caption>
        <Search />
      </caption>
      <Thead />
      <tbody>
        {catalogData.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <span style={{ backgroundColor: `${item.paint}` }}></span>
              </td>
              <td>{item.date}</td>
              <td>{item.title}</td>
              <td>
                {splitSentenceWithLineBreak(item.recipe).map((elem, index) => {
                  return <p key={index}>{elem}</p>;
                })}
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
  );
};

Table.displayName = 'Table';
export default Table;
