import './App.css';
import HomePage from "./pages/HomePage.js";
import DiscoverPage from './pages/DiscoverPage.js';
import PlanPage from './pages/PlanPage.js';
import SettingsPage from './pages/SettingsPage.js';

import Navbar from './components/Navigation';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/discover" element={<DiscoverPage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/attractions" element={<SettingsPage />} />
        <Route path="/hotel" element={<SettingsPage />} />
        <Route path="/events" element={<SettingsPage />} />
        <Route path="/activities" element={<SettingsPage />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
