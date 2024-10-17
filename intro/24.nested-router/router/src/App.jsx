import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import EmployeeAbout from "./pages/EmployeeAbout";
import CompanyAbout from "./pages/CompanyAbout";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} />
          <Route path="company" element={<CompanyAbout />} />
        </Route>
        
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        {/*  * işaretinin anlamı, eğerki hiçbir url adresiyle eşleşmezse manasındadır */}
      </Routes>
    </div>
  );
}

export default App;
