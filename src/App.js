import * as React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

import { ProtectedLayout } from './components/ProtectedLayout';
import { AuthProvider } from './contexts/AuthContext';
import ForgetPasswordPage from './pages/ForgetPasswordPage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/login" element={
          <SnackbarProvider>
            <LoginPage />
          </SnackbarProvider>
        } />
        <Route exact path="/forget-password" element={<ForgetPasswordPage />} />
        <Route exact path="/change-password" element={<ChangePasswordPage />} />
        <Route exact path="/dashboard" element={
          <ProtectedLayout>
            <DashboardPage />
          </ProtectedLayout>
        } />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AuthProvider> 
  );
}

export default App;
