import { generateId } from './modules';
import { TheadDataType, CatalogItemDataType } from '../types/customType';

export const theadData: TheadDataType[] = [
  {
    id: generateId(),
    tooltip: 'Номер блюда',
    patch: require('../assets/images/tableIcon/gridIcon.png'),
  },
  {
    id: generateId(),
    tooltip: 'Персональный цвет',
    patch: require('../assets/images/tableIcon/paintIcon.png'),
  },
  {
    id: generateId(),
    tooltip: 'Дата добавления',
    patch: require('../assets/images/tableIcon/dateIcon.png'),
  },
  {
    id: generateId(),
    tooltip: 'Название блюда',
    patch: require('../assets/images/tableIcon/titleIcon.png'),
  },
  {
    id: generateId(),
    tooltip: 'Рецепт блюда',
    patch: require('../assets/images/tableIcon/recipeIcon.png'),
  },
  {
    id: generateId(),
    tooltip: 'Время приготовления блюда',
    patch: require('../assets/images/tableIcon/timeIcon.png'),
  },
];

export const catalogData: CatalogItemDataType[] = [
  {
    id: generateId(),
    color: '#e66465',
    date: '20/11/23, 10:00',
    title: 'Салат Цезарь',
    recipe: `
      Ингредиенты: куриное филе, салат Айсберг, помидоры, сыр Пармезан, хлеб для гренок, соус Цезарь. \nПриготовление: обжарить куриное филе, нарезать салат и помидоры, смешать все ингредиенты и заправить соусом.
      `,
    cookingTime: '00:10',
  },
  {
    id: generateId(),
    color: '#f6b73c',
    date: '21/10/23, 11:00',
    title: 'Паста с креветками',
    recipe: `
      Ингредиенты: спагетти, креветки, чеснок, оливковое масло, петрушка. \nПриготовление: сварить спагетти, обжарить креветки с чесноком на оливковом масле, смешать с пастой и посыпать петрушкой.
      `,
    cookingTime: '00:20',
  },
  {
    id: generateId(),
    color: '#B9DFD1',
    date: '22/10/23, 12:00',
    title: 'Омлет',
    recipe: `
      Ингредиенты: яйца, молоко, соль, перец, овощи (помидоры, перец, лук), сыр. \nПриготовление: взбить яйца с молоком и специями, добавить нарезанные овощи и сыр, жарить на сковороде.
      `,
    cookingTime: '00:30',
  },
  {
    id: generateId(),
    color: '#F3BCBA',
    date: '23/10/23, 13:00',
    title: 'Греческий салат',
    recipe: `
      Ингредиенты: помидоры, огурцы, перец, красный лук, маслины, сыр Фета, оливковое масло, уксус. \nПриготовление: нарезать овощи, добавить маслины и сыр, заправить оливковым маслом и уксусом.
      `,
    cookingTime: '00:40',
  },
  {
    id: generateId(),
    color: '#5E3B3B',
    date: '24/10/23, 14:00',
    title: 'Куриные крылышки BBQ',
    recipe: `
      Ингредиенты: куриные крылышки, соус BBQ. \nПриготовление: запечь куриные крылышки в духовке или на гриле, заправить соусом BBQ.
      `,
    cookingTime: '00:50',
  },
];
