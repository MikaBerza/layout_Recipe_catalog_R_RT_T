import { generateId } from './modules';
import { TheadDataDataType, CatalogDataType } from '../types/customType';

export const theadData: TheadDataDataType[] = [
  {
    id: generateId(),
    tooltip: 'Номер пункта',
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

export const catalogData: CatalogDataType[] = [
  {
    id: generateId(),
    date: '20/11/23, 10:00',
    paint: '#e66465',
    title: 'Салат Цезарь',
    recipe: `
      Ингредиенты: куриное филе, салат Айсберг, помидоры, сыр Пармезан, хлеб для гренок, соус Цезарь. \nПриготовление: обжарить куриное филе, нарезать салат и помидоры, смешать все ингредиенты и заправить соусом.
      `,
    time: '00:10',
  },
  {
    id: generateId(),
    date: '21/10/23, 11:00',
    paint: '#f6b73c',
    title: 'Паста с креветками',
    recipe: `
      Ингредиенты: спагетти, креветки, чеснок, оливковое масло, петрушка. \nПриготовление: сварить спагетти, обжарить креветки с чесноком на оливковом масле, смешать с пастой и посыпать петрушкой.
      `,
    time: '00:20',
  },
  {
    id: generateId(),
    date: '22/10/23, 12:00',
    paint: '#B9DFD1',
    title: 'Омлет',
    recipe: `
      Ингредиенты: яйца, молоко, соль, перец, овощи (помидоры, перец, лук), сыр. \nПриготовление: взбить яйца с молоком и специями, добавить нарезанные овощи и сыр, жарить на сковороде.
      `,
    time: '00:30',
  },
  {
    id: generateId(),
    date: '23/10/23, 13:00',
    paint: '#F3BCBA',
    title: 'Греческий салат',
    recipe: `
      Ингредиенты: помидоры, огурцы, перец, красный лук, маслины, сыр Фета, оливковое масло, уксус. \nПриготовление: нарезать овощи, добавить маслины и сыр, заправить оливковым маслом и уксусом.
      `,
    time: '00:40',
  },
  {
    id: generateId(),
    date: '24/10/23, 14:00',
    paint: '#5E3B3B',
    title: 'Куриные крылышки BBQ',
    recipe: `
      Ингредиенты: куриные крылышки, соус BBQ. \nПриготовление: запечь куриные крылышки в духовке или на гриле, заправить соусом BBQ.
      `,
    time: '00:50',
  },
];
