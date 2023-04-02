import React from "react";
import "./App.scss";
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar } from "./components";
import { BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
