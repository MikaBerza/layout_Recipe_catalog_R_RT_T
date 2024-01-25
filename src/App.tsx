import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { fetchRecipeCatalogData } from './redux/slices/recipeCatalogSlice';

import Header from './components/commons/Header/Header';
import {
  HomePage,
  RecipeCatalogPage,
  RecipeCardPage,
} from './components/pages/index';
import Footer from './components/commons/Footer/Footer';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    // @ts-ignore
    dispatch(fetchRecipeCatalogData());
  }, [dispatch]);

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
