
import './App.css';
// import { Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/Header';
import SingleProduct from './SingleProduct';
import Error from './pages/Error';
import Footer from './components/Footer';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <GlobalStyle/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/Singleproduct/:id' element={<SingleProduct />} />
          {/* id is here for the product */}
          <Route path="*" element={<Error/>} />
        </Routes>

        <Footer/>

     </Router>
    </>
  );
}

export default App;
