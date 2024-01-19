import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipeCatalogData } from './redux/slices/recipeCatalogSlice';
import Header from './components/commons/Header/Header';
import {
  HomePage,
  RecipeCatalogPage,
  RecipeCardPage,
} from './components/pages/index';
import Footer from './components/commons/Footer/Footer';
import React from 'react';
import { RootState } from './redux/store';

function App() {
  const dispatch = useDispatch();
  const { modalActive, modalEditingActive } = useSelector(
    (state: RootState) => state.modalFormSlice
  );

  React.useEffect(() => {
    // выполним запрос fetch() к указанному URL-адресу
    fetch('http://localhost:4000/catalogData')
      // используем метод then() для обработки ответа от сервера
      // если ответ не содержит ошибок (если !response.ok равно false), код выполняется дальше
      .then((response: Response) => {
        // если ответ содержит ошибку, генерируется исключение с сообщением 'Network response was not ok'
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // если ответ успешен, вызывается метод json() для преобразования ответа в формат JSON
        return response.json();
      })
      // используется метод then() для обработки данных, полученных после преобразования
      .then((data: any) => {
        // вызываем функцию `setInitialProductData()` в нееи устанавливаем значение `data` в состояние компонента
        console.log(data, 'data');
        dispatch(setRecipeCatalogData(data));
      })
      // если происходит ошибка, выводим в консоль и устанавливается значение переменной 'setErrorOccurred(true)'
      .catch((err: Error) => {
        console.log(err, 'err');
      })
      // независимо, выполнен запрос успешно или произошла ошибка, в блоке finally()
      // устанавливаем значение 'setIsLoading(false)' для завершения процесса загрузки данных
      .finally(() => {
        console.log('finally');
      });
    // при переходе на страницу автоматический скролл вверх
    window.scrollTo(0, 0);
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
