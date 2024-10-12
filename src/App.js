import React from "react";
import "./index.css";
import Home from './routes/Home';
import About from './routes/About';
import Skills from './routes/Skills';
import Services from "./routes/Services";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/skills" element = {<Skills />}/>
        <Route path="/services" element = {<Services />}/>
        <Route path="/about" element = {<About />}/>
      </Routes>
      
    </>
  );
}

export default App;
