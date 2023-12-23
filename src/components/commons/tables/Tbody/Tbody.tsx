import { ButtonControlCatalogEntry } from '../../buttons';

import { catalogData } from '../../../../utils/listsOfData';
import { splitSentenceWithLineBreak } from '../../../../utils/modules';
import styles from './Tbody.module.css';

const Tbody = () => {
  // функция, сгенерировать рецепты блюд
  const generateRecipesForDishes = (str: string) => {
    return splitSentenceWithLineBreak(str).map((elem, index) => {
      return <p key={index}>{elem}</p>;
    });
  };

  return (
    <tbody className={styles.wrapper}>
      {catalogData.map((item, index) => {
        return (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
              <span style={{ backgroundColor: `${item.color}` }} />
            </td>
            <td>{item.date}</td>
            <td>{item.title}</td>
            <td>{generateRecipesForDishes(item.recipe)}</td>
            <td>{item.cookingTime}ч</td>

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
  );
};

Tbody.displayName = 'Tbody';
export default Tbody;
