import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRecipeCatalogData,
  setIsLoading,
  setIsErrors,
} from './redux/slices/recipeCatalogSlice';
import { RootState } from './redux/store';

import Header from './components/commons/Header/Header';
import {
  HomePage,
  RecipeCatalogPage,
  RecipeCardPage,
} from './components/pages/index';
import Footer from './components/commons/Footer/Footer';
import { CatalogItemDataType } from './types/customType';

function App() {
  const dispatch = useDispatch();
  const { modalActive, modalEditingActive } = useSelector(
    (state: RootState) => state.modalFormSlice
  );

  React.useEffect(() => {
    // устанавливаем заглушку "загрузка"
    dispatch(setIsLoading(true));
    let timer = setTimeout(function () {
      console.log('text');

      // выполним запрос fetch() к указанному URL-адресу
      fetch('http://localhost:4000/catalogData')
        // используем метод then() для обработки ответа от сервера
        // если ответ не содержит ошибок (если !response.ok равно false), код выполняется дальше
        .then((response: Response) => {
          // если ответ содержит ошибку, генерируется исключение с сообщением 'Ошибка сети: '
          if (!response.ok) {
            throw new Error('Ошибка сети: ' + response.status);
          }
          // если ответ успешен, вызывается метод json() для преобразования ответа в формат JSON
          return response.json();
        })
        // используется метод then() для обработки данных, полученных после преобразования
        .then((data: CatalogItemDataType[]) => {
          // вызывая dispatch(setRecipeCatalogData(data)), отправляем данные (data) в хранилище
          dispatch(setRecipeCatalogData(data));
          // убираем заглушку "загрузка"
          dispatch(setIsLoading(false));
        })
        // если происходит ошибка, выводим в консоль и устанавливается значение переменной 'setErrorOccurred(true)'
        .catch((err: Error) => {
          console.log(err, 'err');
          // устанавливаем компонент с ошибкой
          dispatch(setIsErrors(true));
          // dispatch(setIsLoading(true));
        })
        // независимо, выполнен запрос успешно или произошла ошибка, в блоке finally()
        // устанавливаем значение 'setIsLoading(false)' для завершения процесса загрузки данных
        .finally(() => {
          // убираем заглушку "загрузка"
          dispatch(setIsLoading(false));
        });
    }, 1000);
    // при переходе на страницу автоматический скролл вверх
    window.scrollTo(0, 0);

    // сбрасываем setTimeout после перезагрузки страницы
    return () => {
      clearTimeout(timer);
    };
  }, [dispatch, modalActive, modalEditingActive]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/layout_Recipe_catalog_R_RT_T' element={<HomePage />} />
        <Route
          path='/layout_Recipe_catalog_R_RT_T/recipe-catalog-page'
          element={<RecipeCatalogPage />}
        />
        <Route
          path='/layout_Recipe_catalog_R_RT_T/recipe-catalog-page/recipe-card-page/:dishNumber'
          element={<RecipeCardPage />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
