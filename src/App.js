import './App.css';
import HomePage from "./pages/HomePage.js";
import Attraction from './pages/Attraction';
import AttractionItem from './pages/AttractionItem';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/attractions" element={<Attraction />} />
        <Route path="/attractionitem/:ItemId" element={<AttractionItem />} />

      </Routes>
    </div>
  );
}

export default App;
