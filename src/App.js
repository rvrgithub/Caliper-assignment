import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About/About';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { ProductPage } from './Components/Products/ProductPage';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/about' target="_blank" element={<About/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
