import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import Footer from './Component/Footer';
import Shop from './Component/Shop';
import About from './Component/About';
import Contect from './Component/Contect';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/shop" element={<Shop/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contect/>} /> 
          </Routes>
          <Footer/>
      </BrowserRouter>  
    </>
  );
}

export default App;
