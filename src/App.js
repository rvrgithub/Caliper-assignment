import { Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './Components/About/About';
import { Contacts } from './Components/Contacts/Contacts';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { HomeKits } from './Components/Products/HomeKits';
import { Nutrients } from './Components/Products/Nutrients';
import { ProductPage } from './Components/Products/ProductPage';
import { Seeds } from './Components/Products/Seeds';
function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/about' target="_blank" element={<About/>}></Route>
        <Route path='/product/homeKits' element={<HomeKits/>}></Route>
        <Route path='/product/nutrients' element={<Nutrients/>}></Route>
        <Route path='/product/seeds' element={<Seeds/>}></Route>
        <Route path='/contact' element={<Contacts/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
