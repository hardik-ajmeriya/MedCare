import React from "react";
import Navbar from "./components/Navbar";
import ShopByCategory from './pages/ShopByCategory';
import "./App.css";

function App() {
  return (
    <div className="h-full w-full bg-white">
      <Navbar />
      <ShopByCategory />
    </div>
  );
}

export default App;
