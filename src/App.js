import './App.css';
import HomePage from "./pages/HomePage.js";
import DiscoverPage from './pages/DiscoverPage.js';
import PlanPage from './pages/PlanPage.js';
import SettingsPage from './pages/SettingsPage.js';
import AttractionsPage from './pages/ActivitiesPage.js';
import HotelPage from './pages/HotelPage.js';
import EventsPage from './pages/EventsPage';
import ActivitiesPage from './pages/ActivitiesPage';

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
        <Route path="/attractions" element={<AttractionsPage />} />
        <Route path="/hotel" element={<HotelPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
