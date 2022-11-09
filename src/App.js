import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
