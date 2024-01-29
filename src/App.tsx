import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/hooks';
import { fetchRecipeCatalogData } from './redux/slices/recipeCatalogSlice';
import { Header } from './components/commons/Header';
import {
  HomePage,
  RecipeCatalogPage,
  RecipeCardPage,
} from './components/pages';
import { Footer } from './components/commons/Footer';

function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
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
