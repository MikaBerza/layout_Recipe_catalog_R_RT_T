import { CatalogItemDataType } from '../types/customType';

// функция, сохранить набор данных в localStorage
export const saveDatasetToLocalStorage = (
  nameKey: string,
  dataset: CatalogItemDataType[]
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
    .split('\n')
    .filter((sentence) => sentence.trim() !== '');

  // счетчик новых строк
  const newlineCounter = splitSentences.length - 1;

  if (splitSentences.length > 1) {
    // первое предложение
    const firstSentence = splitSentences.splice(0, newlineCounter);
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

// функция, преобразовать объект в строки с отступом
export const convertObjectToIndentedLines = (obj: CatalogItemDataType): any => {
  // преобразуем объект в строку JSON с отступами
  let jsonString: string = JSON.stringify(obj, null, 2);
  // разделенные строки, разбиение строки на массив строк по символу новой строки
  const separatedLines: string[] = jsonString.split('\n');
  return separatedLines;
};

// функция, поиск по названию
export const searchForTitle = (
  data: CatalogItemDataType[],
  textValue: string
): CatalogItemDataType[] => {
  const textValueUpperCase = textValue.toUpperCase();

  // метод includes проверяет наличие элемента в массиве (метод возвращает либо true, либо false)
  const newData = data.filter((item) =>
    item.title.toUpperCase().includes(textValueUpperCase)
  );

  return newData;
};