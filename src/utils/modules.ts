import { CatalogDataType } from '../types/customType';

// функция, сохранить набор данных в localStorage
export const saveDatasetToLocalStorage = (
  nameKey: string,
  dataset: CatalogDataType[]
): void => {
  localStorage.setItem(nameKey, JSON.stringify(dataset));
};

// функция для генерации id
export const generateId = (): string =>
  Math.round(Math.random() * 100000000000000).toString(16);

// функция, проверяет длину строки
export const checkLengthOfTheString = (str: string) => str.trim().length > 0;

// функция, разделить предложение с разрывом строки
export const splitSentenceWithLineBreak = (text: string): string[] => {
  /*
  разделяем строки в массив по точке и двум пробелам, удаляем пустую строку, 
  которая появляется после разделения строк
  */
  // разделенные предложения
  const splitSentences = text
    .split(' \n')
    .filter((sentence) => sentence.trim() !== '');

  if (splitSentences.length > 1) {
    // первое предложение
    const firstSentence = splitSentences.splice(0, 1);
    // другие предложения
    const otherSentences = splitSentences.join('.');
    // формируем новый массив с первым и другими предложениями
    return [...firstSentence, otherSentences];
  }
  return splitSentences;
};

// функция, получить текущую дату
export const getTheCurrentDate = () => {
  // формируем объект с текущей датой
  return new Date(Date.now()).toLocaleDateString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });
};
