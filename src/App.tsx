import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import HotelDetailPage from './pages/HotelDetailPage';
import MyTripsPage from './pages/MyTripsPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ContactPage from './pages/ContactPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router basename="/marquette-TravelEase">
      <Routes>
        {/* Pages d'authentification */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Pages avec layout commun */}
        <Route element={<Layout><Outlet /></Layout>}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="destination/:id/" element={<DestinationDetailPage />} />
          <Route path="destination" element={<DestinationDetailPage />} />
          <Route path="hotel/:id" element={<HotelDetailPage />} />
          <Route path="my-trips" element={<MyTripsPage />} />
          {/* nous contacter */}
          <Route path="contact" element={<ContactPage />} />
          {/* profil utilisateur */}
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
