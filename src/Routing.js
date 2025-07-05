import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Calculator from './Pages/Calculator';
import Weather from './Pages/Weather';
import Homeloan from './Pages/Homeloan';
import Simpleinterest from './Pages/Simpleinterest';
import Stockaverage from './Pages/Stockaverage';
import PPFCalculator from './Pages/PPFCalculator';
function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<About />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/homeloancalc" element={<Homeloan />}></Route>
          <Route path="/simpleint" element={<Simpleinterest />}></Route>
          <Route path="/stockavg" element={<Stockaverage />}></Route>
          <Route path="/ppfcalc" element={<PPFCalculator />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
