import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../routes/Home';
import Categories from '../routes/Categories';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
