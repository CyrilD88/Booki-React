import React from "react";
import Nav from "./layout/Navbar";
import Outlet from "./Chemin";
import Footer from "./layout/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
