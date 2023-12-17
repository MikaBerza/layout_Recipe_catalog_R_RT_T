import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/commons/Header/Header';
import { HomePage, RecipeCatalogPage } from './components/pages/index';
import Footer from './components/commons/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe-catalog-page' element={<RecipeCatalogPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
