import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/commons/Header/Header';
import { HomePage } from './components/pages/index';
import Footer from './components/commons/Footer/Footer';
import RecipeCatalogPage from './components/pages/RecipeCatalogPage/RecipeCatalogPage';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/recipe-catalog-page'
            element={<RecipeCatalogPage />}
          />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
