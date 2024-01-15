import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/commons/Header/Header';
import {
  HomePage,
  RecipeCatalogPage,
  RecipeCardPage,
} from './components/pages/index';
import Footer from './components/commons/Footer/Footer';

function App() {
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
