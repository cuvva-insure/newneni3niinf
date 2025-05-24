import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portal from './pages/Portal';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Policy from './pages/Policy';
import CustomerPage from './pages/CustomerPage';
import InsurancePage from './pages/InsurancePage';
import TripsPage from './pages/TripsPage';
import ProfilePage from './pages/ProfilePage';

// Protected route wrapper for customer pages
const CustomerRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = sessionStorage.getItem('customerAuth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/portal" replace />;
};

// Protected route wrapper for admin pages
const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = sessionStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/portal" replace />} />
        <Route path="/portal" element={<Portal />} />
        <Route
          path="/portal/customer/page1"
          element={
            <CustomerRoute>
              <CustomerPage />
            </CustomerRoute>
          }
        />
        <Route
          path="/portal/customer/page3"
          element={
            <CustomerRoute>
              <InsurancePage />
            </CustomerRoute>
          }
        />
        <Route
          path="/portal/customer/page4"
          element={
            <CustomerRoute>
              <ProfilePage />
            </CustomerRoute>
          }
        />
        <Route
          path="/portal/customer/page5"
          element={
            <CustomerRoute>
              <TripsPage />
            </CustomerRoute>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/admin/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/policy"
          element={
            <AdminRoute>
              <Policy />
            </AdminRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;